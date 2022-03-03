import * as React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { eachSlide, slideImg } from './style.module.scss';

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true
  };

const Slideshow = ({slideContent}) => {
    return (
      <div>
        <Slide easing="ease" {...properties}>
            {slideContent.map((item, index)=>{
                return (
                    <div key={index} className={eachSlide}>
                        <div className={slideImg} style={{'backgroundImage': `url(${item.img})`}}>
                        <span>{item.company}</span>
                        </div>
                    </div>
                )              
            })}
        </Slide>
      </div>
    )
};

export default Slideshow;