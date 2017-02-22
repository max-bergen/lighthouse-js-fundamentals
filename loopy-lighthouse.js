var min = 100;
var max = 200;

for (var number = min; number <= max; number++) {
  if (number % 3 === 0 && number % 4 === 0)
    console.log("LoopyLighthouse");
  else if (number % 3 === 0)
    console.log("Loopy");
  else if (number % 4 === 0)
    console.log("Lighthouse");
  else console.log(number);
}