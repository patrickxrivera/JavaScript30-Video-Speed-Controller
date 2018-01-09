const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('video');

function handleVideoSpeedControllerScroll(e) {
  let dragY = getYCoord(e);
  let newHeight = getHeightPercentage(dragY);
  bar.style.height = `${newHeight}%`;

  let playbackRate = getPlaybackRate(newHeight);
  bar.textContent = playbackRate.toFixed(1) + 'x';
}

function getYCoord(e) {
  return e.pageY - speed.offsetTop;
}

function getHeightPercentage(dragY) {
  return dragY / speed.offsetHeight * 100;
}

function getPlaybackRate(height) {
  const min = 0.4;
  const max = 4;
  height = height / 100;
  return height * (max - min) + min;
}

speed.addEventListener('mousemove', handleVideoSpeedControllerScroll)
