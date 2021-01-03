import React, { Component, createRef } from 'react';
import TWEEN from '@tweenjs/tween.js';
import ResizeObserver from 'resize-observer-polyfill';
import { validatePropTypes, propTypes, getProps } from './props';
import {
  getUnhandledProps,
  showNextArrow,
  showPreviousArrow,
  showIndicators,
  getEasing
} from './helpers.js';

class Slideshow extends Component {
  constructor(props) {
    super();
    this.state = {
      index:
        props.defaultIndex && props.defaultIndex < props.children.length
          ? props.defaultIndex
          : 0
    };
    this.width = 0;
    this.dragging = false;
    this.imageContainer = null;
    this.wrapper = null;
    this.timeout = null;
    this.moveSlides = this.moveSlides.bind(this);
    this.pauseSlides = this.pauseSlides.bind(this);
    this.startSlides = this.startSlides.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.initResizeObserver = this.initResizeObserver.bind(this);
    this.reactSlideshowWrapper = createRef();
    this.goToSlide = this.goToSlide.bind(this);
    this.tweenGroup = new TWEEN.Group();
    this.startSwipe = this.startSwipe.bind(this);
    this.endSwipe = this.endSwipe.bind(this);
    this.swipe = this.swipe.bind(this);
    this.distanceSwiped = 0;
  }

  componentDidMount() {
    this.setWidth();
    this.initResizeObserver();
    validatePropTypes(this.props);
    const { autoplay, duration } = getProps(this.props);
    if (autoplay) {
      this.timeout = setTimeout(() => this.goNext(), duration);
    }
  }

  initResizeObserver() {
    this.resizeObserver = new ResizeObserver(entries => {
      if (!entries) return;
      this.handleResize();
    });
    this.resizeObserver.observe(this.reactSlideshowWrapper.current);
  }

  componentWillUnmount() {
    this.willUnmount = true;
    clearTimeout(this.timeout);
    this.removeResizeObserver();
  }

  startSwipe(e) {
    const { canSwipe } = getProps(this.props);
    if (canSwipe) {
      this.startingClientX = e.touches ? e.touches[0].pageX : e.clientX;
      clearTimeout(this.timeout);
      this.dragging = true;
    }
  }

  endSwipe() {
    const { canSwipe } = getProps(this.props);
    if (canSwipe) {
      this.dragging = false;
      if (Math.abs(this.distanceSwiped) / this.width > 0.2) {
        if (this.distanceSwiped < 0) {
          this.goNext();
        } else {
          this.goBack();
        }
      } else {
        if (Math.abs(this.distanceSwiped) > 0) {
          this.slideImages(this.state.index, 300);
        }
      }
    }
  }

  swipe(e) {
    const { canSwipe } = getProps(this.props);
    if (canSwipe) {
      const clientX = e.touches ? e.touches[0].pageX : e.clientX;
      if (this.dragging) {
        let translateValue = this.width * (this.state.index + 1);
        this.distanceSwiped = clientX - this.startingClientX;
        translateValue -= this.distanceSwiped;
        this.imageContainer.style.transform = `translate(-${translateValue}px)`;
      }
    }
  }

  removeResizeObserver() {
    if (
      this.resizeObserver &&
      this.reactSlideshowWrapper &&
      this.reactSlideshowWrapper.current
    ) {
      this.resizeObserver.unobserve(this.reactSlideshowWrapper.current);
    }
  }

  setWidth() {
    // the .slice.call was needed to support ie11
    this.allImages = Array.prototype.slice.call(
      this.wrapper.querySelectorAll(`.images-wrap > div`),
      0
    );
    this.width = this.wrapper.clientWidth;
    const fullwidth = this.width * (this.props.children.length + 2);
    this.imageContainer.style.width = `${fullwidth}px`;
    this.imageContainer.style.transform = `translate(-${this.width *
      (this.state.index + 1)}px)`;
    this.applySlideStyle();
  }

