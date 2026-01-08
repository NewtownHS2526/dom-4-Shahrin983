console.log("script running");

let totalInCent= 0; 


const popcornButton = document.querySelector("#popcorn");
const sodaButton = document.querySelector("#soda");
const candyButton = document.querySelector("#candy");
const nachosButton = document.querySelector("#nachos");
const icecreamButton = document.querySelector("#icecream");
const shoppingCart = document.querySelector("#shopping-cart");
const totalSpan = document.querySelector("#total-span");

console.log( popcornButton, sodaButton, candyButton, nachosButton, icecreamButton, shoppingCart, totalSpan); 



const updateTotal = () => { 
  totalSpan.innerHTML = totalInCent / 100;
}; 

const addPopcorn = () => {
  shoppingCart.innerHTML += `<p>Popcorn</p>`;
  totalInCent += 450; 
  updateTotal();

}; 
popcornButton.addEventListener("click", addPopcorn); 

const addSoda = () => {
  shoppingCart.innerHTML += `<p>Soda</p>`;
  totalInCent += 250; 
  updateTotal();

}; 
sodaButton.addEventListener("click", addSoda); 

const addCandy = () => {
  shoppingCart.innerHTML += `<p>Candy</p>`;
  totalInCent += 175; 
  updateTotal();

}; 
candyButton.addEventListener("click", addCandy); 



const addNachos = () => {
  shoppingCart.innerHTML += `<p>Nachos</p>`;
  totalInCent += 500; 
  updateTotal();

}; 

nachosButton.addEventListener("click", addNachos); 

const addIcecream = () => {
  shoppingCart.innerHTML += `<p>mystery</p>`;
  totalInCent += 325; 
  updateTotal();

}; 

icecreamButton.addEventListener("click", addIcecream); 
