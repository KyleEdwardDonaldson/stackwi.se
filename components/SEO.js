import Head from 'next/head';
import { Favicon } from '../public/favicon.ico';
import ReactGA from 'react-ga4';
import {useEffect} from 'react';

export default function SEO({ title, description }) {
  ReactGA.initialize('G-0PPVJCZWK1');

  useEffect(() => {
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  });

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <link rel="icon" href={Favicon} />
      <link rel="icon" type="image/x-icon" href={Favicon}></link>
    </Head>
  );
}
