let x = Number(prompt("♡ଘ(੭ˊᵕˋ)੭* ੈ✩‧˚: Pick a number!", "0"));

console.log(x);

while (isNaN(x)) {
  x = prompt("(｡•́︿•̀｡): Please pick a number!", "0");
}

let operator = prompt("♡ଘ(੭ˊᵕˋ)੭* ੈ✩‧˚: Pick an operator: +, -, *, /");

let y = Number(prompt("♡ଘ(੭ˊᵕˋ)੭* ੈ✩‧˚: Pick a second number!", "0"));

console.log(y);

while (isNaN(y)) {
  y = prompt("(⋟﹏⋞): Please pick another number!", "0");
}

switch (operator) {
  case "+":
    result = x + y;
    console.log(`${x} + ${y} = ${result}`);
    alert(`✧･ﾟ: *✧･ﾟ:* [${x} + ${y} = ${result}]  *:･ﾟ✧*:･ﾟ✧`);
    break;

  case "-":
    result = x - y;
    console.log(`${x} - ${y} = ${result}`);
    alert(`✧･ﾟ: *✧･ﾟ:* [${x} - ${y} = ${result}]  *:･ﾟ✧*:･ﾟ✧`);
    break;

  case "*":
    result = x * y;
    console.log(`${x} * ${y} = ${result}`);
    alert(`✧･ﾟ: *✧･ﾟ:* [${x} * ${y} = ${result}]  *:･ﾟ✧*:･ﾟ✧`);
    break;

  case "/":
    result = x / y;
    console.log(`${x} / ${y} = ${result}`);
    alert(`✧･ﾟ: *✧･ﾟ:* [${x} / ${y} = ${result}]  *:･ﾟ✧*:･ﾟ✧`);
    break;

  default:
    console.log("The user isn't following directions (｡•́︿•̀｡)");
    alert("ʕ •ᴥ•ʔ✿: Please follow the directions!");
}
