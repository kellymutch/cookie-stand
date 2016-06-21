'use strict';
//var firstPikeMain ={
var hours = ['6a','7a','8a','9a','10a','11a','12p','1p','2p','3p','4p','5p','6p','7p','8p'];
var firstPike = {
  minCust: 23, //object properties //for mathrandom
  maxCust: 65, //object ptoperties//for mathrandom
};

var avgCust = function() {
  var a = Math.floor(Math.random() * (firstPike.maxCust - firstPike.minCust)) + firstPike.minCust;
  return a;
};
var hourCust = [];//avgCust(); calls funtion
for (var j = 0; j < hours.length; j++){
  //code
  var random = avgCust();//random stores avgCust output values
  hourCust.push(random);//hourCust creates the array from values stored in random
};
//var pListHour = document.getElementById('pListHour')
var hourSales = []; //hourCust * 6.3
for (var j = 0; j < hours.length; j++){
  var costRandom = hourCust[j] * 6.3;//increment thru array
  hourSales.push(costRandom); //would like to get number to 2 decimals. var discount = Math.round(100 - (price / listprice) * 100);
  //var listHour = document.createElement('li');
  //listHour.textContent = firstPike.hourSales[j];
  //pListHour.appendChild(listHour);
};
//totals array
var total = hourSales.reduce(function(a, b) {
  return a + b;
});
//
