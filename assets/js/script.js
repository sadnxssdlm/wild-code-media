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
let comment = ["La formation en alternance m'a permis d'avoir une première expérience professionnelle dans le développement web, de continuer à approfondir mes connaissances et d'apprendre des nouvelles notions pendant une année supplémentaire.",
    "Même si on était en distanciel, on échangeait énormément, que ce soit avec nos camarades ou le formateur qui était vraiment pédagogue et présent pour nous à n'importe quel moment.",
    "Allez chercher de la confiance auprès des autres apprenants avec vous, pour éviter ce syndrome de l'imposteur par lequel on est tous passés à un moment donné. Et surtout, accrochez-vous ! C'est très intense, mais on apprend plein de choses et on ressort de là avec énormément de connaissances, c'est vraiment génial.",
    "J’ai vécu une expérience intense riche en émotion pendant 5 mois de laquelle je suis devenu quelqu’un de meilleur autant sur le plan personnel que professionnel. C’est pourquoi j’ai décidé de remettre le couvert pendant un an en accordant de nouveau ma confiance à la Wild Code School pour la poursuite de mes études."
];

let texte = document.querySelector(".txt1");
let numero = 0; 
let indexLettre = 0; 

function ecrirePhrase() {
    let contenu = comment[numero]; 
    texte.innerHTML = ""; 
    indexLettre = 0;

    let timer = setInterval(() => {
        if (indexLettre < contenu.length) {
            texte.innerHTML += contenu.charAt(indexLettre);
            indexLettre++;
        } else {
            clearInterval(timer);
            setTimeout(() => {
                numero = (numero + 1) % comment.length; 
                ecrirePhrase(); 
            }, 3000); 
        }
    }, 50);
}

ecrirePhrase();

/*FOOTER */
