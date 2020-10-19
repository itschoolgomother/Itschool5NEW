// function meetUp(N, C) {
// 	let meets = (12-C)/N;
//   return Math.floor(meets);

// }
// let num = 5;
// console.log("num");
// console.log('num');

// function getExchange(vidVolut, kursVolut, summa){
// 	let kolovo = kursVolut*summa;
// return `мы вам дадим ${kolovo} ${vidVolut}`;
// }
function litres (time){
	return Math.floor(time*0.5)
}
let a = true
let b = false
function sravnenie(){
 

 if (a == b){
 	return true;
 }else{
 	return false;
 }
}
let cashInWallet = 30;
let amount = 50;
const price = 40;
let enoughWallet = cashInWallet >= price;
let enoughCard = amount >= price ;
let canBuy = enoughWallet || enoughCard
console.log(canBuy);
let isWaterHot = true;
let makeTea = true;
let = canMakeTea = isWaterHot  makeTea