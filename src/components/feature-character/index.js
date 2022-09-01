import React, { useState, useEffect } from "react";
import { card, starName } from './style.module.scss';

const FeatureCharacter = ({name, image}) => {
    return (
        <div className={card}>
            <img src={image} />
            <h2 className={starName}>{name}</h2>
        </div>
    )
}

export default FeatureCharacter;