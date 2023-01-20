import Button from '../UI/Button/Button';
import InputForm from '../UI/InputForm/InputForm';
import './AddPostForm.css'




function AddPostForm({ fields, onChangeHandler, addPostHandler, filename, onFileChangeHandler, errorAdd }) {

  return (
    <form className='form' onSubmit={(e) => { addPostHandler(e) }}>
      <h2 className='form_title'>Добавить новый пост</h2>
      <div className='form_input_wrapper'>
        <p className='form_input_text'>Заголовок:</p>
        <InputForm
          name='title'
          state={fields}
          onChange={(e) => { onChangeHandler(e) }}
          error={errorAdd}
        />
      </div>

      <div className='form_input_wrapper' >
        <p className='form_input_text'>Описание:</p>
        <InputForm
          name='description'
          type='textarea'
          state={fields}
          error={errorAdd}
          onChange={(e) => { onChangeHandler(e) }}
        />
      </div>

      <InputForm
        type="file"
        onFileChange={(e) => { onFileChangeHandler(e) }}
        filename={filename}
        name='image'
        widthWrapper='100wh'
        onChange={(e) => { onChangeHandler(e) }}
        error={errorAdd}
      />

      {errorAdd && <p style={{ textSize: '25px', color: "red", width: '100%', textAlign: 'center', marginBottom: '20px' }}>{errorAdd}</p>}
      <Button className='form_btn' type={"Success"} width='30%' text='Добавить пост' />
    </form>
  );
}

export default AddPostForm;