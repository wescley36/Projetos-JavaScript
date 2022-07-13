(()=>{ //função escopo se chamando
    const form = document.querySelector('form') //capturando o formulário

    form.addEventListener('submit', (e)=>{  //Função de apertar no botão submit
        e.preventDefault()                  //tudo que esta aqui dentro vai acontecer depois de apertar o botão submit

    const peso = Number(document.querySelector('#peso').value)        // capturando e convertendo o peso em numero          
    const altura = Number(document.querySelector('#altura').value)    // capturando e convertendo a altura em numero  

         if (!peso) {                              //o if vai parar e executar assim que for verdadeiro
        resultado('Peso inválido', false)        // se peso = numero vai retornar falso dando continuidade, já que tem o '!'
        return;                                 // se peso = outra coisa retorna verdadeiro, fazendo a mensagem de erro
        }                                       // após o ir ser verdadeiro o return para o codigo
        if (!altura) {                          
        resultado('Altura inválida', false)     
        return;
        }

    verificaImc(calculaImc(peso, altura))
    })

    const calculaImc = (peso, altura) =>{
        const imc = peso / altura**2
        return imc.toFixed(2)
    }

    const verificaImc = (imc) =>{
        const grau = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3' ]
        if (imc <18.5) return resultado(`Seu IMC é: ${imc} - ${grau[0]}`, true)
        if (imc <25) return resultado(`Seu IMC é: ${imc} - ${grau[1]}`, true)
        if (imc <30) return resultado(`Seu IMC é: ${imc} - ${grau[2]}`, true)
        if (imc <35) return resultado(`Seu IMC é: ${imc} - ${grau[3]}`, true)
        if (imc <40) return resultado(`Seu IMC é: ${imc} - ${grau[4]}`, true)
        if (imc >=40) return resultado(`Seu IMC é: ${imc} - ${grau[5]}`, true)
    }

    const resultado = (msg, valida) =>{                         // criando a mensagem de resultado
        const result = document.querySelector('#resultado')     //capturando a div para resultado do html
        result.innerHTML = ''                                   // limpando a div a cada vez que for chamada    
        const paragrafo = criaParagrafo()                       // chamando e atribuindo a função para criar paragrafo na constant
        paragrafo.innerHTML = msg                               // inserindo a mensagem do parametro envolvida pela tag p
        result.appendChild(paragrafo)                           // botando a tag dentro da div

        if (valida){
            paragrafo.classList.add('correta')
        } else{
            paragrafo.classList.add('errada')
        }
    }

    const criaParagrafo = () =>{                                
        const p = document.createElement('p')                  // criando uma tag p e atribuindo a constante 'p'
        return p                                               // retornando a constante p para quem chamar a função
    }
    
})()