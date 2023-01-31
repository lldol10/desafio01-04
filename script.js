let number1 = Number(prompt("Digite o primeiro número"))
let number2 = Number(prompt("Digite o segundoo número"))


if(number1 === number2){
    alert('numeros são iguais')
}else{
    alert("números diferentes")
}


alert('Soma: ' + (number1 + number2))
alert('Sub: ' + (number1 - number2))
alert('mult: ' + (number1 * number2))
alert('Div: ' + (number1 / number2))
alert('Modulo: ' + (number1 % number2))

let soma = (number1 + number2) % 2

if(soma == 0){
    alert('é par')
}else{
    alert('é impar')
}