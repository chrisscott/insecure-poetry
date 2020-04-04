import React from 'react';
import Head from 'next/head';

import Theme from '../../components/Theme';

import { getHaikuFromShareSlug } from '../../generator/haiku';
import Haiku from '../../components/Haiku';

interface AppProps {
  slug: string;
}

interface SspProps {
  params: {slug: string};
}

const App = ({ slug }: AppProps): JSX.Element => {
  // console.log('pageslug', slug);
  const haiku = getHaikuFromShareSlug(slug);
  const haikuText = haiku.join('\n');

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Insecure Poetry</title>
        <meta name="description" content="Bad poetry from the most commonly used online passwords." />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Permanent+Marker|Caveat|Roboto:300,400,500,700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <meta property="og:site_name" content="Insecure Poetry" />
        <meta property="og:description" content={haikuText} />
      </Head>
      <Theme>
        <Haiku haiku={haiku} />
      </Theme>
    </>
  );
};

export async function getServerSideProps({ params: { slug } }: SspProps): Promise<any> {
  // console.log('getssp', slug);
  return { props: { slug } };
}

export default App;
