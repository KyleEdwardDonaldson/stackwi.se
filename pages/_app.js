import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import { GTMProvider } from '@elgorditosalsero/react-gtm-hook';

function MyApp({ Component, pageProps }) {
  const gtmParams = {
    id: 'G-0PPVJCZWK1'
  }
  
  return (
    <GTMProvider state={gtmParams}>
      <span className="theme-bejamas" />
      <Component {...pageProps} />
    </GTMProvider>
  );
}

export default MyApp;
