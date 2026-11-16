/* Leuko Films: network-first para evitar versiones públicas obsoletas. */
const VERSION="leuko-v7-video-thumbnail";
const CORE=["./","index.html","style.css","script.js","assets/verba-dignitatis-poster.jpeg","manifest.json","icons/icon-192.png","icons/icon-512.png"];
self.addEventListener("install",event=>{
  event.waitUntil(caches.open(VERSION).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate",event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith("leuko-")&&key!==VERSION).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET"||new URL(event.request.url).origin!==self.location.origin)return;
  const url=new URL(event.request.url);
  const isPage=event.request.mode==="navigate";
  const isAsset=/\.(?:html|js|css)$/i.test(url.pathname);
  if(isPage||isAsset){
    event.respondWith(fetch(event.request).then(response=>{
      if(response.ok){const copy=response.clone();event.waitUntil(caches.open(VERSION).then(cache=>cache.put(event.request,copy)));}
      return response;
    }).catch(()=>caches.match(event.request).then(cached=>cached||caches.match("index.html"))));
  }else{
    event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{
      if(response.ok){const copy=response.clone();event.waitUntil(caches.open(VERSION).then(cache=>cache.put(event.request,copy)));}
      return response;
    })));
  }
});
