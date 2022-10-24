var app = new Framework7({
  // App root element
  el: '#app',
  // ... other parameters
});
var mainView = app.views.create('.view-main')


//water level thresholds
var waterlevel = 20; //starting level
var nowater = 0;
var drowning = 40;
//nutrient levels

var nutrientlevel= 30;
var nonutrient=0;
var full=40;

//trim
// var neardeath =false;
var trimmed=false;

var neardeath = false; //plant starts healthy

function dryout(){
  waterlevel --; //every time the function runs, the water level decreases by 1
  console.log(waterlevel);
  checkhealth();
  var watertimer = setTimeout(dryout,500);
}
dryout();



function nutrients(){
  nutrientlevel --; //over time it will go down
  console.log(nutrientlevel)
  checkhealth();
  var foodtimer= setTimeout(nutrients,500);
}
nutrients();

function checkhealth(){
  if(waterlevel <= nowater || waterlevel >=drowning || nutrientlevel <= nonutrient){
    neardeath=true;
    console.log("help!")
    $("#plant path").css("fill", "chocolate")
  } 

  if (neardeath && waterlevel > nowater && nutrientlevel > nonutrient){
    $("#plant path").css("fill", "#568B62")
    neardeath=false;
    setTimeout(function(){
      $("#trim").fadeIn();
      trimmed=false;
    }, 5000)
  }
  
}

//event listeners

$("#water-me").on("click", function() { //anonymous callback function

  waterlevel +=20;
  $("#water").fadeIn().delay(3000).fadeOut();
  

})
$("#feed-me").on("click", function() { //anonymous callback function

  nutrientlevel +=20;
  $("#food").fadeIn().delay(3000).fadeOut();
  

})

//trim
$("#trim-me").on("click", function(){
  trimmed=true;
  $("#scissors").fadeIn().delay(2000).fadeOut();
  $("#trim").fadeOut();
})


// by default:
// - plant starts healthy
// - dry out over time
// - deplete in nutrients over time

// interactions:
// - water it, replenish the plant
// - feed it, nutrients for the plant
// - trim it

//care:
// - too much water, plant near death
// - too much fertilizer, plant near death
// - if plant falls into near death state, you can only heal it by trimming
