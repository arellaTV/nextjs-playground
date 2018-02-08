import { Fragment } from 'react';
import Head from 'next/head';
import './styles.sass';

const About = () => (
  <Fragment>
    <Head>
      <title>About</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1>This is the about page</h1>
  </Fragment>
)

export default About;
