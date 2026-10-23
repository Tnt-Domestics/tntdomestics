import { defineConfig, createServer, type ViteDevServer, type Plugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { componentTagger } from 'lovable-tagger';
const MAX_PRERENDER_PAGES=100;
function staticPages():Plugin{
 let server:ViteDevServer|undefined;let outDir='dist';
 const inject=(html:string,rendered:{body:string;head:string})=>html.replace(/<title>[\s\S]*?<\/title>/g,'').replace(/<meta\s[^>]*(?:name="(?:description|twitter:[^"]+)"|property="og:[^"]+")[^>]*>/g,'').replace('</head>',rendered.head+'</head>').replace('<div id="root"></div>','<div id="root">'+rendered.body+'</div>');
  return {name:'tnt-static-pages',configResolved(config){outDir=config.build.outDir;},configureServer(s){server=s;},transformIndexHtml:{order:'post',async handler(html,ctx){if(!server||!ctx.originalUrl)return html;const mod=await server.ssrLoadModule('/src/site/render.tsx');return inject(html,mod.renderPage(ctx.originalUrl.split('?')[0]));}},async closeBundle(){
  const prevNodeEnv=process.env.NODE_ENV;process.env.NODE_ENV='development';
  const renderer=await createServer({configFile:false,plugins:[react()],resolve:{alias:{'@':path.resolve(__dirname,'src')}},server:{middlewareMode:true},appType:'custom'});
  try{const mod=await renderer.ssrLoadModule('/src/site/render.tsx');const routes=[...mod.publicRoutes,'/thank-you'];if(routes.length>MAX_PRERENDER_PAGES)throw new Error('Prerender page limit exceeded');const template=await readFile(path.join(outDir,'index.html'),'utf8');for(const route of routes){const dir=path.join(outDir,route.slice(1));await mkdir(dir,{recursive:true});await writeFile(path.join(dir,'index.html'),inject(template,mod.renderPage(route)));}}finally{await renderer.close();process.env.NODE_ENV=prevNodeEnv;}
 }};
}
export default defineConfig(({mode})=>({server:{host:'::',port:8080,hmr:{overlay:false}},plugins:[react(),mode==='development'&&componentTagger(),staticPages()].filter(Boolean),resolve:{alias:{'@':path.resolve(__dirname,'src')}}}));
