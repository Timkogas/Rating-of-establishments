import { useRef } from 'react';
import './InputForm.css'

function InputForm({ name, state, placeholder, onChange, type = 'text', error, onFileChange, filename, fileTypes = "image/png, image/jpeg", widthWrapper = '80%' }) {
  const inputRef = useRef();
  const activateInput = (e) => {
    e.preventDefault()
    inputRef.current.click();
  };

  const style = {
    'border': `1px solid ${error ? 'red' : 'rgb(63, 63, 63)'}`
  }

  let input = <div className='form_input_wrapper' style={{ width: widthWrapper }}>
    <input
      className='form_input'
      id={name}
      name={name}
      type={type}
      value={state?.[name]}
      onChange={onChange}
      style={style}
      placeholder={placeholder}
    >
    </input>
  </div>

  if (type === 'file') {
    input = <div className='form_input_wrapper form_file_block' style={{ width: widthWrapper }}>
      <p className='form_input_text form_file_text_file'>Картинка:</p>
      <input
        type={type}
        id={type}
        name={name}
        onChange={onFileChange}
        accept={fileTypes}
        style={{ display: "none" }}
        ref={inputRef}
      />
      {filename ? <p className='form_file_name'>{filename}</p> : null}
      <button
        className='form_btn_file'
        onClick={(e) => { activateInput(e) }}
        style={style}
      >Выбрать файл</button>
    </div>
  }

  if (type === 'textarea') {
    input = <div className='form_input_wrapper' style={{ width: widthWrapper }}>
      <textarea
        className='form_input textarea'
        id={name}
        name={name}
        type={type}
        value={state?.[name]}
        onChange={onChange}
        style={style}
        placeholder={placeholder}
      />
    </div>
  }


  return (
    <>
      {input}
    </>

  )

}

export default InputForm;