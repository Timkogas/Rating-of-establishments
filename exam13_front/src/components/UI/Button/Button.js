import './Button.css'

function Button({ onClick, text, width = '70%' }) {

  return (
    <>
      <button
        className='button'
        onClick={onClick}
        style={{ 'width': width }}
      >
        {text}
      </button>
    </>
  );
}

export default Button;