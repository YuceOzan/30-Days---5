//1.ACCES OTHER JS FILES
import countries from './countries.js';
import webTechs from './web_techs.js';


console.log('countries :', countries);
console.log('Web Technologies :', webTechs);

//2.STRING TO ARRAY

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = text.split(" ");
console.log(words);
console.log(words.length);

//3.ADD, REMOVE & EDIT ITEMS

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");
shoppingCart.splice(4,1);
shoppingCart[3] = "Green Tea";
console.log(shoppingCart);

//4.COUNTRIES

if(countries.includes("Ethiopia")){
    console.log("The list already includes Ethiopia");
}else{
    countries.push("Ethiopia");
    countries.sort();
    console.log("The list now includes Ethiopia");
}

//5. WEB TECH

if(webTechs.includes("Sass")){
    console.log("Sass is a CSS preprocess");
}else{
    webTechs.push("Sass");
    webTechs.sort();
    console.log(webTechs);
}

//6. CONCATENATE

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);
fullStack.sort();

console.log(fullStack);