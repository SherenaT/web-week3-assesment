"use strict";
console.log("test");

/*const months = ["January", "February", "March", "April", "May", "June", "July"];

const random = Math.floor(Math.random() * months.length);
console.log(random, months[random]); 

const img = document.querySelector("#img");

function mouseOverImg(event) {
  alert("Hey, you're mousing over my duck!");
}

img.addEventListener("mouseover", mouseOverImg);
 */

const randomRestaurant = [
  "Mangia Mangia",
  "Johns Philly Grille",
  "Da Kitchen",
  "Cheesecake Factory in Bella Terra",
  "Silverlake Ramen in Bella Terra",
  "Costco Pizza at Bella Terra",
];

const pickRest = function () {
  const random = Math.floor(Math.random() * randomRestaurant.length);
  console.log(random, randomRestaurant[random]);

  for (let i = 0; i < 1; i++) {
    alert(`You should eat at ${(random, randomRestaurant[(i, random)])}.`);
  }
};

const restButt = document.querySelector("#restaurantButton");

restButt.addEventListener("click", pickRest);
