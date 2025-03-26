/* NAVBAR */
/* menu burger : click */
const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");

menuHamburger.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-menu");

});
/*HEADER */

/*SLIDER */

/* change d'image quand on slide  */
/*Quand tu passe ta souris sur l'image elle s'agrandi */

const slide = ["slider1.jpg", "slider2.avif", "slider3.jpg", "slider4.avif", "slider5.jpg", "slider6.avif"];
let numero = 0;
function changeSlide(sens) {
    numero = numero + sens;
    if (numero > slide.length - 1)
        numero = 0;
    if (numero < 0)
        numero = slide.length - 1;
    document.getElementById("slider1").src = "assets/img/images/" + slide[numero];
}
/* changes d'images toutes les 4sec (4000)  */
setInterval("changeSlide(1)", 4000);
/*STORIES */

/*POSTS */

let heart1 = document.getElementById("btnh1");
let count = document.getElementsByClassName("post-rating-count");
function Toggle1() {
    if (heart1.style.color === "red") {
        heart1.style.color = "grey";
    } else {
        heart1.style.color = "red";
    }
}
function postRating() {
  if (heart1 === "red") {
    heart1 + 1;
  } else {
    heart1 - 1;
  }
}

document.querySelectorAll(".reactpost1").forEach((post) => {
  const ratings = post.querySelectorAll(".post-rating-count");
  const likeRating = ratings[0];
  const button = post.querySelector(".btnh1");
  const count = post.querySelector(".post-rating-count");

  ratings.forEach((rating) => {
    if (rating.classList.contains("Rating")) {
      const count = rating.querySelector(".post-rating-count");

      count.textContent = Number(count.textContent);
      rating.classList.remove("Rating");
    }
  });
});

/*post 2*/

/*reactions*/

/*like*/
let heart2 = document.getElementById("btnh2");
function Toggle2() {
    if (heart2.style.color === "red") {
        heart2.style.color = "grey";
    } else {
        heart2.style.color = "red";
    }
}

/*post 3*/

/*reactions*/

/*like*/
let heart3 = document.getElementById("btnh3");
function Toggle3() {
    if (heart3.style.color === "red") {
        heart3.style.color = "grey";
    } else {
        heart3.style.color = "red";
    }
}

/*Retweet*/

/*WILDERSMSG */

/*FOOTER */
