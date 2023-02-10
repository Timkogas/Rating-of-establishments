import HasAccess from '../../UI/HasAccess/HasAccess';
import './DeleteBtn.css'



function DeleteBtn({ onClick }) {


  return (
    <>
      <HasAccess roles={['admin']}>
          <div className='btn_delete ' onClick={onClick}>
            <span className='btn_delete_cross'>X</span>
          </div>
      </HasAccess>
    </>
  );
}

export default DeleteBtn;