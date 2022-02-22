import * as React from 'react';
import Layout from '../../components/layouts/main-layout';
import AboutYaml from '../../../content/about.yml';
import { content, cmsText } from '../style/style.module.scss';
import { infoBlocks, infoBlock, imgContainer, innerSkew, textContainer } from './style.module.scss';

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
        <main className={content}>
            <div className={cmsText}>{AboutYaml.intro}</div>            
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