import * as React from 'react';
import Layout from '../../components/layouts/main-layout';
import AboutYaml from '../../../content/about.yml';
import { content } from '../style/style.module.scss';
import { infoBlocks, infoBlock, imgContainer, innerSkew, textContainer } from './style.module.scss';

const AboutPage = ({data}) => {
  console.log(data)
  return (
    <Layout pageTitle="About Me">
        <main className={content}>
            <h1>{AboutYaml.intro}</h1>
            <div>{AboutYaml.body}</div>
            <div className={infoBlocks}>

            {AboutYaml.highlights.map((item, index)=>{
              return (
                <div key={index} className={infoBlock} data-type={item.type}>
                <div className={imgContainer}>
                  <div className="img-inner">
                    <div className={innerSkew}>
                      <img src={item.photo} alt={item.title}/>
                    </div>
                  </div>
                </div>
                <div class={textContainer}>
                  <h3>{item.title}</h3>
                  <div>{item.description}</div>
                </div>
              </div>
                )              
            })}
            </div>
        </main>
    </Layout>    
  )
}

export default AboutPage;