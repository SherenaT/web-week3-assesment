console.log("testing");

/*

const img = document.querySelector("#img");

function mouseOverImg(event) {
  alert("Hey, you're mousing over my duck!");
}

img.addEventListener("mouseover", mouseOverImg);
 */
const favColor = document.querySelector("#color");
const favPlace = document.querySelector("#place");
const favRitual = document.querySelector("#ritual");

function colorEvent(event) {
  alert("My favorite color is pink💕");
}

favColor.addEventListener("click", colorEvent);

function placeEvent(event) {
  alert("My favorite place is the beach 🏖");
}

favPlace.addEventListener("click", placeEvent);

function ritual(event) {
  alert(
    "My favorite ritual is on sunday morning I go to my moms and spend time with my nephews"
  );
}

favRitual.addEventListener("click", ritual);
