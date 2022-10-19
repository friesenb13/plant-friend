var app = new Framework7({
  // App root element
  el: '#app',
  // ... other parameters
});
var mainView = app.views.create('.view-main')

var waterlevel = 20; //starting level
var nowater = 0;
var drowning = 40;

var neardeath = false; //plant starts healthy

function dryout(){
  waterlevel --; //every time the function runs, the water level decreases by 1
  console.log(waterlevel);
  checkhealth();
  var watertimer = setTimeout(dryout,500);
}
dryout();

var nutrientlevel= 20;
var nonutrient=0;
var full=40;

function nutrients(){
  nutrientlevel --;
  console.log(nutrientlevel)
  checkhealth();
  var watertimer= setTimeout(nutrients,500);
}
nutrients();

function checkhealth(){
  if(waterlevel <= nowater){
    neardeath=true;
    console.log("help!")
    $("#plant path").css("fill", "chocolate")
  }
  if(nutrientlevel <= nonutrient){
    neardeath=true;
    console.log("hungry")
  }
}


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
