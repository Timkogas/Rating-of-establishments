import Button from '../../UI/Button/Button';
import InputForm from '../../UI/InputForm/InputForm';
import './AddPictureForm.css'

const ratings = [{ value: 0, text: 0 }, { value: 1, text: 1 }, { value: 2, text: 2 }, { value: 3, text: 3 }, { value: 4, text: 4 }, { value: 5, text: 5 },]
function AddPictureForm({ filename, onChangeHandler, onFileChangeHandler, addPictureHandler }) {

  return (
    <form onSubmit={(e) => { addPictureHandler(e) }}>
      <p className='post_block_title'>Добавить фото</p>
      <InputForm
        type="file"
        onFileChange={(e) => { onFileChangeHandler(e) }}
        filename={filename}
        name='image'
        widthWrapper='100wh'
        onChange={(e) => { onChangeHandler(e) }}
      />

      <Button text='Добавить фото' width='40%' />
    </form>
  );
}

export default AddPictureForm;