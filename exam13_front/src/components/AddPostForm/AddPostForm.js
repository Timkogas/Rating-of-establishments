import Button from '../UI/Button/Button';
import InputForm from '../UI/InputForm/InputForm';
import './AddPostForm.css'




function AddPostForm({ fields, onChangeHandler, addPostHandler, filename, onFileChangeHandler, errorAdd, setApproval, approval }) {

  return (
    <form className='form' onSubmit={(e) => { addPostHandler(e) }}>
      <h2 className='form_title'>Добавить новый заведение</h2>
      <div className='form_input_wrapper'>
        <p className='form_input_text'>Название:</p>
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

      <div className='form_input_wrapper form_input_wrapper_checkbox' >
        <p className='form_input_text'>Согласны? Узнали?</p>

        <div className='checkbox'>
          <input type="checkbox" name='approval'
            defaultChecked={false}
            onChange={(e) => { setApproval(prevState => !prevState) }}
            value={approval}
          />
          <span className='checkbox_text'>Согласен! Узнал!</span>
        </div>
      </div>

      {fields.title && fields.description && fields.image && approval ? <Button className='form_btn' type={"Success"} width='40%' text='Добавить пост' /> : null}
    </form>
  );
}

export default AddPostForm;