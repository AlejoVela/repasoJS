let n1 = 1;
var n2 = 2;
let sum = n1 + n2;
let div = n1 / n2;
let res = n1 - n2;
let produc = n1 * n2;

document.getElementById("solucion").innerHTML = 
`<p class="text-danger">Resultado de la suma: ${sum}</p>`;

document.getElementById("solucion").innerHTML += 
`<p class="text-primary">Resultado de la división: ${div}</p>`;

document.getElementById("solucion").innerHTML += 
`<p class="text-warning">Resultado de la resta ${res}</p>`;

document.getElementById("solucion").innerHTML += 
`<p class="text-info">Resultado del producto: ${produc}</p>`;

