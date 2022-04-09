'use strict';

// Global variables
let archHeight;
let runDistance;
let gymPreference;
let cushionPreference;
let shoeArr;
let shoeChoice;
let preference;
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
let resetButton = document.getElementById('reset');



// Constructor Function
function Shoe(company, name, type, filePath) {
  this.company = company;
  this.name = name;
  this.type = type;
  this.filePath = filePath;
}

shoeArr = [
  new Shoe('Creeks', 'Spectre', 'Neutral Cushion', 'img/creeks-spectre.png'),
  new Shoe('Windy', 'Cloud', 'Neutral Cushion', 'img/windy-cloud.png'),
  new Shoe('Joggies', 'Cruise', 'Neutral Cushion', 'img/joggies-cruise.png'),
  new Shoe('Creeks', 'Explosion', 'Neutral Max Cushion', 'img/creeks-explosion.png'),
  new Shoe('Windy', 'Thunderhead', 'Neutral Max Cushion', 'img/windy-thunderhead.png'),
  new Shoe('Joggies', 'Victory', 'Neutral Max Cushion', 'img/joggies-victory.png'),
  new Shoe('Creeks', 'Seattle', 'Stability Cushion', 'img/creeks-seattle.png'),
  new Shoe('Windy', 'PT-201', 'Stability Cushion', 'img/windy-pt201.png'),
  new Shoe('Joggies', 'Support', 'Stability Cushion', 'img/joggies-support.png'),
  new Shoe('Creeks', 'Excitement', 'Stability Max Cushion', 'img/creeks-excitement.png'),
  new Shoe('Windy', 'Canoes', 'Stability Max Cushion', 'img/windy-canoes.png'),
  new Shoe('Joggies', 'Derechos', 'Stability Max Cushion', 'img/joggies-derechos.png')
];
console.log(shoeArr);

