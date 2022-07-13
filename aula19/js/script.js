function escopo () { //incapsular as variáveis para não conflitar com as variaveis de bibliotecas globais
    const form = document.querySelector('.form') //criei uma variável para receber a classe FORM do formulario
    const resultado = document.querySelector('.resultado') //criei uma variável para receber a div RESULTADO
/*     form.onsubmit=function(evento) {
    evento.preventDefault();
    alert (1);
    console.log('foi enviado.');
    }; */
    const pessoa = [] //criei um array para armazenar as informações do formulário
    function recebe(evento){ //criei uma função para receber os valores digitados no formulario "função callback"
        evento.preventDefault(); // bloquiei a atualização padrão da página depois de clicar em submit
        const nome = form.querySelector('.nome') //criei uma variavel para receber os valores digitados
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')    
        
        pessoa.push({ //adicionando um objeto com os valores para o array, utillizando o método de array PUSH
            nome: nome.value, //difinando qual valor vai para qual variável criada logo acima
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        resultado.innerHTML += `<p> Nome:<strong>${nome.value}</strong> Sobrenome:<strong>${sobrenome.value}</strong> Peso:<strong>${peso.value}</strong> Altura:<strong>${altura.value}</strong> </p>` //utilizando o DOM escrevo no documento cada valor capturado no formulário

        console.log(pessoa); // utilizando um log mostro no console o array pessoa para verificar as entradas de dados
    }
    form.addEventListener('submit', recebe); // criei um evento para cada vez que clicar no botão submit, executar a função recebe
}
escopo();