// JavaScript
const open = document.querySelector('#btn-open');
const close = document.querySelector('#btn-close');
const menu = document.querySelector('#menu');
const items = document.querySelectorAll('.item');
const map = L.map('map').setView([33.66719252628797, 130.44390437674102], 15);

const options = {
  duration: 600,
  easing: 'ease',
  fill: 'forwards',
};

const menuOpen = () => {
  const keyframes = {
    visibility: ['hidden', 'visible'],
    opacity: [0, 1]
  };
  menu.animate(keyframes, options);

  items.forEach((item, index) => {
    item.animate({ opacity: [0, 1] }, {
      duration: 600,
      easing: 'ease',
      fill: 'forwards',
      delay: index * 200,
    });
  });
};

open.addEventListener('click', menuOpen);

const menuClose = () => {
  const keyframes = {
    visibility: ['visible', 'hidden'],
    opacity: [1, 0]
  };
  menu.animate(keyframes, options);

  items.forEach((item) => {
    item.animate({ opacity: [1, 0] }, {
      duration: 600,
      easing: 'ease',
      fill: 'forwards',
    });
  });

  // メニューが閉じた後に地図を表示
  setTimeout(() => {
    // タイルレイヤーを作成し、地図にセットする
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  }, options.duration);
};

close.addEventListener('click', menuClose);
