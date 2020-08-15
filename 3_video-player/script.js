const video = document.querySelector('.video');
const toggle = document.querySelector('.toggle');
const progressBar = document.querySelector('.progress__filled');

// Playing / Pausing on clicking over the video / On the play / pause icon
function togglePlay() {
    video.paused ? video.play() : video.pause();
}
toggle.addEventListener('click', togglePlay);

// Updating Play / Pause icon based on Video current status
function updateButton() {
    toggle.textContent = video.paused ? 'play_arrow' : 'pause';
}
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

// Updating Progressbar while video playing
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}
video.addEventListener('timeupdate', handleProgress);

// Rewind / Forward 10 seconds
function skip(type) {
    type === 'rewind' ? video.currentTime -= 10 : video.currentTime += 10;
}
