
function Multiples(arr, str) {

return arr.map(el=>str.includes(el)).indexOf(false)<0

}
// console.log(Multiples(['code', 'wars'], 'code'))


function Calculator(arr) {

this.methods = {
    '+': (a,b) => a + b,
    '-': (a,b) => a - b, 
    // '*': (a,b) => a * b,
    // "/": (a,b) => a / b,
    // "**": (a,b) => a ** b
} 

this.calculate = function(str){
    let arrCalc = str.split(' ');
    let num1 = +arrCalc[0];
    let num2 = +arrCalc[2];
    let op = arrCalc[1];

    if (!this.methods[op] || isNaN(num1) || isNaN(num2)) {
      return NaN;
    }

    return this.methods[op](num1,num2);
}

this.addMethod = function (name, func) {
    this.methods[name] = func;
}

}

let calc = new Calculator;

// console.log(calc.calculate("2 + 3"))


// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(el => el.name)

// console.log(names)


// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map((el,i) =>{
//     return {fullName: el.name + " " + el.surname, id: i+1}
// })

// console.log(usersMapped[0].id)
// console.log(usersMapped[0].fullName)

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function sortByAge(arr) {
return arr.sort((a,b)=> a.age - b.age)
}

// console.log(sortByAge(arr));

// let arr = [1, 2, 3];


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

// console.log(shuffle(arr))
// console.log(shuffle(arr))
// console.log(shuffle(arr))


function getAverageAge(arr){
    return arr.reduce((sum, cur) => sum +=cur.age,0)/arr.length
}


// console.log(getAverageAge(arr))

let strings = ["кришна", "кришна", "харе", "харе",
"харе", "харе", "кришна", "кришна", ":-O"
];

function unique(arr) {
   return new Set(arr)
}
  
console.log(unique(strings))