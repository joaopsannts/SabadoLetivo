//entrada

let lado1, lado2, lado3

lado1 = parseFloat(prompt("Informe o primeiro lado"))
lado2 = parseFloat(prompt("Informe o segundo lado"))
lado3 = parseFloat(prompt("Informe o terceiro lado"))

//processo

if (lado1 != lado2 && lado2 != lado3 && lado3 != lado1) {

    alert("O triângulo é escaleno")
} else if (lado1 === lado2 && lado2 == lado3 && lado3 === lado1 ) {

    alert("O triãngulo é equilatero")
} else if (lado1 === lado2 && lado2 != lado3 && lado3 != lado1 || lado1 != lado2 && lado2 === lado3 && lado3 != lado1 || lado1 != lado2 && lado2 != lado3 && lado3 === lado1) {
}  
    alert("O triângulo é isósceles")
    