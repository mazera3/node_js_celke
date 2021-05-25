// Aula 02 - Node js
console.log("Gerenciador Financeiro");
var client = "Cesar Szpak";

console.log("Cliente: " + client);

var valProduct = 100;
var valDescout = 37;
var discountFunc = require("./modules/calDiscount");

var finalValue = discountFunc(valProduct,valDescout);

console.log("Valor final do produto: R$ " + finalValue)