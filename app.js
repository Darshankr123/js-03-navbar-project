// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const btn = document.querySelector(".nav-toggle");
console.log(btn);

const headings = document.querySelector(".links");

console.log(headings);

btn.addEventListener("click", () => {
  headings.classList.toggle("show-links");
});
