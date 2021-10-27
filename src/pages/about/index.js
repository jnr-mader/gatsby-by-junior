import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layouts/main-layout';
import AboutYaml from '../../../content/about.yml';

const AboutPage = ({data}) => {
  return (
    <Layout pageTitle="About Me">
        <main>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
            <h1>hello :{data.site.siteMetadata.title}</h1>
            <h1>{AboutYaml.title}</h1>
            <h1>{AboutYaml.intro}</h1>
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