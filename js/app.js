'use strict';

<<<<<<< HEAD

=======
//we need an array of images
//we need a constructor function for products
>>>>>>> 15d32a3900792f2873553709943a45f078c26196
//we need an event listener
//we need an image repository
//we need to randomize the images
//we need a vote counter
//need a view counter
//we need an event handler
//we need to display the list w/DOM manipulation
//make sure they don't repeat
//DOM appending

<<<<<<< HEAD
//Global Arrays
Product.all = [];
Product.container = document.getElementById('pictureBox');
Product.previouslyViewed = [];
Product.images = [document.getElementById('left'), document.getElementById('center'), document.getElementById('right')];
Product.tally = document.getElementById('tally');
Product.totalClicks = 0;

//Constructor
function Product(name, path) {
  this.name = name;
  this.path = path;
=======

Product.names = [];

Product.all = [];
Product.container = document.getElementById('image_container');
Product.justViewed = [];
Product.pics = [document.getElementById('left'), document.getElementById('center'), document.getElementById('right')];
Product.tally = document.getElementById('tally');
Product.totalClicks = 0;

function Product(name, filename){
  this.name = name;
  this.path = 'img/' + filename;
>>>>>>> 15d32a3900792f2873553709943a45f078c26196
  this.votes = 0;
  this.views = 0;
  Product.all.push(this);
}
<<<<<<< HEAD
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
=======


function letsAddNewProduct(){
  new Product('bag', 'bag.jpg'),
  new Product('banana', 'banana.jpg'),
  new Product('boots', 'boots.jpg'),
  new Product('chair', 'chair.jpg'),
  new Product('cthulu', 'cthulhu.jpg'),
  new Product('dragon', 'dragon.jpg'),
  new Product('pen', 'pen.jpg'),
  new Product('scissors', 'scissors.jpg'),
  new Product('shark', 'shark.jpg'),
  new Product('sweep', 'sweep.jpg'),
  new Product('unicorn', 'unicorn.jpg'),
  new Product('usb', 'usb.gif'),
  new Product('water-can', 'water-can.jpg'),
  new Product('winer-glass', 'wine-glass.jpg');
}

letsAddNewProduct();
console.log(Product.all);




//randomizer
for(var i = 0; i < Product.names.length; i++) {
  new Product(Product.names[i]);
}
function makeRandom() {
  return Math.floor(Math.random() * Product.names.length);
}

//display images
function displayPics() {
  var currentlyShowing = [];
  //make left image unique
  currentlyShowing[0] = makeRandom();
  while (Product.justViewed.indexOf(currentlyShowing[0]) !== -1) {
    console.error('Duplicate, or in prior view! Re run!');
    currentlyShowing[0] = makeRandom();
  }
  
  //make center image unique
  currentlyShowing[1] = makeRandom();
  while(currentlyShowing[0] === currentlyShowing[1] || Product.justViewed.indexOf(currentlyShowing[1]) !== -1) {
    console.error('Duplicate at center, or in prior view! Re run!');
    currentlyShowing[1] = makeRandom();
  }
  //make right image unique
  currentlyShowing[2] = makeRandom();
  while(currentlyShowing[0] === currentlyShowing[2] || currentlyShowing[1] === currentlyShowing[2] || Product.justViewed.indexOf(currentlyShowing[2]) !== -1) {
    console.error('Duplicate at right! Re run it.');
    currentlyShowing[2] = makeRandom();
  }

  //take it to the DOM
  for(var i = 0; i < 3; i++) {
    Product.pics[i].src = Product.all[currentlyShowing[i]].path;
    Product.pics[i].id = Product.all[currentlyShowing[i]].name;
    Product.all[currentlyShowing[i]].views += 1;
    Product.justViewed[i] = currentlyShowing[i];
>>>>>>> 15d32a3900792f2873553709943a45f078c26196
  }
}
//handle click events

function handleClick(event) {
  console.log(Product.totalClicks, 'total clicks');
  if(Product.totalClicks > 24) {
    Product.container.removeEventListener('click', handleClick);
    showTally();
  }
<<<<<<< HEAD
  if (event.target.id === 'pictureBox') {
    return alert('Nope, you need to click on an image.');
  }
  Product.totalClicks += 1;
  for( var i = 0; i < Product.all.length; i++) {
=======
  if (event.target.id === 'image_container') {
    return alert('Nope, you need to click on an image.');
  }
  Product.totalClicks += 1;
  for( var i = 0; i < Product.names.length; i++) {
>>>>>>> 15d32a3900792f2873553709943a45f078c26196
    if(event.target.id === Product.all[i].name) {
      Product.all[i].votes += 1;
      console.log(event.target.id + ' has ' + Product.all[i].votes + ' votes in ' + Product.all[i].views + ' views.');
    }
  }
  displayPics();
}
<<<<<<< HEAD
//show tally using the list in the DOM
function showTally() {
  for(var i = 0; i < Product.all.length; i++) {
    var createList = document.createElement('li');
    createList.textContent = Product.all[i].name + ' has ' + Product.all[i].votes + ' votes in ' + Product.all[i].views + ' views.';
    Product.tally.appendChild(createList);
=======



//show tally using the list in the DOM
function showTally() {
  for(var i = 0; i < Product.all.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = Product.all[i].name + ' has ' + Product.all[i].votes + ' votes in ' + Product.all[i].views + ' views.';
    Product.tally.appendChild(liEl);
>>>>>>> 15d32a3900792f2873553709943a45f078c26196
  }
}
//event listener
Product.container.addEventListener('click', handleClick);
displayPics();