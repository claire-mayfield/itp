# Documentation

I started by copying the following code from our code-along from class:

`for (let i = 1500; i <= 2700; i++) {
  if (i % 7 === 0 && i % 5 === 0) {
    console.log(i);
    }
  }`
  
 Then, I changed the numbers to match this assignment:
  
  `for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i);
      }
    }` 

This code didn't quite work because it simply printed out all numbers from 1 to 100 that are divisible by both 3 and 5, looking like this: 

15
30
45
60
75
90

Next, I combined a couple of different codes from the code-along to produce this: 

`let i = 150;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  }
}{
  if (i % 5 === 0) {
    console.log("Buzz");
  }
}{
  if (i % 5 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
}`

This produced this result, which was on the right track, but not quite right: 
Fizz
Fizz
Fizz
Fizz
Fizz
Fizz
Fizz
Fizz
Fizz
Fizz
Fizz
Fizz
Fizz
Fizz
Fizz
Fizz
Fizz
Fizz
Fizz
Fizz
Fizz
Fizz
Fizz
Fizz
Fizz
Fizz
Fizz
Fizz
Fizz
Fizz
Fizz
Fizz
Fizz
Buzz
FizzBuzz

  