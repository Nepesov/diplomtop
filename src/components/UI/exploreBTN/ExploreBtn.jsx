import React from 'react'
import srtyles from './ExploreBtn.module.css'


const ExploreBtn = () => {
  return (
    <div class={srtyles.galaxy_button}>
        <button className={srtyles.explore__main__btn}>
          <span className={srtyles.spark}></span>
          <span className={srtyles.backdrop}></span>
          <span className={srtyles.galaxy__container}>
            <span className={srtyles.star__static}></span>
            <span className={srtyles.star__static}></span>
            <span className={srtyles.star__static}></span>
            <span className={srtyles.star__static}></span>
          </span>
          <span className={srtyles.galaxy}>
            <span className={srtyles.galaxy__ring}>
              <span className={srtyles.star}></span>
              <span className={srtyles.star}></span>
              <span className={srtyles.star}></span>
              <span className={srtyles.star}></span>
              <span className={srtyles.star}></span>
              <span className={srtyles.star}></span>
              <span className={srtyles.star}></span>
              <span className={srtyles.star}></span>
              <span className={srtyles.star}></span>
              <span className={srtyles.star}></span>
              <span className={srtyles.star}></span>
              <span className={srtyles.star}></span>
              <span className={srtyles.star}></span>
              <span className={srtyles.star}></span>
              <span className={srtyles.star}></span>
              <span className={srtyles.star}></span>
              <span className={srtyles.star}></span>
              <span className={srtyles.star}></span>
              <span className={srtyles.star}></span>
              <span className={srtyles.star}></span>
            </span>
          </span>
          <span style={{display:'block', margin: ' 0 auto' }} className={srtyles.text}>Explore</span>
        </button>
        <div className={srtyles.bodydrop}></div>
      </div>
  )
}

export default ExploreBtn
