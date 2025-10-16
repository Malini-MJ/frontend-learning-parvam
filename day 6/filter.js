const numbers =[1,2,3,4,5,6];
const evens = numbers.filter((num)=>num%2===0);
console.log(evens);

const words = ["cat", "king", "orangeadeish","dog"];
const longWords = words.filter((word) => word.length > 6);
console.log(longWords);

const prices = [50,15,20,68,300,257];
const affordable = prices.filter((price) => price < 100);
console.log(affordable);

const users = [
    {name:"alice",age:25},
        {name:"bob",age:30},
    {name:"charlie",age:5},
    {name:"mondes",age:3}

];
const adults = users.filter((people) => people.age>= 18);
console.log(adults);