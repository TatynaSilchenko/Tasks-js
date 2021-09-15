
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

console.log(calc.calculate("2 + 3"))