import React, { useState, useEffect } from "react";
import Layout from '../../components/layouts/demo-layout';
import ReactDemoYaml from '../../../content/react-demo.yml';
import { half, content, search, character } from './style.module.scss';
import { rickAndMortyApi, finalSpaceApi } from '../../helpers/apis';

const ReactDemo = () => {
  const [randomNumberFinalSpace, setRandomNumberFinalSpace] = useState(callRandomCharacter(47));
  const [randomNumberRickAndMorty, setRandomNumberRickAndMorty] = useState(callRandomCharacter(20));
  const [randomStarFinalSpace, setRandomStarFinalSpace] = useState([]);
  const [randomStarRickAndMorty, setRandomStarRickAndMorty] = useState([]);

  useEffect(() => {
    fetch(`${finalSpaceApi}character/${randomNumberFinalSpace}`)
      .then((res) => res.json())
      .then((data) => setRandomStarFinalSpace(data));
  }, [randomNumberFinalSpace]);

  useEffect(() => {
    fetch(`${rickAndMortyApi}character/${randomNumberRickAndMorty}`)
      .then((res) => res.json())
      .then((data) => setRandomStarRickAndMorty(data));
  }, [randomNumberRickAndMorty]);
          
  function callRandomCharacter(limit) {
    let ranNum = Math.floor(Math.random() * limit) + 1;
    return ranNum;
  }

  function callNewRandomCharacter(show) {
    show === "finalSpace" ? setRandomNumberFinalSpace(callRandomCharacter(47)) : setRandomNumberRickAndMorty(callRandomCharacter(20))        
  }

  return (
    <Layout pageTitle="React Demo">
      {/* {ReactDemoYaml.title}
      {ReactDemoYaml.intro} */}

      <div className={half}>
        <div className={content}>
          <div className={search}>
            <input type="text" />
          </div> 
          <div className={character} onClick={(e) => callNewRandomCharacter("rickAndMorty")}>
            <img src={randomStarRickAndMorty.image} />
            <h2>{randomStarRickAndMorty.name}</h2>
          </div>
        </div>        
      </div>

      <div className={half}>
        <div className={content}>
          <div className={search}>
            <input type="text" />
          </div>
          <div className={character} onClick={(e) => callNewRandomCharacter("finalSpace")}>
            <img src={randomStarFinalSpace.img_url} />
            <h2>{randomStarFinalSpace.name}</h2>
          </div>
        </div>        
      </div>
    </Layout>    
  )
}

export default ReactDemo;