function animateProgress(circle, valueText, endValue, color) {
  let startValue = 0;
  let speed = 30;

  let progress = setInterval(() => {
    startValue++;
    valueText.textContent = startValue + "%";
    circle.style.background =
      `conic-gradient(${color} ${startValue * 3.6}deg, #ededed 0deg)`;

    if (startValue === endValue) {
      clearInterval(progress);
    }
  }, speed);
}

animateProgress(
  document.querySelector(".html-css"),
  document.querySelector(".html-progress"),
  80,
  "#fca61f"
);

animateProgress(
  document.querySelector(".javascript"),
  document.querySelector(".javascript-progress"),
  65,
  "#6f34fe"
);

animateProgress(
  document.querySelector(".c-lang"),
  document.querySelector(".c-progress"),
  70,
  "#20c997"
);

animateProgress(
  document.querySelector(".cpp-lang"),
  document.querySelector(".cpp-progress"),
  70,
  "#0d6efd"
);

animateProgress(
  document.querySelector(".python-lang"),
  document.querySelector(".python-progress"),
  40,
  "#ffc107"
);

animateProgress(
  document.querySelector(".ds-lang"),
  document.querySelector(".ds-progress"),
  65,
  "#dc3545"
);




/* ==========================
   STICKY NAVBAR
========================== */

let navbar = document.getElementById("navbar-top");

window.addEventListener("scroll", () => {
  if (!navbar) return;

  if (window.scrollY > 60) {
    navbar.classList.add("fixed-top");
  } else {
    navbar.classList.remove("fixed-top");
  }
});



/* ==========================
   BACK TO TOP BUTTON
========================== */

let backToTop = document.getElementById("btn-back-to-top");

window.addEventListener("scroll", () => {
  if (!backToTop) return;

  if (window.scrollY > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}



/* ==========================
   PORTFOLIO FILTER
========================== */

let filterButtons = document.querySelectorAll(".filter-item");
let posts = document.querySelectorAll(".post");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    let value = button.getAttribute("data-filter");

    posts.forEach(post => {
      if (value === "all" || post.classList.contains(value)) {
        post.style.display = "block";
      } else {
        post.style.display = "none";
      }
    });
  });
});


