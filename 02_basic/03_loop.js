// const num = [1,2,3,4,5,6,7,8,9];
// const num1 = [
//     {
//         NameList : "Vijay",
//         Id : 2
//     },
//     {
//         NameList : "Rahul",
//         Id : '2'
//     },
//     {
//         NameList : "Ram",
//         Id: 3
//     },
//     {
//         NameList : "Sham",
//         Id: 2
//     }

// ];

// const numStore = [];

// num.forEach((items) => {
//     if(items > 5){
//         numStore.push(items)
//     }    
// })
// console.log(numStore)

// const numArr = num1.filter( (items) => ((items.Id == 3)) )
// console.log(numArr);

// const numberL = [15,26,30,45,500];

// const numAdd = numberL
//                 .map( (num) => num -  (num * 50/100 ))

// console.log(numAdd)

const num = [1,2,3]

const totalV = num.reduce( (arr, crr) => {
    console.log(`arr : ${arr} and crr : ${crr}`)
   return arr + crr
},0)
 
console.log(totalV)