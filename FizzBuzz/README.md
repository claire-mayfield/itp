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

Here was my next attempt: 

`let i = 150;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  }
  if (i % 5 === 0) {
    console.log("Buzz");
  }
  if (i % 5 === 0 && i % 3 === 0) {
    console.log("FizzBuzz");
  }
}`

This code produced this result: 
Fizz
Buzz
Fizz
Fizz
Buzz
Fizz
Fizz
Buzz
FizzBuzz
Fizz
Buzz
Fizz
Fizz
Buzz
Fizz
Fizz
Buzz
FizzBuzz
Fizz
Buzz
Fizz
Fizz
Buzz
Fizz
Fizz
Buzz
FizzBuzz
Fizz
Buzz
Fizz
Fizz
Buzz
Fizz
Fizz
Buzz
FizzBuzz
Fizz
Buzz
Fizz
Fizz
Buzz
Fizz
Fizz
Buzz
FizzBuzz
Fizz
Buzz
Fizz
Fizz
Buzz
Fizz
Fizz
Buzz
FizzBuzz
Fizz
Buzz
Fizz
Fizz
Buzz

Next I tried this: 

`let i = 150;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  }
  if (i % 5 === 0) {
    console.log("Buzz");
  }
  if (i % 5 === 0 && i % 3 === 0) {
    console.log("FizzBuzz");
  }
  else {
    console.log(i);
  }
}`

This code produced this, which was closer to the desired result: 

1
2
Fizz
3
4
Buzz
5
Fizz
6
7
8
Fizz
9
Buzz
10
11
Fizz
12
13
14
Fizz
Buzz
FizzBuzz
16
17
Fizz
18
19
Buzz
20
...and so on. 

Next, I did this: 

`let i = 150;
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log("FizzBuzz");
  }
  else if (i % 3 === 0) {
    console.log("Fizz");
  }
  else if (i % 5 === 0) {
    console.log("Buzz");
  }
  else {
    console.log(i);
  }
}`

This produced the correct answer, which is this: 
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
...and so on. 

Then, I realized it wasn't necessary to define i as a number at the beginning, so I simplified the code to this: 

`for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log("FizzBuzz");
  }
  else if (i % 3 === 0) {
    console.log("Fizz");
  }
  else if (i % 5 === 0) {
    console.log("Buzz");
  }
  else {
    console.log(i);
  }
}`

Which produced this (the same thing as the previous attempt):

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz

..and so on. 
  