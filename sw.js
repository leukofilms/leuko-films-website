/* Service worker de Leuko Films: guarda la web para que abra sin conexión.
   Si cambias algún archivo, sube el número de VERSION para que los móviles se actualicen. */
const VERSION="leuko-v4-delanena";
const CORE=["./","index.html","style.css","script.js","assets/verba-dignitatis-poster.jpeg","manifest.json","icons/icon-192.png","icons/icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
/* Caché primero; lo que se descarga (incluida la fuente Jost) se guarda para la próxima vez */
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{
    if(res&&(res.ok||res.type==="opaque")){const cp=res.clone();caches.open(VERSION).then(c=>c.put(e.request,cp))}
    return res}).catch(()=>caches.match("index.html"))));
});
