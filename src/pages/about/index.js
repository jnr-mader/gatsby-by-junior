import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layouts/main-layout';
import AboutYaml from '../../../content/about.yml';
import { infoBlocks, infoBlock, imgContainer, innerSkew, textContainer } from './style.module.scss';

const AboutPage = ({data}) => {
  return (
    <Layout pageTitle="About Me">
        <main>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
            <h1>hello :{data.site.siteMetadata.title}</h1>
            <h1>{AboutYaml.title}</h1>
            <h1>{AboutYaml.intro}</h1>
            <div>{AboutYaml.body}</div>
            <div className={infoBlocks}>
              <div className={infoBlock}>
                <div className={imgContainer}>
                  <div className="img-inner">
                    <div className={innerSkew}>
                      <img src="https://picsum.photos/300"/>
                    </div>
                  </div>
                </div>
                <div class={textContainer}>
                  <h3>A blue bird</h3>
                  <div>
                    This a demo experiment to skew image container. It looks good.
                  </div>
                </div>
              </div>
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