// 1. Create a page that displays a balloon (using the balloon emoji, 🎈). When you press
// the up arrow, it should inflate (grow) 10 percent, and when you press the down arrow,
// it should deflate (shrink) 10 percent. You can control the size of text (emoji are
// text) by setting the font-size CSS property (style.fontSize) on its parent element.
// Remember to include a unit in the value—for example, pixels (10px). The key names of
// the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the
// balloon, without scrolling the page.
// When that works, add a feature where, if you blow up the balloon past a certain size,
// it explodes. In this case, exploding means that it is replaced with a 💥 emoji, and
// the event handler is removed (so that you can’t inflate or deflate the explosion).
// Hint: keeping track of the size in percentage might be easier.
// Hint: Make sure you quote the emoji characters. They are strings, after all.
// Hint: document.getElementById("balloon") will get the balloon element on the page.

let balloon = document.getElementById("balloon");
let currentSize = 100;

function balloonHandler(event) {
  if (event.key == "ArrowUp") {
    event.preventDefault();
    currentSize *= 1.1;
    balloon.style.fontSize = currentSize + "%";
  } else if (event.key == "ArrowDown") {
    event.preventDefault();
    currentSize /= 1.1;
    balloon.style.fontSize = currentSize + "%";
  }
  if (currentSize >= 500) {
    event.preventDefault();
    balloon.innerText = "👌 Ha! You just got GOT!!";
    window.removeEventListener("keydown", balloonHandler);
  }
  if (currentSize <= 10) {
    window.removeEventListener("keydown", balloonHandler);
  }
}

window.addEventListener("keydown", balloonHandler);
// 2. The index.html page has a tabbed layout. Make the default state of the layout show
// the first tab, and make it so that when you click the links at the top the correct
// tab's contents are displayed and the others are hidden. Prevent the default action of
// the links and set up an event listener with the logic necessary to make the tabs
// function as expected. There are many ways to accomplish this task, but you will need
// to at minimum add listeners to each link and toggle the display of the tab contents.
// Hint: display: none; hides an element, and display: block; will bring it

let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");
let tab3 = document.getElementById("tab3");

function setUpDefaultState() {
  tab2.style.display = "none";
  tab3.style.display = "none";
}
setUpDefaultState();

let tab1Link = document.getElementById("tab1Link");
let tab2Link = document.getElementById("tab2Link");
let tab3Link = document.getElementById("tab3Link");

tab1Link.addEventListener("click", event => {
  tab1.style.display = "block";
  tab2.style.display = "none";
  tab3.style.display = "none";
  event.preventDefault();
});
tab2Link.addEventListener("click", event => {
  tab2.style.display = "block";
  tab1.style.display = "none";
  tab3.style.display = "none";
  event.preventDefault();
});
tab3Link.addEventListener("click", event => {
  tab3.style.display = "block";
  tab2.style.display = "none";
  tab1.style.display = "none";
  event.preventDefault();
});
