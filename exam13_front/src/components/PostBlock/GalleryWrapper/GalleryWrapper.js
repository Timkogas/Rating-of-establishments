import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import { uploadsUrlPictures } from '../../../constants';

function GalleryWrapper({ picturesPost, deletePictureHandler }) {


  const images = picturesPost.map((picture) => {
    let imageSrc
    if (picture?.image) {
      imageSrc = `${uploadsUrlPictures}/${picture?.image}`;
    } else {
      imageSrc = "https://www.peoples.ru/character/movie/shrek/shrek_4.jpg"
    }
    return ({ src: imageSrc })
  });


  return (
    <>
      <div className='post_block_gallery'>
        <p className='post_block_title' style={{textAlign:'center'}}>Галлерея</p>
        <Carousel images={images} style={{ height: 500, width: '60%', margin: '0 auto' }} isAutoPlaying={true} />
      </div>
    </>
  );
}

export default GalleryWrapper;