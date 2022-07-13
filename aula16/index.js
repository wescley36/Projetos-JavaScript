//               0       1        2
const alunos = ['luiz', 'maria', 'joão'];

//onsole.log(alunos[0]);
//console.log(alunos[1]);
//console.log(alunos[2]);

const removido = alunos.shift(); //remove no começo
const removido2 = alunos.pop(); //remove no final


alunos.unshift('fabio') // adiciona no inicio
alunos.push('luiza'); // adiciona no fim

console.log(removido +' '+ removido2);
console.log(alunos);
