import Head from 'next/head';
import { Favicon } from '../public/favicon.ico';
import ReactGA from 'react-ga';

export default function SEO({ title, description }) {
  ReactGA.initialize('G-0PPVJCZWK1');

  ReactGA.pageview(window.location.pathname + window.location.search);

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
