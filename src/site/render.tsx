import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import Site, { publicRoutes } from './Site';
export { publicRoutes };
export function renderPage(path:string){
 const context: Record<string, any>={};
 HelmetProvider.canUseDOM=false;
 const body=renderToString(<HelmetProvider context={context}><Site pathname={path}/></HelmetProvider>);
 const h=context.helmet;return {body,head:h.title.toString()+h.meta.toString()+h.link.toString()+h.script.toString()};
}
