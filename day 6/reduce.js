const numbers =[1,2,3,4,5];
const sum = numbers.reduce((total,num)=>total+num , 0);
console.log(sum);

const scores =[85,42,90,65,95];
const maxScore = scores.reduce((max,score)=>Math.max(max,score) , scores[0]);
console.log(maxScore);

const words = ["the", "king", "ate","dog"];
const sentence = words.reduce((text,word) => text+" "+word," ");
console.log(sentence.trim());

const cart = [
  { item: "book", price: 25, quantity: 2 },
  { item: "pen", price: 30, quantity: 6 },
  { item: "port", price: 5, quantity: 4 },
  { item: "scale", price: 3, quantity: 3 }
];

const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
console.log(total);
