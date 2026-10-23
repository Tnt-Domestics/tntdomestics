import { HelmetProvider } from 'react-helmet-async';
import Site from './site/Site';
export default function App(){return <HelmetProvider><Site pathname={window.location.pathname}/></HelmetProvider>;}
