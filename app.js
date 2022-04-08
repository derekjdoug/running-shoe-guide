'use strict';

// Global variables
let archHeight;
let runDistance;
let gymPreference;
let cushionPreference;
let highArch = document.getElementById('highArch');
let lowArch = document.getElementById('lowArch');
let moreThanFifteen = document.getElementById('moreThanFifteen');
let lessThanFifteen = document.getElementById('lessThanFifteen');
let gymShoes = document.getElementById('gymShoes');
let runShoes = document.getElementById('runShoes');
let preferSoft = document.getElementById('preferSoft');
let preferFirm = document.getElementById('preferFirm');
let results = document.getElementById('submit');
let shoeRender = document.getElementById('shoeImg');
let shoeArr;
let shoeChoice;
let resetButton = document.getElementById('reset');



// Constructor Function
function Shoe(company, name, type, filePath) {
  this.company = company;
  this.name = name;
  this.type = type;
  this.filePath = filePath;

  // shoeArr.push(this);
}

shoeArr = [
  new Shoe('Creeks', 'Spectre', 'neutral cushion', ''),
  new Shoe('Windy', 'Cloud', 'neutral cushion', ''),
  new Shoe('Joggies', 'Cruise', 'neutral cushion', ''),
  new Shoe('Creeks', 'Explosion', 'neutral max cushion', ''),
  new Shoe('Windy', 'Thunderhead', 'neutral max cushion', ''),
  new Shoe('Joggies', 'Victory', 'neutral max cushion', ''),
  new Shoe('Creeks', 'Seattle', 'stability cushion', ''),
  new Shoe('Windy', 'PT-201', 'stability cushion', ''),
  new Shoe('Joggies', 'Support', 'stability cushion', ''),
  new Shoe('Creeks', 'Excitement', 'stability max cushion', ''),
  new Shoe('Windy', 'Canoes', 'stability max cushion', ''),
  new Shoe('Joggies', 'Derechos', 'stability max cushion', '')
];
console.log(shoeArr);

// Conditional...Quiz logic
function shoeSuggestion(){
  let suggestedShoe = [];

  if(archHeight === true && runDistance === true && gymPreference === true && cushionPreference === true){
    for(let i = 0; i < shoeArr.length; i++){
      let preference = 'neutral max cushion';
      if(shoeArr[i].type === preference){
        suggestedShoe.push(shoeArr[i].company, shoeArr[i].name);
        console.log(suggestedShoe);
      }
    }
    console.log('neutral max cushion');
  }
  else if(archHeight === true && cushionPreference === false){
    for(let i = 0; i < shoeArr.length; i++){
      let preference = 'neutral cushion';
      if(shoeArr[i].type === preference){
        suggestedShoe.push(shoeArr[i].company, shoeArr[i].name);
        console.log(suggestedShoe);
      }
    }
    console.log('neutral cushion');
  }
  else if(archHeight === true && gymPreference === false && cushionPreference === true){
    for(let i = 0; i < shoeArr.length; i++){
      let preference = 'neutral max cushion';
      if(shoeArr[i].type === preference){
        suggestedShoe.push(shoeArr[i].company, shoeArr[i].name);
        console.log(suggestedShoe);
      }
    }
    console.log('neutral max cushion');
  }
  else if(archHeight === true && runDistance === false && gymPreference === true && cushionPreference === true){
    for(let i = 0; i < shoeArr.length; i++){
      let preference = 'neutral cushion';
      if(shoeArr[i].type === preference){
        suggestedShoe.push(shoeArr[i].company, shoeArr[i].name);
        console.log(suggestedShoe);
      }
    }
    console.log('neutral cushion');
  }
  else if(archHeight === false && runDistance === true && gymPreference === true && cushionPreference === true){
    for(let i = 0; i < shoeArr.length; i++){
      let preference = 'stability max cushion';
      if(shoeArr[i].type === preference){
        suggestedShoe.push(shoeArr[i].company, shoeArr[i].name);
        console.log(suggestedShoe);
      }
    }
    console.log('stability max cushion');
  }
  else if(archHeight === false && cushionPreference === false){
    for(let i = 0; i < shoeArr.length; i++){
      let preference = 'stability cushion';
      if(shoeArr[i].type === preference){
        suggestedShoe.push(shoeArr[i].company, shoeArr[i].name);
        console.log(suggestedShoe);
      }
    }
    console.log('stability cushion');
  }
  else if(archHeight === false && gymPreference === false && cushionPreference === true){
    for(let i = 0; i < shoeArr.length; i++){
      let preference = 'stability max cushion';
      if(shoeArr[i].type === preference){
        suggestedShoe.push(shoeArr[i].company, shoeArr[i].name);
        console.log(suggestedShoe);
      }
    }
    console.log('stability max cushion');
  }
  else if(archHeight === false && runDistance === false && gymPreference === true && cushionPreference === true){
    for(let i = 0; i < shoeArr.length; i++){
      let preference = 'stability cushion';
      if(shoeArr[i].type === preference){
        suggestedShoe.push(shoeArr[i].company, shoeArr[i].name);
        console.log(suggestedShoe);
      }
    }
    console.log('stability cushion');
  }
  return suggestedShoe;
}

function clearRender (){
  shoeChoice = shoeSuggestion();
  while (shoeRender.firstChild){
    shoeRender.removeChild(shoeRender.firstChild);
  }
}

// Render Function
function render (){
  clearRender();
  shoeChoice = shoeSuggestion();
  console.log(shoeChoice);

  for (let i = 0; i < shoeChoice.length; i++){
    let shoeImg = document.createElement('p');
    shoeImg.textContent = `${shoeChoice[i]}`;
    shoeImg.id = shoeChoice[i];
    shoeRender.appendChild(shoeImg);

  }
  return shoeChoice;
}


// Event Listeners
highArch.addEventListener('click', function (event) {
  event.preventDefault();

  archHeight = true;
  console.log(`archHeight: ${archHeight}`);
});

lowArch.addEventListener('click', function (event) {
  event.preventDefault();

  archHeight = false;
  console.log(`archHeight: ${archHeight}`);
});

moreThanFifteen.addEventListener('click', function (event) {
  event.preventDefault();

  runDistance = true;
  console.log(`runDistance: ${runDistance}`);
});

lessThanFifteen.addEventListener('click', function (event) {
  event.preventDefault();

  runDistance = false;
  console.log(`runDistance: ${runDistance}`);
});

gymShoes.addEventListener('click', function (event) {
  event.preventDefault();

  gymPreference = true;
  console.log(`gymPreference: ${gymPreference}`);
});

runShoes.addEventListener('click', function (event) {
  event.preventDefault();

  gymPreference = false;
  console.log(`gymPreference: ${gymPreference}`);
});

preferSoft.addEventListener('click', function (event) {
  event.preventDefault();

  cushionPreference = true;
  console.log(`cushionPreference: ${cushionPreference}`);
});

preferFirm.addEventListener('click', function (event) {
  event.preventDefault();

  cushionPreference = false;
  console.log(`cushionPreference: ${cushionPreference}`);
});

results.addEventListener('click', function (event){
  event.preventDefault();
  // shoeSuggestion();
  render();


});
// resetButton.addEventListener('click', function (event){
//   event.preventDefault();
//   // shoeSuggestion();
//   clearRender();


// });
