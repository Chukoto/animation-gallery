/* =======================
eye-animation ここから
======================= */

document.querySelector('body').addEventListener('mousemove', eyeball);

function eyeball() {
  let eye = document.querySelectorAll('.eye i');
  eye.forEach(function (eye) {
    let x = eye.getBoundingClientRect().left;
    let y = eye.getBoundingClientRect().top;
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = radian * (180 / Math.PI) * -1 + 270;
    eye.style.transform = 'rotate(' + rot + 'deg)';
  });
}

/* =======================
eye-animation ここまで
======================= */
/* =======================
javascript-checker ここから
======================= */
let squareChan = document.querySelector('.square');

window.addEventListener('resize', checkInnerWidth);
window.addEventListener('resize', checkInnerHeight);
window.addEventListener('mousemove', checkClientX);
window.addEventListener('mousemove', checkClientY);
window.addEventListener('mousemove', checkOffsetX);
window.addEventListener('mousemove', checkOffsetY);
window.addEventListener('mousemove', checkPageX);
window.addEventListener('mousemove', checkPageY);
window.addEventListener('mousemove', checkPageY);
squareChan.addEventListener('click', checkGbcr);

function checkInnerWidth() {
  let result = document.querySelector('.innerWidthResult');
  result.innerHTML = `${window.innerWidth} px`;
}

function checkInnerHeight() {
  let result = document.querySelector('.innerHeightResult');
  result.innerHTML = `${window.innerHeight} px`;
}

function checkClientX(e) {
  let result = document.querySelector('.clientXResult');
  result.innerHTML = `${e.clientX} px`;
}

function checkClientY(e) {
  let result = document.querySelector('.clientYResult');
  result.innerHTML = `${e.clientY} px`;
}

function checkOffsetX(e) {
  let result = document.querySelector('.offsetXResult');
  result.innerHTML = `${e.offsetX} px`;
}

function checkOffsetY(e) {
  let result = document.querySelector('.offsetYResult');
  result.innerHTML = `${e.offsetY} px`;
}

function checkPageX(e) {
  let result = document.querySelector('.pageXResult');
  result.innerHTML = `${e.pageX} px`;
}

function checkPageY(e) {
  let result = document.querySelector('.pageYResult');
  result.innerHTML = `${e.pageY} px`;
}

function checkGbcr() {
  let topResult = document.querySelector('.gbcrTopResult');
  let bottomResult = document.querySelector('.gbcrBottomResult');
  let rightResult = document.querySelector('.gbcrRightResult');
  let leftResult = document.querySelector('.gbcrLeftResult');
  let squareChanRect = squareChan.getBoundingClientRect();

  topResult.innerHTML = `${squareChanRect.top} px`;
  bottomResult.innerHTML = `${squareChanRect.bottom} px`;
  rightResult.innerHTML = `${squareChanRect.right} px`;
  leftResult.innerHTML = `${squareChanRect.left} px`;
}
/* =======================
javascript-checker ここまで
======================= */
