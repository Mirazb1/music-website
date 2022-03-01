
var mySong = document.getElementById('mySong');
var play = document.getElementById('play');
play.onclick = function () {
    if (mySong.paused) {
        mySong.play();
        play.src = "pause.png"
    }
    else {
        mySong.pause();
        play.src = "play.png"
    }
}