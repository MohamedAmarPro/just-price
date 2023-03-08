const userName = prompt("What's your name ?");
const rightPrice = Math.floor(Math.random() * 10) + 1;
let userPrice = parseInt(prompt("Donne moi un number entre un et 10"));
while (userPrice != rightPrice) {
  if (userPrice > rightPrice) {
    userPrice = parseInt(prompt("donne moi un number psk c moins "))
  } else {
   userPrice = parseInt(prompt("donne moi un number psk c plus "))
  }
}
console.log("bravo")
