import storage from './storage';
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = throttle(data => storage.save('videoplayer-current-time', data.seconds)
, 1000);

player.on('timeupdate', onPlay);

player.setCurrentTime(storage.load('videoplayer-current-time'));