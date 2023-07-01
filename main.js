const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar ul');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

function checkScreenWidth() {
  if (window.innerWidth <= 800) {
    navbar.classList.remove('show');
    hamburger.style.display = 'block';
  } else {
    hamburger.style.display = 'none';
    navbar.classList.remove('show');
  }
}

let bg = document.getElementById('bg')
window.addEventListener('scroll', function(){
    let value = window.scrollY
     bg.style.marginTop = value * -.5 + 'px' ;
     
})
let trade = document.getElementById('trade')
window.addEventListener('scroll', function(){
    let value = window.scrollY
     trade.style.marginTop = value * -.5 + 'px' ;
})



window.addEventListener('load', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);