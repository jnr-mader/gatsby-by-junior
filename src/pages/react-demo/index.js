import React, { useState, useEffect } from "react";
import Layout from '../../components/layouts/demo-layout';
import ReactDemoYaml from '../../../content/react-demo.yml';
import { half, content, search, hero, heroTitle } from './style.module.scss';
import { rickAndMortyApi, finalSpaceApi } from '../../helpers/apis';
// import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import Search from "../../components/search";
import FeatureCharacter from "../../components/feature-character";
import DynamicButton from "../../components/dynamicButton";

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

  function addToTeam(team) {
    team === "finalSpace" ? alert("final") : alert("ricky")        
  }

  return (
    <Layout pageTitle="React Demo">
      <div className={hero}>        
        <h2 className={heroTitle}>{ReactDemoYaml.title}</h2>
        <p>{ReactDemoYaml.intro}</p>        
      </div>

      <div className={half}>
        <div className={content}>
          <div className={search}>
            <Search data={rickAndMortyData} updateStar={setRandomStarRickAndMorty}  />
          </div> 
          <FeatureCharacter details={randomStarRickAndMorty} />
          <DynamicButton onClick={(e) => callNewRandomCharacter("rickAndMorty")} text={"Select random star"} type={"random"} />
          <DynamicButton onClick={(e) => addToTeam("rickAndMorty")} text={"Add to team Rick and Morty"} type={"add"} />
        </div>        
      </div>

      <div className={half}>
        <div className={content}>
          <div className={search}>
            <Search data={finalSpaceData} updateStar={setRandomStarFinalSpace} />
          </div>
          <FeatureCharacter details={randomStarFinalSpace} />
          <DynamicButton onClick={(e) => callNewRandomCharacter("finalSpace")} text={"Select random star"} buttonType={"random"} />
          <DynamicButton onClick={(e) => addToTeam("finalSpace")} text={"Add to team Final Space"} buttonType={"add"} />
        </div>        
      </div>
    </Layout>    
  )
}

export default ReactDemo;