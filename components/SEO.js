import Head from 'next/head';
import { Favicon } from '../public/favicon.ico';

export default function SEO({ title, description }) {
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
