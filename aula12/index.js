let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

/*
let aux = varA;
varA= varB;
varB=varC                                   //METODO SIMPLES (primitivo)
varC=aux;

console.log(varA, varB, varC); */

[varA, varB, varC] = [varB, varC, varA]   //  METODO COM ARRAY (Referencial)
console.log(varA, varB, varC);