  componentDidUpdate(props) {
    const { autoplay, duration, children } = getProps(this.props);
    const newProps = getProps(props);
    if (autoplay !== newProps.autoplay) {
      if (autoplay) {
        this.timeout = setTimeout(() => this.goNext(), duration);
      } else {
        clearTimeout(this.timeout);
      }
    }
    if (children.length != newProps.children.length) {
      this.setWidth();
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => this.goNext(), duration);
    }
  }

  handleResize() {
    this.setWidth();
  }

  applySlideStyle() {
    this.allImages.forEach((eachImage, index) => {
      eachImage.style.width = `${this.width}px`;
    });
  }

  pauseSlides() {
    if (getProps(this.props).pauseOnHover) {
      clearTimeout(this.timeout);
    }
  }

  startSlides() {
    const { pauseOnHover, autoplay, duration } = getProps(this.props);
    if (this.dragging) {
      this.endSwipe()
    } else {
      if (pauseOnHover && autoplay) {
        this.timeout = setTimeout(() => this.goNext(), duration);
      }
    }
  }

  moveSlides({ currentTarget: { dataset } }) {
    if (dataset.type === 'next') {
      this.goNext();
    } else {
      this.goBack();
    }
  }

  goToSlide({ currentTarget }) {
    this.goTo(parseInt(currentTarget.dataset.key));
  }

  goTo(index) {
    this.slideImages(index);
  }

  goNext() {
    const { index } = this.state;
    const { children, infinite } = getProps(this.props);
    if (!infinite && index === children.length - 1) {
      return;
    }
    this.slideImages(index + 1);
  }

  goBack() {
    const { index } = this.state;
    const { infinite } = getProps(this.props);
    if (!infinite && index === 0) {
      return;
    }
    this.slideImages(index - 1);
  }

  render() {
    const { children, indicators, arrows } = getProps(this.props);
    const unhandledProps = getUnhandledProps(propTypes, this.props);
    const { index } = this.state;
    const style = {
      transform: `translate(-${(index + 1) * this.width}px)`
    };

    return (
      <div aria-roledescription="carousel" {...unhandledProps}>
        <div
          className="react-slideshow-container"
          onMouseEnter={this.pauseSlides}
          onMouseOver={this.pauseSlides}
          onMouseLeave={this.startSlides}
          onMouseDown={this.startSwipe}
          onMouseUp={this.endSwipe}
          onMouseMove={this.swipe}
          onTouchStart={this.startSwipe}
          onTouchEnd={this.endSwipe}
          onTouchCancel={this.endSwipe}
          onTouchMove={this.swipe}
          ref={this.reactSlideshowWrapper}
        >
          {arrows &&
            showPreviousArrow(
              getProps(this.props),
              this.state.index,
              this.moveSlides
            )}
          <div
            className={`react-slideshow-wrapper slide`}
            ref={ref => (this.wrapper = ref)}
          >
            <div
              className="images-wrap"
              style={style}
              ref={ref => (this.imageContainer = ref)}
            >
              <div
                data-index="-1"
                aria-roledescription="slide"
                aria-hidden="false"
              >
                {children[children.length - 1]}
              </div>
              {children.map((each, key) => (
                <div
                  data-index={key}
                  key={key}
                  className={key === index ? 'active' : ''}
                  aria-roledescription="slide"
                  aria-hidden={key === index ? 'false' : 'true'}
                >
                  {each}
                </div>
              ))}
              <div
                data-index="-1"
                aria-roledescription="slide"
                aria-hidden="false"
              >
                {children[0]}
              </div>
            </div>
          </div>
          {arrows &&
            showNextArrow(
              getProps(this.props),
              this.state.index,
              this.moveSlides
            )}
        </div>
        {indicators &&
          showIndicators(
            getProps(this.props),
            this.state.index,
            this.goToSlide
          )}
      </div>
    );
  }

  slideImages(index, animationDuration) {
    let {
      children,
      transitionDuration,
      autoplay,
      infinite,
      duration,
      onChange,
      easing
    } = getProps(this.props);
    transitionDuration = animationDuration || transitionDuration;
    const existingTweens = this.tweenGroup.getAll();
    if (!existingTweens.length) {
      clearTimeout(this.timeout);
      const value = {
        margin: -this.width * (this.state.index + 1) + this.distanceSwiped
      };
      const tween = new TWEEN.Tween(value, this.tweenGroup)
        .to({ margin: -this.width * (index + 1) }, transitionDuration)
        .onUpdate(value => {
          this.imageContainer.style.transform = `translate(${value.margin}px)`;
        })
        .start();
      tween.easing(getEasing(easing));
      let animate = () => {
        if (this.willUnmount) {
          this.tweenGroup.removeAll();
          return;
        }
        requestAnimationFrame(animate);
        this.tweenGroup.update();
      };

      animate();

      tween.onComplete(() => {
        if (this.willUnmount) {
          return;
        }
        this.distanceSwiped = 0;
        let newIndex = index;
        if (newIndex < 0) {
          newIndex = children.length - 1;
        } else if (newIndex >= children.length) {
          newIndex = 0;
        }

        if (typeof onChange === 'function') {
          onChange(this.state.index, newIndex);
        }
        this.setState(
          {
            index: newIndex
          },
          () => {
            if (autoplay && (infinite || this.state.index < children.length)) {
              clearTimeout(this.timeout);
              this.timeout = setTimeout(() => this.goNext(), duration);
            }
          }
        );
      });
    }
  }
}

export default Slideshow;
