import Button from '../../UI/Button/Button';
import InputForm from '../../UI/InputForm/InputForm';
import './AddReviewForm.css'

const ratings = [{ value: 0, text: 0 }, { value: 1, text: 1 }, { value: 2, text: 2 }, { value: 3, text: 3 }, { value: 4, text: 4 }, { value: 5, text: 5 },]
function AddReviewForm({newReview, onChangeHandler}) {

  return (
    <form onSubmit={() => { }}>
      <p className='post_block_title'>Добавить отзыв</p>
      <InputForm
        name='text'
        type='textarea'
        widthWrapper='100%'
        state={newReview}
        onChange={(e)=>{onChangeHandler(e)}}
      />
      <div className='selects_wrapper'>
        <div>
          <strong>Качество еды: </strong>
          <select name='ratingQuality' className='select' onChange={(e)=>{onChangeHandler(e)}} value={newReview.ratingQuality}>
            {ratings.map((rating, i) => {
              return (
                <option key={i} value={rating.value}>{rating.text}</option>
              )
            })}
          </select>
        </div>
        <div>
          <strong>Качествр сервеса: </strong>
          <select name='ratingService' className='select' onChange={(e)=>{onChangeHandler(e)}} value={newReview.ratingService}>
            {ratings.map((rating, i) => {
              return (
                <option key={i} value={rating.value}>{rating.text}</option>
              )
            })}
          </select>
        </div>
        <div>
          <strong>Качество интерьера: </strong>
          <select name='ratingInterior' className='select' onChange={(e)=>{onChangeHandler(e)}} value={newReview.ratingInterior}>
            {ratings.map((rating, i) => {
              return (
                <option key={i} value={rating.value}>{rating.text}</option>
              )
            })}
          </select>
        </div>

        <Button text='Добавить отзыв' width='40%' />
      </div>
    </form>
  );
}

export default AddReviewForm;