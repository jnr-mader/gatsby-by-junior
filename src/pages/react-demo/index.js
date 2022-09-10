import React, { useState, useEffect } from "react";
import Layout from '../../components/layouts/demo-layout';
import ReactDemoYaml from '../../../content/react-demo.yml';
import { half, content, search, character } from './style.module.scss';
import { rickAndMortyApi, finalSpaceApi } from '../../helpers/apis';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import Search from "../../components/search";
import FeatureCharacter from "../../components/feature-character";

const ReactDemo = () => {
  const [finalSpaceData, setFinalSpaceData] = useState([]);
  const [rickAndMortyData, setRickAndMortyData] = useState([]);
  const [randomNumberFinalSpace, setRandomNumberFinalSpace] = useState(callRandomCharacter(47));
  const [randomNumberRickAndMorty, setRandomNumberRickAndMorty] = useState(callRandomCharacter(20));
  const [randomStarFinalSpace, setRandomStarFinalSpace] = useState([]);
  const [randomStarRickAndMorty, setRandomStarRickAndMorty] = useState([]);

  useEffect(() => {
    fetch(`${finalSpaceApi}character/`)
      .then((res) => res.json())
      .then((data) => setFinalSpaceData(data));
  }, []);

  useEffect(() => {
    fetch(`${rickAndMortyApi}character/`)
      .then((res) => res.json())
      .then((data) => setRickAndMortyData(data.results));
  }, []);

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
            <Search data={rickAndMortyData} />
          </div> 
          <FeatureCharacter details={randomStarRickAndMorty} />
          <button onClick={(e) => callNewRandomCharacter("rickAndMorty")}>Select random star</button>
        </div>        
      </div>

      <div className={half}>
        <div className={content}>
          <div className={search}>
            <Search data={finalSpaceData} />
          </div>
          <FeatureCharacter details={randomStarFinalSpace} />
          <button onClick={(e) => callNewRandomCharacter("finalSpace")}>Select random star</button>
        </div>        
      </div>
    </Layout>    
  )
}

export default ReactDemo;