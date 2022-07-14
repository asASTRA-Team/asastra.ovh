// Copyright © 2022 asASTRA. All rights reserved.
// by asastra.ovh

// ChainLINK
//▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢
function openLink(n) {
    window.open(n, "_blank");
}
function setLink(n) {
    window.location.replace(n);
}
//▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢


// NICHEGO OSOBENNOGO
//▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢
console.log("Интерсено, да!? 🐔");
document.oncontextmenu = function () {
    return false;
};
document.ondragstart = function () {
    return false;
};
document.onkeydown = function () {
    return false;
};
//▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢


// programmist khrenov
//▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢
let url = "https://youtu.be/dQw4w9WgXcQ";
window.addEventListener("devtoolschange", (e) => {
    window.location = url;
});
//▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢


// zagruzOCHKA
//▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢
var preloader = setInterval(function () {
    if ("complete" === document.readyState) {
        clearInterval(preloader);
        var e = document.getElementsByClassName("loader")[0];
        e.parentNode.removeChild(e);
    }
}, 50);
//▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢


// bassBoost
//▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢
function bassBoost() {
    var e = document.getElementById("video");
    e.volume = 1;
}
//▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢


// volume-button on/off
//▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢
$(document).on("keydown", function (e) {
    27 === e.keyCode && toggleMute();
});
function toggleMute() {
    document.getElementById("video"); 
    $("#volume-button").toggleClass("fas fa-volume-off fa-xs").toggleClass("fas fa-volume-up fa-xs");
    $("video").prop("muted", !$("video").prop("muted"));
}
//▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢


// video-button pause/play
//▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢
$(document).on("keydown", function (e) {
    32 === e.keyCode && togglePlay();
});
function togglePlay() {
    document.getElementById("video");
    $("#pause-button").toggleClass("fas fa-play fa-xs").toggleClass("fas fa-pause fa-xs"), video.paused ? video.play() : video.pause();
}
//▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢


// khuyevyy random a tochneye random za 1 hryvnyu 0 kopeyek
//▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢
$(document).on("keydown", function (e) {
    39 === e.keyCode && refresh();
});
function refresh() {
    var e = Math.floor(Math.random() * videoArray.length);
    (document.getElementsByTagName("source")[0].src = "/libraries/videos/" + videoArray[e]), video.load();
    document.querySelector("#pause-button").className = "control_button fas fa-pause fa-xs";
}
var videoArray = ["2.mp4", "4.mp4", "8.webm", "16.webm", "32.webm", "64.webm", "128.webm", "01.webm"];
//▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢


// NANOTEKHNOLOGII
//▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢
var text = [
    "🔥🔥",
    "🔥 🔥",
    "🔥 # 🔥",
    "🔥 #a 🔥",
    "🔥 #as 🔥",
    "🔥 #asA 🔥",
    "🔥 #asAS 🔥",
    "🔥 #asAST 🔥",
    "🔥 #asASTR 🔥",
    "🔥 #asASTRA 🔥",
    "🔥 #asASTRAg 🔥",
    "🔥 #asASTRAgg 🔥",
    "🔥 #asASTRAgg 🔥",
    "🔥 #asASTRAgg 🔥",
    "🔥 #asASTRAgg 🔥",
    "🔥 #asASTRAgg 🔥",
    "🔥 #asASTRAg 🔥",
    "🔥 #asASTRA 🔥",
    "🔥 #asASTR 🔥",
    "🔥 #asAST 🔥",
    "🔥 #asAS 🔥",
    "🔥 #asA 🔥",
    "🔥 #as 🔥",
    "🔥 #a 🔥",
    "🔥 # 🔥",
    "🔥 🔥",
    "🔥🔥",
];

var counter = 0,
    inst = setInterval(change, 500);
function change() {
    (document.title = text[counter]), ++counter >= text.length && (counter = 0);
}
//▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢▢

// Copyright © 2022 asASTRA. All rights reserved.
// by asastra.ovh