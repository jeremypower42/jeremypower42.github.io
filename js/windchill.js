function windChill(form) {

var temp = 46;
var wind = 15;

chill=(0.0817*(3.71*(Math.pow(wind, 0.5))+
5.81-0.25*wind)*(temp-91.4)+91.4);
form.windchill.value = chill;
}
