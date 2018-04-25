self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open("v1").then(function(cache) {
            return cache.addAll([
                "/~greg/sunclock/",
                "/~greg/sunclock/index.html",
                "/~greg/sunclock/app.js",
                "/~greg/sunclock/sun.png",
                "/~greg/sunclock/star0.png",
                "/~greg/sunclock/star1.png",
                "/~greg/sunclock/star2.png",
                "/~greg/sunclock/star3.png",
                "/~greg/sunclock/star4.png",
                "/~greg/sunclock/star5.png",
                "/~greg/sunclock/star6.png",
                "/~greg/sunclock/star7.png",
                "/~greg/sunclock/star8.png",
                "/~greg/sunclock/star9.png",
                "/~greg/sunclock/star10.png",
                "/~greg/sunclock/star11.png",
            ]);
        })
    );
});

//self.addEventListener("fetch", function(event) {
//    event.respondWith(caches.match(event.request));
//});
