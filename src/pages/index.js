import * as React from "react";
import Layout from "../components/layouts/main-layout";
import HomeYaml from '../../content/home.yml';
import netlify from '../images/netlify.svg'
import { content, skills, skillIcons } from './style/style.module.scss';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <main className={content}>
        <div>{HomeYaml.title}</div>
        <div>{HomeYaml.intro}</div>
        <figure>
          <img src="https://picsum.photos/seed/picsum/800/300" alt="Elephant at sunset" />
          <figcaption>Caption for the image</figcaption>
        </figure>  
        <div className={skills}>
          <h3>Over ten yrs</h3>
          <div className={skillIcons}>
            <figure>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html5" />
              <figcaption>html5</figcaption>
            </figure>
            <figure>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css" />
              <figcaption>css</figcaption>
            </figure>
            <figure>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript" />
              <figcaption>javascript</figcaption>
            </figure>
            <figure>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" alt="jquery" />
              <figcaption>jquery</figcaption>
            </figure>            
          </div>
        </div>
        <div className={skills}>
          <h3>Under six yrs</h3>
          <div className={skillIcons}>
            <figure>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="sass" />
              <figcaption>sass</figcaption>
            </figure>
            <figure>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" alt="asp.net" />
              <figcaption>asp.net</figcaption>
            </figure>  
            <figure>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" />
              <figcaption>git</figcaption>
            </figure>
            <figure>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" />
              <figcaption>github</figcaption>
            </figure>                      
          </div>
        </div>
        <div className={skills}>
          <h3>Under three yrs</h3>
          <div className={skillIcons}>
            <figure>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" />
              <figcaption>react</figcaption>
            </figure>
            <figure>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="npm" />
              <figcaption>npm</figcaption>
            </figure>
            <figure>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="nodejs" />
              <figcaption>nodejs</figcaption>
            </figure>            
            <figure>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" alt="php" />
              <figcaption>php</figcaption>
            </figure>
            <figure>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-plain.svg" alt="gatsby" />
              <figcaption>gatsby</figcaption>
            </figure>
            <figure>
              <img src={netlify} alt="netlify" />
              <figcaption>netlify</figcaption>
            </figure>
            <figure>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="angularjs" />
              <figcaption>angularjs</figcaption>
            </figure>
          </div>
        </div>
        <div>{HomeYaml.body}</div>
        <div>{HomeYaml.outro}</div>
      </main>
    </Layout>
  )
}

export default IndexPage;