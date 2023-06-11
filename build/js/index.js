const navBarBtn = document.querySelector('.navbar__button');
const menu = document.querySelector('.menu');

navBarBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--active');
});

opened = false;
window.onload = function () {
  var btn = document.getElementsByTagName('button')[0];
  btn.addEventListener('click', onBtnClick);
};

function onBtnClick(e) {
  this.classList.toggle('opened');
}

// Also can pass in optional settings block
var rellax = new Rellax('.rellax', {
  speed: -2,
  center: false,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false,
});
