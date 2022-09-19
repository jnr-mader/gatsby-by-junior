import React from 'react';
import { random, add } from './style.module.scss';

const DynamicButton = ({onClick, text, buttonType}) => {    
    return (
        <button className={buttonType === "random" ? random : add} onClick={onClick}>{text}</button>
    )
}

export default DynamicButton