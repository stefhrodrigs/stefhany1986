function subtrairNumeros() {
    const entradaNumeros = document.getElementById("num").value;
    const arrayNumeros = entradaNumeros.split(",").map(Number);
  
    const resultado = arrayNumeros.reduce(function(total, num) {
      return total - num;
    });
  
    document.getElementById("demo").innerHTML = "Resultado: " + resultado;
  }