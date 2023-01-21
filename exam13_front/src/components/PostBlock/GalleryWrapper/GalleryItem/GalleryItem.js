
import { uploadsUrlPictures } from '../../../../constants';

function GalleryItem({ picture }) {
  let imageSrc
  if (picture?.image) {
    imageSrc = `${uploadsUrlPictures}/${picture?.image}`;
  } else {
    imageSrc = "https://www.peoples.ru/character/movie/shrek/shrek_4.jpg"
  }
  return (
    <>
      <img className='post_block_gallery_item' src={imageSrc} alt={'gallery pic'} />
    </>
  );
}

export default GalleryItem;