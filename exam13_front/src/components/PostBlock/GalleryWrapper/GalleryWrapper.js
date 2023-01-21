import React from 'react';
import GalleryItem from './GalleryItem/GalleryItem';


function GalleryWrapper({ picturesPost, deletePictureHandler }) {




  return (
    <>
      <div className='post_block_gallery'>
        <p className='post_block_title' style={{ textAlign: 'center' }}>Галерея</p>
        {picturesPost.length ? picturesPost.map((picture) => {
          return (<GalleryItem
            key={picture._id}
            picture={picture}
            deletePictureHandler={(e) => { deletePictureHandler(e, picture._id) }}
          />)
        }) : 'Картинок нет :с'}

      </div>
    </>
  );
}

export default GalleryWrapper;