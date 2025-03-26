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
const site1 = new URL(
  "https://miro.medium.com/v2/resize:fit:720/format:webp/1*DWf2QLlAieYk2u00ac0McQ.jpeg"
);
const site2 = new URL(
  "https://miro.medium.com/v2/resize:fit:720/format:webp/1*3X2lwbxtzaSGdD3aoWs7_g.png"
);
const site3 = new URL(
  "https://miro.medium.com/v2/resize:fit:720/format:webp/1*7zSjVUr4hTwtr5Dt9IS0Ww.png"
);
const site4 = new URL(
  "https://miro.medium.com/v2/resize:fit:720/format:webp/1*y1pVtYLD4qeYhg1j77oRMg.png"
);
const site5 = new URL(
  "https://miro.medium.com/v2/resize:fit:720/format:webp/1*iMunZSY3WvzgOq5DXZspuw.png"
);
let slider = [site1, site2, site3, site4, site5];
let sliderHtml = document.querySelector("#slider1");
let index = 0;
sliderHtml.addEventListener("click", function () {
  index = (index + 1) % slider.length;

  sliderHtml.src = slider[index];
});

/*STORIES */


// Toutes les variables
const stories = document.querySelectorAll('.story');
const storiesModal = document.querySelector('.stories-modal');
const modalStory = document.getElementById('modalstory');
const closeBtn = document.querySelector('.close-btn');


// Ouvrir le modal
stories.forEach(story => {
  story.addEventListener('click', () => {
    modalStory.src = story.src;
    storiesModal.style.display = 'flex';
    closeBtn.style.display = 'block';

    // Vu (retire les contours)
    story.classList.add('viewed');
  });
});

// Fermer le modal
closeBtn.addEventListener('click', () => {
  storiesModal.style.display = 'none';
  closeBtn.style.display = 'none';
});

// Quand tu cliques en dehors du model il se ferme
storiesModal.addEventListener('click', (e) => {
  if (e.target === storiesModal) {
    storiesModal.style.display = 'none';
    closeBtn.style.display = 'none';
  }
});


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
