//entrada
let valor, nota10, nota50, nota100

 valor = parseFloat(prompt("Digite o vaor do saque"))

//processo
 if(  valor % 1 !== 0) {

    alert("inválido")

  } else {

       notas50 = Math.floor(valor / 50)

       notas10 = Math.floor(valor / 10)

       notas100 = Math.floor(valor /100)

  }

//saída

document.write("Notas de 50: " + nota50 + "notas de 10: " + notas10 + "notas de 100: " + notas100 
)

 