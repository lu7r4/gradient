let css = document.querySelector("p");
let color1 = document.querySelector(".color__1");
let color2 = document.querySelector(".color__2");
let card = document.querySelector(".card");
let gradRotate = document.getElementById("rotate");



function setGradient() {
card.style.background = 
`linear-gradient(${gradRotate.value}deg, ${color1.value}, ${color2.value})`;
css.textContent = card.style.background + ";";
}
gradRotate.addEventListener("input", setGradient)
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);



let codeToCopy = document.createElement('p');
codeToCopy.value = code;
document.body.appendChild(codeToCopy);
codeToCopy.select();
