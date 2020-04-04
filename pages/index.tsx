import Head from 'next/head';
import React from 'react';

import Theme from '../components/Theme';
import Welcome from '../components/Welcome';

const App = (): JSX.Element => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>Insecure Poetry</title>
      <meta name="description" content="Bad poetry from the most commonly used online passwords." />
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Permanent+Marker|Caveat|Roboto:300,400,500,700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>
    <Theme>
      <Welcome />
    </Theme>
  </>
);

export default App;
