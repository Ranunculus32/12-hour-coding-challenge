const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const stickyNav = document.querySelector("#navbarTop");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// Sticky navigation
// const initialCoords = sticky.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener("scroll", function (e) {
//   console.log(window.scrollY);

//   if (window.scrollY > initialCoords.top) classList.add("sticky");
//   else classList.remove("sticky");
// });
const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
    
  });
};

const obsOptions = {
  root: null,
  threshold: 0.1 //this is 10%
};
const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(stickyNav);
