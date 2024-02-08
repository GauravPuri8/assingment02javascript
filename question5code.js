//A java script program that uses a set to store a collection of unique number
let uniqueNumbers= new Set([3,7,5,7,4,7,5,]);
let numberSquareMap =new Map();
uniqueNumbers.forEach(number=>{
    numberSquareMap.set(number, number*number);
});
console.log("unique Number:");
console.log(Array.from(uniqueNumbers).join(","));
console.log("\n Number -square Map:");
numberSquareMap.forEach((square,number)=>{
    console.log('${number} : ${square}');
})