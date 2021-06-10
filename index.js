let num = 1001.1;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.

console.log(num.toString().length);


//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
console.log(
  num.toString().indexOf(".")===-1 ?
   `number of digits = Length = ${num.toString().length}` : `Length ${num.toString().length}  Number of digits = ${num.toString().length +1}`
  );



//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.