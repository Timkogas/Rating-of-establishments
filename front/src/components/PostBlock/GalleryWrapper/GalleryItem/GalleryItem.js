import { uploadsUrlPictures } from '../../../../constants';
import DeleteBtn from '../../../UI/DeleteBtn/DeleteBtn';
import './GalleryItem.css'


function GalleryItem({ picture, deletePictureHandler }) {
  let imageSrc
  if (picture?.image) {
    imageSrc = `${uploadsUrlPictures}/${picture?.image}`;
  } else {
    imageSrc = "https://www.peoples.ru/character/movie/shrek/shrek_4.jpg"
  }

  return (
    <>
      <div className='post_block_gallery_item_wrapper'>
        <img className='post_block_gallery_item' src={imageSrc} alt={'gallery pic'} />
        <DeleteBtn
          onClick={deletePictureHandler}
        />
      </div>
    </>
  );
}
export default GalleryItem