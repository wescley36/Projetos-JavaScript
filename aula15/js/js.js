const numero = Number(prompt('Digit um número'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

 texto.innerHTML = 
 `<p>Raiz quadrada: <strong>${numero ** 0.5}</strong></p>
 <p><strong>${numero}</strong> é inteiro: <strong>${Number.isInteger(numero)}</strong></p>
 <p>é NaN: <strong>${Number.isNaN(numero)}</strong></p>
 <p>Arredondado para baixo: <strong>${Math.floor(numero)}</strong></p>
 <p>Arredondado para cima: <strong>${Math.ceil(numero)}</strong></p>
 <p>Com duas casas decimais: <strong>${numero.toFixed(2)}</strong></p>` 