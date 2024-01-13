//1.AGES
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();
console.log(ages)
console.log(ages.length)

console.log(`The median is ${(ages[4] + ages[5]) / 2} years old`)

console.log(`The average in this array is ${(ages[0] + ages[1] + ages[2] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7] + ages[8] + ages[9])/10}`)


const maxAge = Math.max(...ages);
const minAge = Math.min(...ages);

const ageRange = maxAge - minAge;

console.log(`The range of ages is ${ageRange}`);


const average = ages.reduce((acc, age) => acc + age, 0) / ages.length;

const diffMin = Math.abs(minAge - average);
const diffMax = Math.abs(maxAge - average);
console.log(diffMax)
console.log(diffMin)

//2.COUNTRIES

import countries from './countries.js';

console.log(countries)

console.log(countries.length)

console.log(countries.slice(0,10))

const middleIndex = Math.floor(countries.length / 2);
  
if (countries.length % 2 === 1) {
  const middleCountry = countries[middleIndex];
  console.log(`The middle country is: ${middleCountry}`);
} else {
  const middleCountry1 = countries[middleIndex - 1];
  const middleCountry2 = countries[middleIndex];
  console.log(`The middle countries are: ${middleCountry1} and ${middleCountry2}`);
}

if(countries.length % 2 == 1){
    countries.push("Pokeland")
}
const newIndex = Math.floor(countries.length/2)
const firstHalf = countries.slice(0,newIndex)
const secondHalf = countries.slice(newIndex)

console.log('First Half:', firstHalf);
console.log('Second Half:', secondHalf);