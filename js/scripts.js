"use strict";
var loadTime = Date.now();
var d = document;
var w = Window;
var log = function(msg, obj, name) {
  let now = Date.now();
  let timer = now - loadTime;
  name = name || "Generic";
  console.log(timer + "ms> " + name + "> " + msg, obj);  
};

var randIntBetween = function(min, max) {
  /* return a random number between the min and max. The min 
    and the max do not have to start with 1 */
  if (min > max) {
    return Math.floor(Math.random() * (min - max + 1) + max);
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/* slug, file name part, label */
var genres = [
  ["base", "Base", "Base"],
  ["ageofsail", "Age of Sail", "Age of Sail"],
  ["fantasy", "Fantasy", "Fantasy"],
  ["scifi", "SciFi", "Science Fiction"],
  ["steampunk", "Steampunk", "Steampunk"],
  ["demonhunters", "Demon Hunters", "Demon Hunters"],
  ["horror", "Horror", "Horror"]
];
var currentGenre = genres[0];

var randCard = function(genre, override) {
  var genreFolder = "",
    genreFilePart = "",
    card = "",
    divHTML = "",
    target = "";
    if (genre !==null && typeof genre === "number"){
      (genreFolder = genres[genre][0]);
      (genreFilePart = genres[genre][1]);
    } else {
      genreFolder = currentGenre[0];
      genreFilePart = currentGenre[1];
    }
  /*Checks to see if genre was passed, if so, it sets the genreFolder to the first element of a the genre array.
    Otherwise it defaults to base */
  /*Checks to see if genre was passed, if so, it sets the genreFilePart to the second element of a the genre array.
    Otherwise it defaults to Base */
  (genre !== null  && typeof genre === "number") ? (genreFilePart = genres[genre][1]) : (genreFilePart = currentGenre[1]);


  var roll = override || randIntBetween(1, 120);
  //assembles the filename of the randomly rolled card image
  card = "GMA " + genreFilePart + " VTT_Part" + roll + ".jpg";
  divHTML =
    '<img class="card-image" src="cards/' + genreFolder + "/" + card + '">';
  target = document.getElementById("random-card");
  target.innerHTML = "";
  target.innerHTML = divHTML;
  log("random " + currentGenre[2] + " card generated");
};

var changeGenre = function(newGenre){
  var logo = d.getElementById("logo");
  currentGenre = genres[newGenre];
  randCard(newGenre);
  logo.innerHTML =  `<h2>${currentGenre[2]}<h2>`
  log("Genre changed> New genre:", currentGenre[2]);
};
/*var randBaseCardBttnPressed = function(genre) {
    randCard(genres[0]);
    log("Random Base Card button pressed");
  },
  randSailCardBttnPressed = function(genre) {
    randCard(genres[1]);
    log("Random Age of Sail Card button pressed");
  },
  randFantasyCardBttnPressed = function(genre) {
    randCard(genres[2]);
    log("Random Fantasy Card button pressed");
  },
  randSciFiCardBttnPressed = function(genre) {
    randCard(genres[3]);
    log("Random Sci Fi Card button pressed");
  },
  randSteampunkCardBttnPressed = function(genre) {
    randCard(genres[4]);
    log("Random Steampunk Card button pressed");
  },
  randDemonHuntersCardBttnPressed = function(genre) {
    randCard(genres[5]);
    log("Random Demon Hunters button pressed");
  },
  randHorrorCardBttnPressed = function(genre) {
    randCard(genres[6]);
    log("Random Horror button pressed");
  };*/

var setup = {  
  navSlide: () => {
    const burger = d.querySelector(".burger");
    const nav = d.querySelector(".nav-links");
    const navLinks = d.querySelectorAll(".nav-links li");
  
    // Toggle nav
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
  
      // Animate links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });
      
      // Burger animation
      burger.classList.toggle("toggle");
    });  
  },
  buttons: function() {
    var randomButton = d.getElementById("random-card-button");
    randomButton.addEventListener("click", randCard);
    /*genres.forEach((genre)=>{
      let navLinks = d.getElementById("nav-links");
      let newLi = d.createElement("li");
      newLi.setAttribute("id", `nav-link-${genre[0]}`);
      newLi.innerHTML =`<a href="#">${genre[2]}</a>`;
      navLinks.appendChild(newLi);
    });*/
    /*document
      .getElementById("random-base-card-button")
      .addEventListener("click", randBaseCardBttnPressed);
    document
      .getElementById("random-sail-card-button")
      .addEventListener("click", randSailCardBttnPressed);
    document
      .getElementById("random-fantasy-card-button")
      .addEventListener("click", randFantasyCardBttnPressed);
    document
      .getElementById("random-scifi-card-button")
      .addEventListener("click", randSciFiCardBttnPressed);
    document
      .getElementById("random-steampunk-card-button")
      .addEventListener("click", randSteampunkCardBttnPressed);
    document
      .getElementById("random-demonhunters-card-button")
      .addEventListener("click", randDemonHuntersCardBttnPressed);
    document
      .getElementById("random-horror-card-button")
      .addEventListener("click", randHorrorCardBttnPressed);*/
  }
};


var initialSetup = function() {
  setup.navSlide();
  setup.buttons();
  randCard();
};

initialSetup();
