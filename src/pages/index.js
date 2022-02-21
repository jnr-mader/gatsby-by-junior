import * as React from "react";
import Layout from "../components/layouts/main-layout";
import HomeYaml from '../../content/home.yml';
import { content } from './style/style.module.scss';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <main className={content}>
        <h1>intro {HomeYaml.intro}</h1>
        <h1>body {HomeYaml.body}</h1>
        <h1>outro {HomeYaml.outro}</h1>
        <p>Lorem ipsum dolor sit amet, Boyo consectetur adipiscing elit. Donec pellentesque pulvinar tellus, a ultrices ipsum maximus at. Donec non dolor dignissim, finibus massa non, efficitur elit. Fusce elementum tellus nulla, in consectetur quam porta et. Donec bibendum, neque eu cursus tincidunt, nulla leo lacinia tortor, eu blandit eros massa ut orci. Cras maximus augue et ligula egestas, quis auctor libero lobortis. Vestibulum vestibulum at magna a laoreet. Vivamus porta varius mi vel lacinia. In pharetra et libero id luctus.</p>
        <figure>
          <img src="https://picsum.photos/seed/picsum/800/300" alt="Elephant at sunset" />
          <figcaption>Caption for the image</figcaption>
        </figure>     
        <p>Nunc vitae ornare elit, vitae semper est. Aenean semper arcu non nunc imperdiet porta. Pellentesque vitae fermentum purus. Cras condimentum nunc quis odio varius dictum. In lobortis faucibus tellus, sit amet vehicula erat lacinia eu. Suspendisse at nisi urna. Ut scelerisque nunc vitae eros consectetur bibendum. Curabitur dictum sem et mattis accumsan. Fusce sit amet elit at dolor ornare convallis vel in massa. Vivamus non vehicula urna. Donec gravida, mi non egestas pulvinar, massa leo imperdiet eros, sed elementum massa libero ac velit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque pulvinar tellus, a ultrices ipsum maximus at. Donec non dolor dignissim, finibus massa non, efficitur elit. Fusce elementum tellus nulla, in consectetur quam porta et. Donec bibendum, neque eu cursus tincidunt, nulla leo lacinia tortor, eu blandit eros massa ut orci. Cras maximus augue et ligula egestas, quis auctor libero lobortis. Vestibulum vestibulum at magna a laoreet. Vivamus porta varius mi vel lacinia. In pharetra et libero id luctus.</p>
        <p>Nunc vitae ornare elit, vitae semper est. Aenean semper arcu non nunc imperdiet porta. Pellentesque vitae fermentum purus. Cras condimentum nunc quis odio varius dictum. In lobortis faucibus tellus, sit amet vehicula erat lacinia eu. Suspendisse at nisi urna. Ut scelerisque nunc vitae eros consectetur bibendum. Curabitur dictum sem et mattis accumsan. Fusce sit amet elit at dolor ornare convallis vel in massa. Vivamus non vehicula urna. Donec gravida, mi non egestas pulvinar, massa leo imperdiet eros, sed elementum massa libero ac velit.</p>
      </main>
    </Layout>
  )
}

export default IndexPage;