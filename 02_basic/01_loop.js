const num = [1,2,3,4,5,6]
const farute = ['Apple', 'Greaps', 'Banana']
const myName = 'vijay kumar'

// for (let i = 0; i < num.length; i++) {
//     const element = num[i];
//     console.log(element);
    
// }
// for (const vals of num) {    
//     console.log(vals);
// }
// for (const vals of farute) {    
//     console.log(vals);
// }
// for (const vals of myName) {    
//     console.log(vals);
// }

// Map ================

// const map1 = new Map();
// map1.set("FGS", "Fatehgarh Sahib")
// map1.set("Sir", "Sirhind")
// map1.set("Ch", "Chandigarh")
// map1.set("Ch", "Chandigarh")

// // console.log(map1);
// for(const [key, value] of map1){
//     console.log(`${key} Full form of  ${value}`);
// }

// Objests ++++++++++++++++++

const newObject = {
    Name : "Vijay",
    Class : "BA",
    RollNo : 323
}

for(const myob in newObject){ 
    console.log(`${myob} = ${newObject[myob]}`);
}