// Conditional...Quiz logic
function shoeSuggestion(){
  let suggestedShoe = [];

  // if(localStorage.getItem('archHeight') && localStorage.getItem('runDistance') && localStorage.getItem('gymPreference') && localStorage.getItem('cushionPreference')){
  //   archHeight = localStorage.getItem('archHeight');
  //   runDistance = localStorage.getItem('runDistance');
  //   gymPreference = localStorage.getItem('gymPreference');
  //   cushionPreference = localStorage.getItem('cushionPreference');
  // }

  if(archHeight === true && runDistance === true && gymPreference === true && cushionPreference === true){
    for(let i = 0; i < shoeArr.length; i++){
      preference = 'Neutral Max Cushion';
      localStorage.preference = JSON.stringify(preference);
      if(shoeArr[i].type === preference){
        suggestedShoe.push(shoeArr[i]);
        console.log(suggestedShoe);
      }
    }
    console.log('Neutral Max Cushion');
  }
  else if(archHeight === true && cushionPreference === false){
    for(let i = 0; i < shoeArr.length; i++){
      preference = 'Neutral Cushion';
      localStorage.preference = JSON.stringify(preference);
      if(shoeArr[i].type === preference){
        suggestedShoe.push(shoeArr[i]);
        console.log(suggestedShoe);
      }
    }
    console.log('Neutral Cushion');
  }
  else if(archHeight === true && gymPreference === false && cushionPreference === true){
    for(let i = 0; i < shoeArr.length; i++){
      preference = 'Neutral Max Cushion';
      localStorage.preference = JSON.stringify(preference);
      if(shoeArr[i].type === preference){
        suggestedShoe.push(shoeArr[i]);
        console.log(suggestedShoe);
      }
    }
    console.log('Neutral Max Cushion');
  }
  else if(archHeight === true && runDistance === false && gymPreference === true && cushionPreference === true){
    for(let i = 0; i < shoeArr.length; i++){
      preference = 'Neutral Cushion';
      localStorage.preference = JSON.stringify(preference);
      if(shoeArr[i].type === preference){
        suggestedShoe.push(shoeArr[i]);
        console.log(suggestedShoe);
      }
    }
    console.log('Neutral Cushion');
  }
  else if(archHeight === false && runDistance === true && gymPreference === true && cushionPreference === true){
    for(let i = 0; i < shoeArr.length; i++){
      preference = 'Stability Max Cushion';
      localStorage.preference = JSON.stringify(preference);
      if(shoeArr[i].type === preference){
        suggestedShoe.push(shoeArr[i]);
        console.log(suggestedShoe);
      }
    }
    console.log('Stability Max Cushion');
  }
  else if(archHeight === false && cushionPreference === false){
    for(let i = 0; i < shoeArr.length; i++){
      preference = 'Stability Cushion';
      localStorage.preference = JSON.stringify(preference);
      if(shoeArr[i].type === preference){
        suggestedShoe.push(shoeArr[i]);
        console.log(suggestedShoe);
      }
    }
    console.log('Stability Cushion');
  }
  else if(archHeight === false && gymPreference === false && cushionPreference === true){
    for(let i = 0; i < shoeArr.length; i++){
      preference = 'Stability max Cushion';
      localStorage.preference = JSON.stringify(preference);
      if(shoeArr[i].type === preference){
        suggestedShoe.push(shoeArr[i]);
        console.log(suggestedShoe);
      }
    }
    console.log('stability max Cushion');
  }
  else if(archHeight === false && runDistance === false && gymPreference === true && cushionPreference === true){
    for(let i = 0; i < shoeArr.length; i++){
      preference = 'stability Cushion';
      localStorage.preference = JSON.stringify(preference);
      if(shoeArr[i].type === preference){
        suggestedShoe.push(shoeArr[i]);
        console.log(suggestedShoe);
      }
    }
    console.log('stability Cushion');
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
  let title = document.createElement('h2');
  title.textContent = `${preference}`;
  shoeRender.appendChild(title);
  for (let i = 0; i < shoeChoice.length; i++){
    let shoeImg = document.createElement('img');
    shoeImg.src = `${shoeChoice[i].filePath}`;
    shoeImg.id = shoeChoice[i].filePath;
    shoeRender.appendChild(shoeImg);
    let figCap = document.createElement('figcaption');
    figCap.textContent = `${shoeChoice[i].company} ${shoeChoice[i].name}`;
    shoeRender.appendChild(figCap);
  }
  localStorage.renderInfo = JSON.stringify(shoeChoice);
  return shoeChoice;
}

function savedQuiz(){
  if(localStorage.getItem('renderInfo')){
    shoeChoice = JSON.parse(localStorage.getItem('renderInfo'));
    console.log(shoeChoice);
    preference = JSON.parse(localStorage.getItem('preference'));
    let title = document.createElement('h2');
    title.textContent = `${preference}`;
    shoeRender.appendChild(title);
    for (let i = 0; i < shoeChoice.length; i++){
      let shoeImg = document.createElement('img');
      shoeImg.src = `${shoeChoice[i].filePath}`;
      shoeImg.id = shoeChoice[i].filePath;
      shoeRender.appendChild(shoeImg);
      let figCap = document.createElement('figcaption');
      figCap.textContent = `${shoeChoice[i].company} ${shoeChoice[i].name}`;
      shoeRender.appendChild(figCap);
    }
  }
}
savedQuiz();

// Event Listeners
highArch.addEventListener('click', function (event) {
  event.preventDefault();

  archHeight = true;
  localStorage.setItem('archHeight', archHeight);
  console.log(`archHeight: ${archHeight}`);
});

lowArch.addEventListener('click', function (event) {
  event.preventDefault();

  archHeight = false;
  localStorage.setItem('archHeight', archHeight);
  console.log(`archHeight: ${archHeight}`);
});

moreThanFifteen.addEventListener('click', function (event) {
  event.preventDefault();

  runDistance = true;
  localStorage.setItem('runDistance', runDistance);
  console.log(`runDistance: ${runDistance}`);
});

lessThanFifteen.addEventListener('click', function (event) {
  event.preventDefault();

  runDistance = false;
  localStorage.setItem('runDistance', runDistance);
  console.log(`runDistance: ${runDistance}`);
});

gymShoes.addEventListener('click', function (event) {
  event.preventDefault();

  gymPreference = true;
  localStorage.setItem('gymPreference', gymPreference);
  console.log(`gymPreference: ${gymPreference}`);
});

runShoes.addEventListener('click', function (event) {
  event.preventDefault();

  gymPreference = false;
  localStorage.setItem('gymPreference', gymPreference);
  console.log(`gymPreference: ${gymPreference}`);
});

preferSoft.addEventListener('click', function (event) {
  event.preventDefault();

  cushionPreference = true;
  localStorage.setItem('cushionPreference', cushionPreference);
  console.log(`cushionPreference: ${cushionPreference}`);
});

preferFirm.addEventListener('click', function (event) {
  event.preventDefault();

  cushionPreference = false;
  localStorage.setItem('cushionPreference', cushionPreference);
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
