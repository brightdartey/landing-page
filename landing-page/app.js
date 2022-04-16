
const navbar = document.querySelector(".header");
const fixedNav = document.querySelector(".fixed-nav-container");
const backToTopBtn = document.querySelector(".arrow-btn");
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector("#links-container");
const navLinks = document.querySelector(".nav-links");   
const requestBtn = document.querySelector(".request-btn");
const modalOverlay = document.querySelector(".form-overlay"); 
const closeBtn = document.querySelector(".close-btn");

requestBtn.addEventListener("click", function() {
    modalOverlay.classList.add("open-form");
});

closeBtn.addEventListener("click", function() {
    modalOverlay.classList.remove("open-form");
});

// const fixedNavWidth = fixedNav.getBoundingClientRect().width;
// console.log(fixedNavWidth);

backToTopBtn.addEventListener("click", function() {
    window.scrollTo(0, 0);
})

window.addEventListener("scroll", function() { 
   const scrollHeight = window.pageYOffset;
   if(scrollHeight > 200) {
        fixedNav.style.display = "block";
   } else {
       fixedNav.style.display = "none";
   }

// Toggle Back to top Button
   if(scrollHeight > 500) {
       backToTopBtn.classList.add("show-btn");
   } else {
       backToTopBtn.classList.remove("show-btn");
   }
});

// smooth scroll on link click
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        if(id === "features") {
            window.scrollTo(0, 2434)
        }
        if(id === "reviews") {
            window.scrollTo(0, 5612)
        }
        if(id === "pricing") {
            window.scrollTo(0, 4572)
        }
        if(id === "contact") {
            window.scrollTo(0, 6921)
        } 
    });
});


