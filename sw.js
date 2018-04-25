self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open("v1").then(function(cache) {
            return cache.addAll([
                "/sunclock/",
                "/sunclock/index.html",
                "/sunclock/app.js",
                "/sunclock/sun.png",
                "/sunclock/star0.png",
                "/sunclock/star1.png",
                "/sunclock/star2.png",
                "/sunclock/star3.png",
                "/sunclock/star4.png",
                "/sunclock/star5.png",
                "/sunclock/star6.png",
                "/sunclock/star7.png",
                "/sunclock/star8.png",
                "/sunclock/star9.png",
                "/sunclock/star10.png",
                "/sunclock/star11.png",
            ]);
        })
    );
});

//self.addEventListener("fetch", function(event) {
//    event.respondWith(caches.match(event.request));
//});
