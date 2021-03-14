import * as React from 'react';
import ImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';


const images = [];
for (let i = 1; i < 100; i++) {
  images.push({
    original: require(`../../assets/image/names/names(${i}).jpg`).default,
    thumbnail: require(`../../assets/image/names/thumbnail/names(${i}).jpg`)
      .default,
  });
}


const Silder = () => {
  return (
    <div className='bg-black'>
      <Link to='/' className='contents'>
        <div className='bg-black text-gd w-full lg:w-20   text-center   h-16 flex items-center justify-center italian-font mb-3 lg:mb-0 border-solid border-2  relative  lg:fixed border-gd  lg:text-2xl text-xl capitalize py-10 px-16  z-50'>
          Back to Homepage
        </div>
      </Link>
      <div className=''>
        <ImageGallery items={images} autoPlay={true} slideInterval={5000} />
      </div>
    </div>
  );
};

export default Silder;
