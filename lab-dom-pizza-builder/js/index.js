// Write your Pizza Builder JavaScript in this file.

// Constants 
const basePrice = 10;
const ingredients = {
  pepperonni: {
    name: 'Pepperonni',
    price: 1
  },
  mushrooms: {
    name: 'Mushrooms',
    price: 1
  },
  greenPeppers: {
    name: 'Green Peppers',
    price: 1
  },
  whiteSauce: {
    name: 'White sauce',
    price: 3
  },
  glutenFreeCrust: {
    name: 'Gluten-free crust',
    price: 5
  }
}

// Initial value of the state (the state values can change over time)
const state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}


// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

function renderPepperonni() {
  console.log(document.querySelectorAll('.pep'));
  document.querySelectorAll('.pep').forEach(function (pep) {
    if (state.pepperonni) {
      pep.style.visibility = 'visible';
    } else {
      pep.style.visibility = 'hidden';
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class='mushroom'>`
  document.querySelectorAll('.mushroom').forEach(function (mush) {
    if (state.mushrooms) {
      mush.style.visibility = 'visible';
    } else {
      mush.style.visibility = 'hidden';
    }
  })
}

function renderGreenPeppers(event) {
  // Iteration 1: set the visibility of `<section class='green-pepper'>`
  document.querySelectorAll('.green-pepper').forEach(function (gp) {
    if (state.greenPeppers) {
      gp.style.visibility = 'visible';
    } else {
      gp.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class 'sauce-white' of `<section class='sauce'>`
  document.querySelectorAll('.sauce').forEach(function (sauce) {
    if (state.whiteSauce) {
      sauce.classList.add('sauce-white');
    } else {
      sauce.classList.remove('sauce-white');
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class 'crust-gluten-free' of `<section class='crust'>`
  document.querySelectorAll('.crust').forEach(function (crust) {
    if (state.glutenFreeCrust) {
      crust.classList.add('crust-gluten-free');
    } else {
      crust.classList.remove('crust-gluten-free');
    }
  })
}

const lookup = {
  pepperonni: '.btn-pepperoni',
  mushrooms: '.btn-mushrooms',
  greenPeppers: '.btn-green-peppers',
  whiteSauce: '.btn-sauce',
  glutenFreeCrust: '.btn-crust'
}

function renderButtons() {
  for (let ingredient in state) {
    const button = document.querySelector(lookup[ingredient]);
    if (state[ingredient] === true) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  }
  // if (state.pepperonni === true) {
  //   document.querySelector('.btn-pepperoni').classList.add('active')
  // } else {
  //   document.querySelector('.btn-pepperoni').classList.remove('active')
  // }
  // if (state.mushrooms === true) {
  //   document.querySelector('.btn-mushrooms').classList.add('active')
  // } else {
  //   document.querySelector('.btn-mushrooms').classList.remove('active')
  // }
  // if (state.greenPeppers === true) {
  //   document.querySelector('.btn-green-peppers').classList.add('active')
  // } else {
  //   document.querySelector('.btn-green-peppers').classList.remove('active')
  // }
  // if (state.whiteSauce === true) {
  //   document.querySelector('.btn-sauce').classList.add('active')
  // } else {
  //   document.querySelector('.btn-sauce').classList.remove('active')
  // }
  // if (state.glutenFreeCrust === true) {
  //   document.querySelector('.btn-crust').classList.add('active')
  // } else {
  //   document.querySelector('.btn-crust').classList.remove('active')
  // }
}

function renderPrice() {
  let list = '';
  let price = basePrice;
  for (let ingredient in state) {
    console.log(ingredients[ingredient])
    if (state[ingredient]) {
      // console.log(ingredients[ingredient].name)
      list += `<li>$ ${ingredients[ingredient].price} ${ingredients[ingredient].name}</li>`
      // console.log(list);
      price += ingredients[ingredient].price
    }
  }
  document.querySelector('.panel.price ul').innerHTML = list;
  document.querySelector('.panel.price strong').innerText = `$${price}`;
}

renderEverything()

// Iteration 1: Example of a click event listener on `<button class='btn btn-pepperonni'>`
document.querySelector('.btn.btn-pepperoni').onclick = function () {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class='btn btn-mushrooms'>`

document.querySelector('.btn.btn-mushrooms').onclick = function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
}

// Iteration 1: Add click event listener on `<button class='btn btn-green-peppers'>`

document.querySelector('.btn.btn-green-peppers').onclick = function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class='btn btn-sauce'>`

document.querySelector('.btn.btn-sauce').onclick = function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class='btn btn-crust'>`

document.querySelector('.btn.btn-crust').onclick = function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
}