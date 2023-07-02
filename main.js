const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar ul');
// const navbar = document.querySelector('.navbar ul');
const stockBtn = document.getElementById('stocks');

stockBtn.addEventListener('click', function() {
  // stockBtn.classList.toggle('shift');
  alert('hello');
});

const header = document.querySelector('.navbar')
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>80)
})

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