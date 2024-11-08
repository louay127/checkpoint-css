for (let i = 10; i >= 1; i--) {
    console.log(i);
}
for (let i = 0; i <= 4 ; i++) {
    console.log("Hello");
}
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
for (let i = 1; i <= 10; i++) {
    console.log("3 *" + i + "= " + " "+ 3*i );
}


 var res= 0
for(var i=0;i<20;i++){
    if(i%2===0){
res = res+i
    }
    console.log(res)
}
let sum = 0;
for (let i = 1; i <= 10; i++) {sum += i * i;
console.log(sum);  
}
let ff = 0; 
var arr= [9,9,8,7,6]
for (let i = 0; i < arr.length; i++) {
    ff += arr[i];
    console.log(ff);
 
}
var letters = ['m', 'k', 'o', 's'];

let bob =[]
for (let i = letters.length - 1; i >= 0; i--) {
   bob.push(letters[i]);
}
console.log(bob); 

var numbers = [5, -3, 8, -1, 4];
var positiveNumbers = []

for (let i = 0; i < numbers.length; i++) {
if (numbers[i] > 0) {
 positiveNumbers.push(numbers[i])
 }
}

return positiveNumbers