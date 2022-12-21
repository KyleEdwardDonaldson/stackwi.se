import Head from 'next/head';
import { Favicon } from '../public/favicon.ico';
import TagManager from 'react-gtm-module'

export default function SEO({ title, description }) {
 
  const tagManagerArgs = {
    gtmId: 'G-0PPVJCZWK1'
  };
 
  TagManager.initialize(tagManagerArgs)

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
