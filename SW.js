self.addEventListener("install", e=> {

e.waitUntil(

caches.open("static").then(cache => {

return cache.addAll(["./", "./static/css/main.4a297cab.css", "./logo192.png"]);

})
);
});

self.addEventListener("fetch", e =>{
console.log('Intercepting fetch request for: ${e.request.url}'); 
});
