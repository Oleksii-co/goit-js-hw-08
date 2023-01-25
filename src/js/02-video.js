import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
const STORAGE_CURENT_TIME_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(function (data) {
    const time = data.seconds;
    localStorage.setItem(STORAGE_CURENT_TIME_KEY, time);
  }, 1000)
);

// player
//   .setCurrentTime(localStorage.getItem(STORAGE_CURENT_TIME_KEY))
//   .then(() => {})
//   .catch(() => {
//     player.setCurrentTime(0);
//   });

player.setCurrentTime(localStorage.getItem(STORAGE_CURENT_TIME_KEY)).then(function(seconds) {

}).catch(function(error) {
  switch (error.name) {
      case 'RangeError':

      break;

      default:

          break;
  }
});