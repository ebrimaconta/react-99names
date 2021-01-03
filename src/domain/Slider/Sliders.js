import * as React from 'react';
import { Zoom } from 'react-slideshow-image';
import { Link } from 'react-router-dom';

const images = [];
for (let i = 1; i < 101; i++) {
  images.push(require(`../../assets/image/names/names(${i}).jpg`));
}
const Silder = () => {
  const properties = {
    arrows: true,

    easing: 'ease',
    indicators: (i) => (
      <div className='bg-black text-gd  border-solid border-2   border-gd w-40 m-3 text-center h-20 text-2xl pt-4 -pr-3 italian-font  '>
        {i + 1}
      </div>
    ),
  };
  console.log(images);
  return (
    <div className='bg-black'>
      <Link to='/' className='contents'>
        <div className='bg-black text-gd  w-20   text-center   h-16 flex items-center justify-center italian-font  border-solid border-2   fixed border-gd  text-2xl capitalize py-10 px-16'>
          Back to Homepage
        </div>
      </Link>
      <div className='w-2/3 center-slider '>
        <div className=' slide-container    '>
          <Zoom {...properties}>
            {images.map((each, index) => (
              <img
                key={index}
                alt=''
                className='w-2/3 h-full center-slider '
                src={each}
              />
            ))}
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Silder;
