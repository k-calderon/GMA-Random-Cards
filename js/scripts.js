"use strict";

var log = function(param) {
    console.log(param);
};
var randIntBetween = function(min, max) {
    /* return a random number between the min and max. The min 
    and the max do not have to start with 1 */
    if(min > max) {
        return Math.floor(Math.random()*(min-max+1)+max)
    };    
    return Math.floor(Math.random()*(max-min+1)+min);
};

var genres = [
    ["base", "Base"],
    ["ageofsail", "Age of Sail"],
    ["fantasy","Fantasy"],
    ["scifi", "SciFi"],
    ["steampunk", "Steampunk"]
];

var randCard = function (genre, override) {
    var genreFolder = "",
        genreFilePart = "";
    genre ? genreFolder = genre[0] : genreFolder = "base";
    //var genreFolder = genre[0] || "base";
    genre ? genreFilePart = genre[1] : genreFilePart = "Base";
    //var genreFilePart = genre[1] || "Base";
    var roll = override || randIntBetween(1, 120);
    var card = "GMA "+ genreFilePart +" VTT_Part" + roll + ".jpg";
    var divHTML =   '<img src="cards\/' + genreFolder + '\/' + card + '">';
    var target = document.getElementById("random-card")
    target.innerHTML = "";
    target.innerHTML = divHTML;
    log("random card generated");
};

var randCardBttnPressed = function() {
    randCard(genres[0]);
    log("Random Card button pressed");
};

var setup = {
    buttons : function() {
        //var genre = document.getElementById("") **not done yet
        document.getElementById("random-card-button").addEventListener("click", randCardBttnPressed);

    }
};

var initialSetup = function(){
    setup.buttons();
};

initialSetup();