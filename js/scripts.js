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

var genres = [
  ["base", "Base"],
  ["ageofsail", "Age of Sail"],
  ["fantasy", "Fantasy"],
  ["scifi", "SciFi"],
  ["steampunk", "Steampunk"],
  ["demonhunters", "Demon Hunters"],
  ["horror", "Horror"]
];

var randCard = function(genre, override) {
  var genreFolder = "",
    genreFilePart = "";
  /*Checks to see if genre was passed, if so, it sets the genreFolder to the first element of a the genre array.
    Otherwise it defaults to base */
  genre ? (genreFolder = genre[0]) : (genreFolder = "base");
  /*Checks to see if genre was passed, if so, it sets the genreFilePart to the second element of a the genre array.
    Otherwise it defaults to Base */
  genre ? (genreFilePart = genre[1]) : (genreFilePart = "Base");
  var roll = override || randIntBetween(1, 120);
  //assembles the filename of the randomly rolled card image
  var card = "GMA " + genreFilePart + " VTT_Part" + roll + ".jpg";
  var divHTML =
    '<img class="card-image" src="cards/' + genreFolder + "/" + card + '">';
  var target = document.getElementById("random-card");
  target.innerHTML = "";
  target.innerHTML = divHTML;
  log("random " + genre + " card generated");
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
  buttons: function() {
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
  },
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
  }
};


var initialSetup = function() {
  setup.navSlide();
  setup.buttons();
  randCard();
};

initialSetup();
