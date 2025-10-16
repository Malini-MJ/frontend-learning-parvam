const numbers =[1,2,3,4,5];
const doubled = numbers.map((num)=>num*2);
console.log(doubled);

const fruits = ["apple", "banana", "orange5"];
const upperFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperFruits);

const prices = [10,20,30];
const priceTags = prices.map((price) => "$"+ price);
console.log(priceTags);

const products = [100,50,200];
const withTax = products.map((price) => price*1.08);
console.log(withTax);

const users = [
    {name:"alice",age:25},
        {name:"bob",age:30},
    {name:"charlie",age:35},

];
const names = users.map((user) => user.name);
console.log(names);


const rectangles = [
    {width:10,height:25},
        {width:8,height:30},
    {width:15,height:35},

];
const areas = rectangles.map((rectangle) =>rectangle.height);
console.log(areas);
