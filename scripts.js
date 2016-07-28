var tripleThreat = add2(multiply3(subtract4(2)));

console.log("The number 2 has been processed.");
console.log("After processing, the new number is: "+tripleThreat);


function add2 (n) {
  return n+2;
}

function multiply3 (n) {
  return n*3;
}

function subtract4 (n) {
  return n-4;
}
