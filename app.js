var sleeptime = null;
var wakeup = null;

document.body.onload = function() {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sunclock/sw.js", {scope: "/sunclock/"}).then(function(reg) {
            if (reg.installing) {
                console.log("Service worker installing");
            } else if (reg.waiting) {
                console.log("Service worker installed");
            } else if (reg.active) {
                console.log("Service worker active");
            }
        }).catch(function(error) {
            console.log("Service worker registration failed with " + error);
        });
    }

    document.onclick = function() {
        if (sleeptime !== null) {
            return;
        }
        document.body.className = "wake";
        document.getElementById("sun").style.display = "inline";
        document.getElementById("goodnight").style.display = "block";
    };

    document.ondblclick = function() {
        sleeptime = null;
        wakeup = null;
        document.onclick();
    }

    document.getElementById("goodnight").onclick = function(e) {
        e.target.style.display = "none";
        document.body.className = "goodnight";
        setTimeout(function() {
            document.getElementById("sun").style.display = "none";
            document.getElementById("star0").style.display = "inline";
        }, 2500);
        e.stopPropagation();
    };

    document.body.addEventListener("animationend", function(e) {
        sleeptime = new Date();
        wakeup = new Date();
        wakeup.setHours(0);
        wakeup.setMinutes(0);
        wakeup.setSeconds(0);
        wakeup.setMilliseconds(0);
        wakeup.setTime(wakeup.getTime() + (86400 + 7*3600) * 1000);
        //wakeup.setTime(sleeptime.getTime() + 20000);
        console.log("sleeptime " + sleeptime + " " + sleeptime.getTime());
        console.log("wakeup " + wakeup + " " + wakeup.getTime());
        console.log("countdown " + (wakeup.getTime() - sleeptime.getTime()));
    }, false);

    setInterval(function() {
        var now = new Date();
        var hour = (now.getHours() + 23) % 12 + 1;
        var minute = now.getMinutes();
        if (minute < 10) {
            minute = "0" + minute;
        }
        document.getElementById("clock").innerHTML = hour + ":" + minute;
        if (sleeptime !== null) {
            var progress = (now.getTime() - sleeptime.getTime()) / (wakeup.getTime() - sleeptime.getTime());
            if (progress < 1) {
                document.getElementById("progress").innerHTML = progress;
                for (var i = 0; i < 12; i++) {
                    var s = "star" + i;
                    console.log(s);
                    document.getElementById("star"+i).style.display = "none";
                }
                document.getElementById("star"+(Math.floor(progress*12))).style.display = "inline";
            } else {
                document.getElementById("sun").style.display = "inline";
                for (var i = 0; i < 12; i++) {
                    document.getElementById("star"+i).style.display = "none";
                }
                document.body.className = "wake";
                sleeptime = null;
                wakeup = null;
            }
        }
    }, 1000);
};
