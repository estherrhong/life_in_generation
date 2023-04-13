const tracks = document.querySelectorAll('#tracks .track');
const playButton = document.getElementById('play-button');
const context = new AudioContext();
const gainNodes = [];
const playbackRateNodes = [];

tracks.forEach((track, index) => {
  const audio = track.querySelector('audio');
  const volumeSlider = track.querySelector('.volume-slider');
  const tempoSlider = track.querySelector('.tempo-slider');
  const source = context.createMediaElementSource(audio);
  const gainNode = context.createGain();
  const playbackRateNode = context.createPlaybackRate();
  source.connect(gainNode);
  gainNode.connect(playbackRateNode);
  playbackRateNode.connect(context.destination);
  gainNodes.push(gainNode);
  playbackRateNodes.push(playbackRateNode);
  audio.volume = volumeSlider.value;
  audio.playbackRate = tempoSlider.value;
  volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;