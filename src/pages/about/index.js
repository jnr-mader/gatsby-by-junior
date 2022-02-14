import * as React from 'react';
import { graphql } from 'gatsby';
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
            
            <h1>hello :{data.site.siteMetadata.title}</h1>
            <div className={infoBlocks}>

            {AboutYaml.highlights.map((item, index)=>{
              return (
                <div key={index} className={infoBlock}>
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

export const query = graphql`
  query AboutPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default AboutPage;