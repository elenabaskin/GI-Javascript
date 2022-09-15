let x = parseFloat(prompt("♡ଘ(੭ˊᵕˋ)੭* ੈ✩‧˚: Pick a number!", "0"));
console.log(x);

let operator = prompt("♡ଘ(੭ˊᵕˋ)੭* ੈ✩‧˚: Pick an operator: +, -, *, /");

let y = parseFloat(prompt("♡ଘ(੭ˊᵕˋ)੭* ੈ✩‧˚: Pick a second number!", "0"));
console.log(y);

switch (operator) {
  case "+":
    result = x + y;
    console.log(`${x} + ${y} = ${result}`);
    alert(`ଘ(੭ˊᵕˋ)੭: [${x} + ${y} = ${result}]  ♡* ੈ✩‧`);
    break;

  case "-":
    result = x - y;
    console.log(`${x} - ${y} = ${result}`);
    alert(`ଘ(੭ˊᵕˋ)੭: [${x} - ${y} = ${result}]  ♡* ੈ✩‧`);
    break;

  case "*":
    result = x * y;
    console.log(`${x} * ${y} = ${result}`);
    alert(`ଘ(੭ˊᵕˋ)੭: [${x} * ${y} = ${result}]  ♡* ੈ✩‧`);
    break;

  case "/":
    result = x / y;
    console.log(`${x} / ${y} = ${result}`);
    alert(`ଘ(੭ˊᵕˋ)੭: [${x} / ${y} = ${result}]  ♡* ੈ✩‧`);
    break;

  default:
    console.log("The user isn't following directions (｡•́︿•̀｡)");
    alert("Please follow the directions ✿ ʕ •ᴥ•ʔ");
}
