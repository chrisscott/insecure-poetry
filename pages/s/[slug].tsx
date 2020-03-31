import React from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';

import Main from '../../components/main';

const App = ({slug}): JSX.Element => {
  // const {query: {slug}, query} = useRouter();
  console.log('slug', slug);
  // console.log('query', query);
  return (
    <>
    <Head>
      <meta charSet="utf-8" />
      <title>Insecure Poetry</title>
      <meta name="description" content="Bad poetry from the most commonly used online passwords." />
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Permanent+Marker|Caveat|Roboto:300,400,500,700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>
    <Main poem={slug} />
    </>
  );
};

export async function getServerSideProps({params: {slug}}) {
  console.log('getssp', slug);
  return { props: { slug } }
}

export default App;

