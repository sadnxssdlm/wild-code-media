/* NAVBAR */
/* menu burger : click 
/*HEADER */

/*SLIDER */
/* change d'image quand on slide  */
/*Quand tu passe ta souris sur l'image elle s'agrandi */
const site1 = (src =
  "https://miro.medium.com/v2/resize:fit:720/format:webp/1*DWf2QLlAieYk2u00ac0McQ.jpeg");
const site2 = new URL(
  "https://miro.medium.com/v2/resize:fit:720/format:webp/1*3X2lwbxtzaSGdD3aoWs7_g.png"
);
const site3 = new URL(
  "https://miro.medium.com/v2/resize:fit:720/format:webp/1*7zSjVUr4hTwtr5Dt9IS0Ww.png"
);
const site4 = new URL(
  "https://miro.medium.com/v2/resize:fit:720/format:webp/1*y1pVtYLD4qeYhg1j77oRMg.png"
);
const site5 = new URL();
const slider = [site1, site2, site3, site4, site5];
const sliderHtml = document.querySelector("#slider1");
sliderHtml.addEventListener("click", function () {
  for (let i = 0; i < slider.length; i++) {
    sliderHtml.src = [i];
  }
  alert("click !");
});

/*STORIES */

/*POSTS */

let buttonLike = document.getElementById("btnh1");
function Toggle1() {
  if (heart1.style.color === "red") {
    heart1.style.color = "grey";
  } else {
    heart1.style.color = "red";
  }
}

/*WILDERSMSG */

/*FOOTER */
