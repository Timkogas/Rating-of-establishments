import Button from '../../UI/Button/Button';
import InputForm from '../../UI/InputForm/InputForm';
import './AddReviewForm.css'

const ratings = [{ value: 0, text: 0 }, { value: 1, text: 1 }, { value: 2, text: 2 }, { value: 3, text: 3 }, { value: 4, text: 4 }, { value: 5, text: 5 },]
function AddReviewForm({ }) {

  return (
    <>
      <p className='post_block_title'>Добавить отзыв</p>
      <InputForm
        name='text'
        type='textarea'
        widthWrapper='100%'
      />
      <div className='selects_wrapper'>
        <div>
          <strong>Качество еды: </strong>
          <select name='ratingQuality' className='select'>
            {ratings.map((rating, i) => {
              return (
                <option key={i} value={rating.value}>{rating.text}</option>
              )
            })}
          </select>
        </div>
        <div>
          <strong>Качествр сервеса: </strong>
          <select name='ratingService' className='select'>
            {ratings.map((rating, i) => {
              return (
                <option key={i} value={rating.value}>{rating.text}</option>
              )
            })}
          </select>
        </div>
        <div>
          <strong>Качество интерьера: </strong>
          <select name='ratingInterior' className='select'>
            {ratings.map((rating, i) => {
              return (
                <option key={i} value={rating.value}>{rating.text}</option>
              )
            })}
          </select>
        </div>

        <Button text='Добавить отзыв' width='40%' />
      </div>
    </>
  );
}

export default AddReviewForm;