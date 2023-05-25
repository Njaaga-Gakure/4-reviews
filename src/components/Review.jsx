import { SlArrowLeft, SlArrowRight } from 'react-icons/all';
const Review = ({reviews, index, prev, next, randomize}) => {
  const {name, job, image, text} = reviews[index]
  return (
  <article className="review-card">
    <img className="reviewer-img" src={image} alt={name} />
    <h5 className="reviewer-name">{name}</h5>
    <span className="reviewer-job">{job}</span>
    <p className="review-text">{text}</p>
    <button onClick={prev} className="btn btn-left"><SlArrowLeft /></button>
    <button  onClick={next} className="btn btn-right"><SlArrowRight /></button>
    <button onClick={randomize} className='btn-random'>suprise me</button>
  </article>
  )
};
export default Review;
