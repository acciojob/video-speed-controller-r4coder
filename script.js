const video = document.querySelector(".viewer");

const playButton = document.querySelector(".player__button.toggle");

const progress = document.querySelector(".progress");

const progressFilled = document.querySelector(".progress__filled");

const volume = document.querySelector(".volume");

const playbackSpeed = document.querySelector(".playbackSpeed");

const skipButtons = document.querySelectorAll("[data-skip]");


// PLAY / PAUSE
playButton.addEventListener("click", function () {

    if (video.paused) {
        video.play();
        playButton.textContent = "❚ ❚";
    } else {
        video.pause();
        playButton.textContent = "►";
    }

});


// UPDATE PROGRESS BAR
video.addEventListener("timeupdate", function () {

    const percentage =
        (video.currentTime / video.duration) * 100;

    progressFilled.style.width = `${percentage}%`;

});


// VOLUME
volume.addEventListener("input", function () {

    video.volume = volume.value;

});


// PLAYBACK SPEED
playbackSpeed.addEventListener("input", function () {

    video.playbackRate = playbackSpeed.value;

});


// REWIND / FORWARD
skipButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const skipTime = Number(button.dataset.skip);

        video.currentTime += skipTime;

    });

});