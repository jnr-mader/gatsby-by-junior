import * as React from 'react';
import Layout from '../../components/layouts/main-layout';
import { content } from '../style/style.module.scss';
import { workHeader } from './style.module.scss';

const WorkPage = () => {
  return (
    <Layout pageTitle="My Work">
        <main className={content}>
          <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
          <section>
            <h2 className={workHeader}>Front End Developer <span>@ Willowbreeze from Oct 2015 to Now</span></h2>
            <figure>
              <img src="https://picsum.photos/seed/picsum/800/300" alt="Elephant at sunset" />
              <figcaption>Willowbreeze</figcaption>
            </figure> 
            <p>
              Provide support for the marketing and content team of Pinnacle online bookmakers.
              Site development and maintenance within a .NET environment.
              Responsive design and development i.e. tablets and mobiles. 
              Cross-browser compatibility and site optimization, training.  
            </p> 
            <p>
              Code base: HTML5, CSS3, Sass, Javascript, React, Angular, jQuery, Node, Git, Asp.NET
            </p>
            <p>
              Design: Adobe Photoshop, Illustrator, Invision, Zeplin
            </p>
          </section> 
          <section>
            <h2 className={workHeader}>Junior Developer <span>@ Net Communities from Feb 2010 to Jun 2010</span></h2>
            <figure>
              <img src="https://picsum.photos/seed/picsum/800/300" alt="Elephant at sunset" />
              <figcaption>Net Communities</figcaption>
            </figure> 
            <p>Site development and maintenance. Cross-browser compatibility. Html newsletters. Site takeovers for marketing events. Creation of promotional sites.</p> 
          </section> 
          <section>
            <h2 className={workHeader}>Junior Developer <span>@ Net Communities from Feb 2010 to Jun 2010</span></h2>
            <figure>
              <img src="https://picsum.photos/seed/picsum/800/300" alt="Elephant at sunset" />
              <figcaption>Net Communities</figcaption>
            </figure> 
            <p>Site development and maintenance. Cross-browser compatibility. Html newsletters. Site takeovers for marketing events. Creation of promotional sites.</p> 
          </section> 
          <section>
            <h2 className={workHeader}>Junior Developer <span>@ Net Communities from Feb 2010 to Jun 2010</span></h2>
            <figure>
              <img src="https://picsum.photos/seed/picsum/800/300" alt="Elephant at sunset" />
              <figcaption>Net Communities</figcaption>
            </figure> 
            <p>Site development and maintenance. Cross-browser compatibility. Html newsletters. Site takeovers for marketing events. Creation of promotional sites.</p> 
          </section> 
          <section>
            <h2 className={workHeader}>Junior Developer <span>@ Net Communities from Feb 2010 to Jun 2010</span></h2>
            <figure>
              <img src="https://picsum.photos/seed/picsum/800/300" alt="Elephant at sunset" />
              <figcaption>Net Communities</figcaption>
            </figure> 
            <p>Site development and maintenance. Cross-browser compatibility. Html newsletters. Site takeovers for marketing events. Creation of promotional sites.</p> 
          </section>          
        </main>
    </Layout>    
  )
}

export default WorkPage;