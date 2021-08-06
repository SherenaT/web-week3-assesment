console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert(" form has been submitted successfully🎉");
}

let form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);

const img = document.querySelector("#img");

function mouseOverImg(event) {
  alert("Hey, you're mousing over my duck!");
}

img.addEventListener("mouseover", mouseOverImg);
