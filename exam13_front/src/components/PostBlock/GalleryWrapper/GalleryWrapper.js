
import GalleryItem from './GalleryItem/GalleryItem';
import './GalleryWrapper.css'

function GalleryWrapper({ picturesPost, deletePictureHandler }) {

  return (
    <>
      <div className='post_block_gallery'>
        <p className='post_block_title'>Галлерея</p>
        {picturesPost.length ? picturesPost.map((picture) => {
          return (<GalleryItem
            key={picture._id}
            picture={picture}
            deletePictureHandler={(e)=>{deletePictureHandler(e, picture._id)}}
          />)
        }) : 'Картинок нет :с'}
      </div>
    </>
  );
}

export default GalleryWrapper;