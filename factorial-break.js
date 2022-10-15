//Using while and break statement
let factorial = 10;
let result = 1;
let count = 1;

while (true) {
  result = result * count;
  console.log(result);
  count++;
  if (result == 3_628_800) {
    break;
  }
}
