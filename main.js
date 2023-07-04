const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar ul');
// const navbar = document.querySelector('.navbar ul');
const stockBtn = document.getElementById ('get-started');

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

// fetching data for Landing Page stocks apple --------------------------------------------------------------------------------------

const chartElements = document.querySelectorAll('.charts div');

chartElements.forEach(chartElement => {
  const symbol = chartElement.dataset.symbol;
  const url = `https://api.twelvedata.com/time_series?apikey=0318fb14608b4cf0bab167bb00944d1b&interval=1min&symbol=${symbol}&outputsize=2`;

  fetch(url)
    .then(response => response.json())
    .then(data => displayData(chartElement, data))
    .catch(error => console.error(error));
});

function displayData(chartElement, responseData) {
  console.log(responseData);
  const symbol = responseData.meta.symbol;
  const highprice1 = responseData.values[0].high;
  const highprice2 = responseData.values[1].high;
  
  const closePrice = parseFloat((highprice1 - highprice2).toFixed(6));

  let color;
  if (closePrice < 0) {
    color = "red";
    const content = 'buy';

  } else {
    color = "green";
    const content = 'sell';
  }

  const symbolElement = document.createElement("h1");
  symbolElement.innerHTML = `<strong>${symbol}</strong>`;
  const contents = document.createElement("p") 
  // ContentElement.innerHTML = `<strong>${content}</strong>`
  const closePriceElement = document.createElement("p");
  closePriceElement.innerHTML = `<strong>Close Price:</strong> ${closePrice}`;


  symbolElement.style.fontSize = "24px";
  symbolElement.style.fontWeight = "bold";
  symbolElement.style.color = "white";
  closePriceElement.style.fontSize = "18px";
  closePriceElement.style.color = color;
  

  chartElement.appendChild(symbolElement);
  chartElement.appendChild(closePriceElement);
}




