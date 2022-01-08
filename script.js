let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let bYear = document.getElementById("bYear");
let major = document.getElementById("major");
let uni = document.getElementById("uni");
let sub = document.getElementById("sub");
let btn = document.getElementById("btn");
let key = document.getElementById("key")

date = new Date();
currentYear = date.getFullYear();



let year = bYear.valueAsDate
let birthYear = year.getFullYear();

let age = currentYear - birthYear;

function answer(){
    key.innerText = `My name is ${firstName.value} ${lastName.value} and I'm ${age} years old.
    I'm ${major.value} student. I study at ${uni.value} University. I'm interested in ${sub.value}.`
};


