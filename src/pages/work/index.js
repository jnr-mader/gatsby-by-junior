import * as React from 'react';
import Layout from '../../components/layouts/main-layout';
import WorkYaml from '../../../content/work.yml';
import { content } from '../style/style.module.scss';
import { workHeader, codeBaseList } from './style.module.scss';

const WorkPage = () => {
  return (
    <Layout pageTitle="My Work">
        <main className={content}>
          <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>

          {WorkYaml.work.map((item, index)=>{
              return (
                <section key={index}>
                  <h2 className={workHeader}>{item.position} <span>@ {item.company} from {item.dates}</span></h2>
                  <figure>
                    <img src={item.photo} alt={item.company} />
                    <figcaption>{item.company}</figcaption>
                  </figure> 
                  <div>{item.description} </div>
                  <div className={codeBaseList}>
                    <span>Code base:</span> 
                    <ul>
                      {item.codebase.map((code, index)=>{
                        return (
                          <li key={index}>{code}</li>
                        )
                      })}
                    </ul>
                  </div>
                </section>  
              )              
            })}                            
        </main>
    </Layout>    
  )
}

export default WorkPage;