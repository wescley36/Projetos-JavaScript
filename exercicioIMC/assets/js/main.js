function escopo(){
    const resultado = document.querySelector('#resultado')
    const peso = document.querySelector('#peso')
    const altura = document.querySelector('#altura')
    const paragrafos = document.querySelectorAll('p')

    const form = document.querySelector('form')

    function envia(e){
        e.preventDefault();

        const imc = peso.value/(altura.value*altura.value);
        console.log(imc.toFixed(2));
        if (peso.value ===''){
            resultado.innerHTML = `Por favor Informe o peso`
        }
        else if (!Number(peso.value)){
            resultado.innerHTML = `Digite apenas números separados por ponto`
        }
        else if (altura.value ===''){
            resultado.innerHTML = `Por favor Informe a Altura`
        }
        else if (!Number(altura.value)){
            resultado.innerHTML = `Digite apenas números separados por ponto`
        }
        else if(imc < 18.5){
           resultado.innerHTML = `<p class="res">${imc.toFixed(2)}</p>` 
           paragrafos[0].setAttribute('class', 'correta')
           paragrafos[6].setAttribute('class', 'correta')
           setTimeout(()=>{
            paragrafos[0].removeAttribute('class', 'correta')
            paragrafos[6].removeAttribute('class', 'correta')
           },3000)
        } else if (imc >=18.5 && imc <= 24.9){
            resultado.innerHTML = `<p class="res"> ${imc.toFixed(2)}</p>`
            paragrafos[1].setAttribute('class', 'correta')
            paragrafos[7].setAttribute('class', 'correta')
            setTimeout(()=>{
                paragrafos[1].removeAttribute('class', 'correta')
                paragrafos[7].removeAttribute('class', 'correta')
               },3000)
        } else if (imc >=25 && imc <= 29.9){
            resultado.innerHTML = `<p class="res"> ${imc.toFixed(2)}</p>`
            paragrafos[2].setAttribute('class', 'correta')
            paragrafos[8].setAttribute('class', 'correta')
            setTimeout(()=>{
                paragrafos[2].removeAttribute('class', 'correta')
                paragrafos[8].removeAttribute('class', 'correta')
               },3000)
        } else if (imc >=30 && imc <= 34.9){
            resultado.innerHTML = `<p class="res"> ${imc.toFixed(2)}</p>`
            paragrafos[3].setAttribute('class', 'correta')
            paragrafos[9].setAttribute('class', 'correta')
            setTimeout(()=>{
                paragrafos[3].removeAttribute('class', 'correta')
                paragrafos[9].removeAttribute('class', 'correta')
               },3000)
        }else if (imc >=35 && imc <= 39.9){
            resultado.innerHTML = `<p class="res"> ${imc.toFixed(2)}</p>`
            paragrafos[4].setAttribute('class', 'correta')
            paragrafos[10].setAttribute('class', 'correta')
            setTimeout(()=>{
                paragrafos[4].removeAttribute('class', 'correta')
                paragrafos[10].removeAttribute('class', 'correta')
               },3000)
        }else if (imc >40){
            resultado.innerHTML = `<p class="res"> ${imc.toFixed(2)}</p>`
            paragrafos[5].setAttribute('class', 'correta')
            paragrafos[11].setAttribute('class', 'correta')
            setTimeout(()=>{
                paragrafos[5].removeAttribute('class', 'correta')
                paragrafos[11].removeAttribute('class', 'correta')
               },5000)
        }
    }
    form.addEventListener('submit', envia)
    
}
escopo();