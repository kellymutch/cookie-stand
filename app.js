'use strict';
var hours = ['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm','8:00 pm'];
function Store (locationName,identifier,minCustPerHour,maxCustPerHour,avgCookiesPerCust){
  this.locationName = locationName;
  this.identifier = identifier;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.custEachHourArray = [];
  this.cookiesEachHourArray = [];
  this.totalDailyCookieSales = 0;
};
Store.prototype.calcCustEachHour = function() {
  for(var i = 0; i < hours.length; i++) {
    console.log('maxCustPerHour', this.maxCustPerHour);
    console.log('minCustPerHour', this.minCustPerHour);

    var custForEachHour = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    console.log('custfor Each Hour', custForEachHour);
    this.custEachHourArray.push(custForEachHour);
  }
};

Store.prototype.calcCookiesEachHour = function() {
  this.calcCustEachHour();
  for(var i = 0; i < hours.length; i++) {
    var cookiesForEachHour = Math.floor(this.custEachHourArray[i] * this.avgCookiesPerCust);
    this.cookiesEachHourArray.push(cookiesForEachHour);
    this.totalDailyCookieSales += cookiesForEachHour;
  }
};

Store.prototype.render = function() {
  this.calcCookiesEachHour();
  for(var i = 0; i < hours.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = this.cookiesEachHourArray[i];
    var pikeList = document.getElementById('pike');
    pikeList.appendChild(listItem);
  }
  var totalListItem = document.createElement('li');
  totalListItem.textContent = 'Total for the day: ' + this.totalDailyCookieSales;
  pikeList.appendChild(totalListItem);
};
var fAndP = new Store('First And Pike','firstpikeId',23,65,0);
fAndP.render();
