import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

//Select player element
const iframe = document.querySelector('iframe');

//Initiate player control
const player = new Player(iframe);

//Set player timeline to the previously saved, only if storage is not a null
if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}

//Saves current time in seconds to localStorage
const saveVideoTime = throttle(function (data) {
  try {
    //Set video time to the beginning if it has reached the end
    let currentVideoTime = data.percent === 1 ? 0 : data.seconds;
    localStorage.setItem('videoplayer-current-time', currentVideoTime);
  } catch (e) {
    //Show in concole data about error
    console.log(e);
  }
}, 1000);

//Adds event listener to the player timeline changes
player.on('timeupdate', data => {
  saveVideoTime(data);
});
