// // reassigning
// let a = 10;
// a = 20;
// console.log(a);
// const a = 20;
// a = 10;
// console.log(a);

// // redeclaration
// let b= 2
// // let b = 3;
// console.log(b);
//  const b= 2;
//  const b=3;
//  console.log(b);

// // hoisting
// console.log(c);

// let c = 10;
// console.log(c);
// const c = 10;

function multiply(a,b){
    console.log(a*b);
}
multiply(10,20);

//Arrow funcitons
//()=>{}
const multi=(a,b)=>{console.log(a*b)};
multi(11,22)

const add=(c,d)=>{console.log(c+d)};
add(102,225)

let arr=[10,3,40,50,9];
console.log(arr);

let latestArray=arr.map((value,index)=>{
    return index;
});
console.log(latestArray);

let filteredData=arr.filter((items)=>{
    return items%2==0;
})
console.log(filteredData);