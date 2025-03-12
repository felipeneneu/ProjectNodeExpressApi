// const Matematica = require("./Matematica");
// import * as Matematica from "./Matematica_Modern";
import Matematica from "./Matematica_Modern";
import validator from "validator";

let num1: number = 10;
let num2: number = 2;

console.log(`A soma dos numeros é: ${Matematica.somar(num1, num2)}`);
console.log(`A subtração dos numeros é: ${Matematica.subtrair(num1, num2)}`);
console.log(
  `A multiplicaçao dos numeros é: ${Matematica.multiplicar(num1, num2)}`
);
console.log(Matematica.versao);
