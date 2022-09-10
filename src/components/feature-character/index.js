import React, { useState, useEffect } from "react";
import { card, starName } from './style.module.scss';

const FeatureCharacter = ({details}) => {
    return (
        <div className={card}>
            <img src={details.image || details.img_url} />
            <h2 className={starName}>{details.name}</h2>
        </div>
    )
}

export default FeatureCharacter;