# Documentation 

To write this program, I followed the same steps that we did in our code along in class, where we wrote a program that can calculate the area of a circle based on the radius. 

The first code I did was close to being correct, but not quite: 

const c = ((f-32)*(5/9));

let f = 99;

console.log(c);

In this code, I defined the variables in the wrong order. Because I didn't define f first, it wasn't possible for the computer to define c (since the value of c is dependent on the value of f). 

In my revision, I changed the order of my variable definitions: 

let f = 99;

const c = ((f-32)*(5/9));

console.log(c);

This code was able to run correctly, producing the answer of approximately 37.2.  