import Button from '../../UI/Button/Button';
import InputForm from '../../UI/InputForm/InputForm';
import './AddPictureForm.css'


function AddPictureForm({ filename, addPictureHandler, onFileChangeHandler, onChangePictureHandler }) {

  return (
    <form onSubmit={(e) => { addPictureHandler(e) }}>
      <p className='post_block_title'>Добавить фото</p>
      <InputForm
        type="file"
        onFileChange={(e) => { onFileChangeHandler(e) }}
        filename={filename}
        name='image'
        widthWrapper='100wh'
        onChange={(e) => { onChangePictureHandler(e) }}
      />

      <Button text='Добавить фото' width='40%' />
    </form>
  );
}

export default AddPictureForm;