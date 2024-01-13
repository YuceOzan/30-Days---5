//1.EMPTY ARRAY

const weather = [];

//2. ARRAY WITH ELEMENTS

const fruits = ["banana", "apple", "strawberry", "blueberry", "watermelon"];

//3. LENGTH OF ARRAY

console.log(fruits.length);

//4. GET THE FIRST ITEM

console.log(fruits[0]);

//5. DIFFERENT TYPES OF DATA

const mixedDataTypes = ["Peugeot", true, 28, "horse power", 120, false];

console.log(mixedDataTypes.length);

//6. COMPANIES

/*
const itCompanies = ["Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"];
const newCompanies = itCompanies[0].split(", ");
const newCompanies2= newCompanies.toString().replaceAll(",", ", ");

console.log(newCompanies.length);

console.log(newCompanies[0], ",",newCompanies[3], ",", newCompanies[6]);

console.log(newCompanies2.toUpperCase())

const sentenceCompanies = newCompanies.join(", ").replace(/,([^,]*)$/, ' and$1') + " are big IT companies.";
console.log(sentenceCompanies);

let index = newCompanies.indexOf("Google");
    console.log(index)

if(index !== -1){
    console.log(`The company ${newCompanies[index]} exist`)
}else{
    console.log("The company does not exist")
}


if ((newCompanies2.match(/o/gi) || []).length > 1) {
  console.log(`The string "${newCompanies2}" has more than one "o"`);
} else {
  console.log("The string does not have more than one 'o'");
}

console.log(itCompanies.sort())
console.log(newCompanies.reverse())
console.log(newCompanies.slice(0,3))
console.log(newCompanies.slice(4,7))
console.log(newCompanies.slice(3,4))
//newCompanies.splice(0,3)
//newCompanies.splice(4,3)
//newCompanies.splice(3,1)
//newCompanies.splice(0,7)
console.log(newCompanies)

*/