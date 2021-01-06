import * as React from 'react';
import ImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';

const images = [];
for (let i = 1; i < 101; i++) {
  images.push({
    original: require(`../../assets/image/names/names(${i}).jpg`),
  });
}
const Silder = () => {
  /* const properties = {
    arrows: true,
    easing: 'ease',
    indicators: (i) => (
      <div className='bg-black text-gd  border-solid border-2   border-gd w-40 m-3 text-center h-20 text-2xl pt-4 -pr-3 italian-font  '>
        {i + 1}{' '}
      </div>
    ),
  }; */
  console.log(images);
  return (
    <div className='bg-black'>
      <Link to='/' className='contents'>
        <div className='bg-black text-gd w-full lg:w-20   text-center   h-16 flex items-center justify-center italian-font mb-3 lg:mb-0 border-solid border-2  relative  lg:fixed border-gd  lg:text-2xl text-xl capitalize py-10 px-16 '>
          Back to Homepage
        </div>
      </Link>
      <div className='     '>{<ImageGallery items={images} />}</div>
    </div>
  );
};

export default Silder;
