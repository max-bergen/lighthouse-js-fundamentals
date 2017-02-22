var min = 100;
var max = 200;
var fizz = "Jizz";
var buzz = "Bust";

for (var number = min; number <= max; number++) {
  if (number % 3 === 0 && number % 4 === 0)
    console.log(fizz + buzz);
  else if (number % 3 === 0)
    console.log(fizz);
  else if (number % 4 === 0)
    console.log(buzz);
  else console.log(number);
}