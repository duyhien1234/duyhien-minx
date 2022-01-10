// máy tính cơ bản

// phép tinh
const operator = prompt('Enter operator ( either +, -, * or / ): ');

let number1 = parseInt(prompt("nhap so thu 1" ));
let number2 = parseInt(prompt("nhap so thu 2"));
let result;
if (operator === "+"){
    result = number1 + number2;
    alert("ket qua la " + result);
}else if(operator === "-"){
    result = number1 - number2;
    alert("ket qua la " + result);
}else if(operator === "*"){
    result = number1 * number2;
    alert("ket qua la " + result);
}else if(operator === "/")
{
    result = number1 / number2;
    alert("ket qua la " + result);
}




// using if...else if... else or switch

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);