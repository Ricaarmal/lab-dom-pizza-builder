// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMush)=>{
    if(state.mushrooms){
      oneMush.style.visibility = 'visible';
    }else {
      oneMush.style.visibility = 'hidden';
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((onePepp)=>{
    if(state.greenPeppers){
      onePepp.style.visibility = 'visible';
    } else {
      onePepp.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const withSauce = document.querySelector('.sauce')
  if(!state.whiteSauce) {
    withSauce.classList.remove('sauce-white');
  } else {
    withSauce.classList.add('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const withCrust = document.querySelector('.crust');
  if(!state.glutenFreeCrust){
    withCrust.classList.remove('crust-gluten-free');
  } else {
    withCrust.classList.add('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let pepperoni = document.querySelector('.btn-pepperoni');
  pepperoni.classList.toggle("active", state.pepperoni);

  let mushroom = document.querySelector('.btn-mushrooms');
  mushroom.classList.toggle("active", state.mushrooms);

  let greenPepper = document.querySelector('.btn-green-peppers');
  greenPepper.classList.toggle("active", state.greenPeppers);

  let sauce = document.querySelector('.btn-sauce');
  sauce.classList.toggle("active", state.whiteSauce);

  let crust = document.querySelector('.btn-crust');
  crust.classList.toggle("active", state.glutenFreeCrust);  
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let list = document.querySelector('.panel.price ul')
  let total = basePrice
  list.innerHTML = "";
  let totalPrice = document.querySelector('aside strong')

  for (ingredient in ingredients){
    if (state[ingredient]){
      total += ingredients[ingredient].price
      list.innerHTML += `<li>$${ingredients[ingredient].price} ${ingredients[ingredient].name}</li>`
    }
  }
  totalPrice.innerText =`$${total}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function(){
  state.mushrooms = !state.mushrooms;
  renderEverything();
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function(){
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function(){
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click',function(){
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})