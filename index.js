// Get all sections that have an ID defined
// const sections = document.querySelectorAll("container");

let sections = [document.getElementById("home"),
document.getElementById("about"),
document.getElementById("portfolio"),
document.getElementById("services"),
document.getElementById("contact")]

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 200;
    const sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector("a.nav-link[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector("a.nav-link[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}
