import {Review} from './components'
import reviews from './data'
import { useState } from 'react';

const App = () => {
  const [index, setIndex] = useState(0)
  const prev = () => {
    setIndex(prevIndex => {
      let newIndex = prevIndex - 1
      if (prevIndex === 0) {
        newIndex = reviews.length - 1
      }
      return newIndex
    })
  }
  const next = () => {
    setIndex(prevIndex => {
      let newIndex = prevIndex + 1
      if (prevIndex === reviews.length - 1) {
          newIndex = 0
      }
      return newIndex
    })
  }
  const randomize = () => {
    const randomIndex = Math.floor(Math.random() * reviews.length)
    console.log(randomIndex)
    setIndex(randomIndex)
  }
  return (
    <section className="container">
      <Review reviews={reviews} index={index} prev={prev} next={next} randomize={randomize}/>
   </section>
  )
};
export default App;
