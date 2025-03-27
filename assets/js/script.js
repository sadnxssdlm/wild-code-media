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

const slide = [
    "slider1.jpg",
    "slider2.avif",
    "slider3.jpg",
    "slider4.avif",
    "slider5.jpg",
    "slider6.avif",
];
let index = 0;
function changeSlide(sens) {
    index = index + sens;
    if (index > slide.length - 1) index = 0;
    if (index < 0) index = slide.length - 1;
    document.getElementById("slider1").src = "assets/img/images/" + slide[index];
}
/* changes d'images toutes les 4sec (4000)  */
setInterval("changeSlide(1)", 4000);
/*STORIES */

// Toutes les variables
const stories = document.querySelectorAll(".story");
const storiesModal = document.querySelector(".stories-modal");
const modalStory = document.getElementById("modalstory");
const closeBtn = document.querySelector(".close-btn");

// Ouvrir le modal
stories.forEach((story) => {
    story.addEventListener("click", () => {
        modalStory.src = story.src;
        storiesModal.style.display = "flex";
        closeBtn.style.display = "block";

        // Vu (retire les contours)
        story.classList.add("viewed");
    });
});

// Fermer le modal
closeBtn.addEventListener("click", () => {
    storiesModal.style.display = "none";
    closeBtn.style.display = "none";
});

// Quand tu cliques en dehors du model il se ferme
storiesModal.addEventListener("click", (e) => {
    if (e.target === storiesModal) {
        storiesModal.style.display = "none";
        closeBtn.style.display = "none";
    }
});

/*POSTS */

let heart1 = document.getElementById("btnh1");
function Toggle1() {
    if (heart1.style.color === "red") {
        // heart1.style.color = "grey";
    } else {
        heart1.style.color = "red";
    }
}

let like = document.getElementById("like");
let count = 0;

function countClicks1() {
    if ((count1 = count + 1)) {
        count = count + 1;
    }
    console.log((like.innerHTML = count));
}

if (heart1.style.color === "red") {
    heart1.style.color = "grey";
} else {
    heart1.style.color = "red";
}

/*publish*/
/*créer un evenement pour pouvoir poster a la suite d'un post 
des messages */

/*retweet*/
/* pouvoir le retweeter à la suite*/

/*echange de commentaire*/

let data = {
    com1: "Quel découverte!!",
    com2: "Impressionnant ?",
    com3: "loremrefq",
    com4: "live life long",
    com5: "decouvrir",
    com6: " Go Web Developper",
};
localStorage.setItem("userData", JSON.stringify(data));

const userData = JSON.parse(localStorage.getItem("userData"));
document.getElementById("com1").innerHTML = userData.com1;
document.getElementById("com2").innerHTML = userData.com2;
document.getElementById("com3").innerHTML = userData.com3;
document.getElementById("com4").innerHTML = userData.com4;
document.getElementById("com5").innerHTML = userData.com5;
document.getElementById("com6").innerHTML = userData.com6;

const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const selectEl = favDialog.querySelector("input");
const confirmBtn = favDialog.querySelector("#confirmBtn");

showButton.addEventListener("click", () => {
    favDialog.showModal();
});

selectEl.addEventListener("change", (e) => {
    confirmBtn.value = selectEl.value;
});

favDialog.addEventListener("close", (e) => {
    outputBox.value =
        favDialog.returnValue === "default"
            ? "Pas de valeur retournée."
            : `${favDialog.returnValue}.`;
});

confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    favDialog.close(selectEl.value);
});

/*post 2*/

/*Pouvoir publier à la suite d'un post des commentaires*/

/*max commentaire = 3*/

/*reactions*/

/*like*/
let heart2 = document.getElementById("btnh2");
function Toggle2() {
    if (heart2.style.color === "red") {
        // heart2.style.color = "grey";
    } else {
        heart2.style.color = "red";
    }
}
function countClick2() {
    if ((count2 = count + 1)) {
        count = count + 1;
    }
    console.log((heartCount.innerHTML = count));
}
/*post 3*/

/*reactions*/

/*like*/
let heart3 = document.getElementById("btnh3");
function Toggle3() {
    if (heart3.style.color === "red") {
        // heart3.style.color = "grey";
    } else {
        heart3.style.color = "red";
    }
}

function countClick3() {
    if ((count3 = count + 1)) {
        count = count + 1;
    }
    console.log((Countheart.innerHTML = count));
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

