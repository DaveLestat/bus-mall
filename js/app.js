'use strict';

//Global Arrays
Product.all = [];
Product.container = document.getElementById('pictureBox');
Product.previouslyViewed = [];
Product.images = [document.getElementById('left'), document.getElementById('center'), document.getElementById('right')];
Product.tally = document.getElementById('tally');
Product.totalClicks = 0;
var chartLabels = [];
var chartVotes = [];

//Constructor
function Product(name, path) {
  this.name = name;
  this.path = path;
  this.votes = 0;
  this.views = 0;
  Product.all.push(this);
}
for(var i = 0; i < Product.all.length; i++) {
  new Product(Product.all[i]);
}
function makeRandom() {
  return Math.floor(Math.random() * Product.all.length);
}

//adding-product  objects
function addNewProduct() {
  new Product('bag', 'img/bag.jpg'),
  new Product('banana', 'img/banana.jpg'),
  new Product('bathroom', 'img/bathroom.jpg'),
  new Product('boots', 'img/boots.jpg'),
  new Product('breakfast', 'img/breakfast.jpg'),
  new Product('bubblegum', 'img/bubblegum.jpg'),
  new Product('chair', 'img/chair.jpg'),
  new Product('cthulu', 'img/cthulhu.jpg'),
  new Product('dog duck', 'img/dog-duck.jpg'),
  new Product('dragon', 'img/dragon.jpg'),
  new Product('pen', 'img/pen.jpg'),
  new Product('pet', 'img/pet-sweep.jpg'),
  new Product('tauntaun', 'img/tauntaun.jpg'),
  new Product('unicorn', 'img/unicorn.jpg'),
  new Product('usb', 'img/usb.gif'),
  new Product('water-can', 'img/water-can.jpg'),
  new Product('winer-glass', 'img/wine-glass.jpg');
}
addNewProduct();

//displaying images
function displayPics() { //make left picture unique
  var currentlyOnDisplay = [];
  currentlyOnDisplay[0] = makeRandom();
  while (Product.previouslyViewed.indexOf(currentlyOnDisplay[0]) !== -1) {
    console.error('Duplicate, or in prior view! Re run!');
    currentlyOnDisplay[0] = makeRandom();
  }

  currentlyOnDisplay[1] = makeRandom(); //make center image unique
  while(currentlyOnDisplay[0] === currentlyOnDisplay[1] || Product.previouslyViewed.indexOf(currentlyOnDisplay[1]) !== -1) {
    console.error('Duplicate at center, or in prior view! Re run!');
    currentlyOnDisplay[1] = makeRandom();
  }

  currentlyOnDisplay[2] = makeRandom(); //make right image unique
  while(currentlyOnDisplay[0] === currentlyOnDisplay[2] || currentlyOnDisplay[1] === currentlyOnDisplay[2] || Product.previouslyViewed.indexOf(currentlyOnDisplay[2]) !== -1) {
    console.error('Duplicate at right! Re run it.');
    currentlyOnDisplay[2] = makeRandom();
  }

  //generate in the HTML
  for(var i = 0; i < 3; i++) {
    Product.images[i].src = Product.all[currentlyOnDisplay[i]].path;
    Product.images[i].id = Product.all[currentlyOnDisplay[i]].name;
    Product.all[currentlyOnDisplay[i]].views += 1;
    Product.previouslyViewed[i] = currentlyOnDisplay[i];
  }
}


//handle click events
function handleClick(event) {
  console.log(Product.totalClicks, 'total clicks');
  if(Product.totalClicks > 24) {
    Product.container.removeEventListener('click', handleClick);
    for(var h = 0; h < Product.all.length; h++){
      chartLabels.push(Product.all[h].name);
      chartVotes.push(Product.all[h].votes);
    }
    //create local storage
    var localProducts =JSON.stringify(Product.all);
    localStorage.setItem("storedData", localProducts);
    showTally();
  }
  if (event.target.id === 'pictureBox') {
    return alert('Nope, you need to click on an image.');
  }
  Product.totalClicks += 1;
  for( var i = 0; i < Product.all.length; i++) {
    if(event.target.id === Product.all[i].name) {
      Product.all[i].votes += 1;
      console.log(event.target.id + ' has ' + Product.all[i].votes + ' votes in ' + Product.all[i].views + ' views.');
    }
  }
  displayPics();
}

//event listener
Product.container.addEventListener('click', handleClick);
displayPics();

//*****Retrieve from LocalStorage ******//




//show tally using the list in the DOM
function showTally() {
  console.log(chartVotes);
  for(var i = 0; i < Product.all.length; i++) { 
    //chart creation
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: chartLabels,
        datasets: [{
          label: '# of Votes',
          data: chartVotes,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',

          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              max : 3.5,
              beginAtZero:true
            }
          }]
        }
      }
    });
  }
}




