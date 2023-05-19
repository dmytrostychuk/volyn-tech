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
