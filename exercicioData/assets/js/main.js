(()=>{
const zeroAEsquerda = (num)=>{
    return num>=10 ? num : `0${num}` //função para colocar o zero a esqueda caso precise
}
const diaSemana = (dia) =>{                 //função para distinguir o dia da semana de acordo com o numero gerado pelo getday
    if (dia === 0) return `Domingo`
    if (dia === 1) return `Segunda-Feira`
    if (dia === 2) return `Terça-Feira`
    if (dia === 3) return `Quarta-Feira`
    if (dia === 4) return `Quinta-Feira`
    if (dia === 5) return `Sexta-Feira`
    if (dia === 6) return `Sábado`
    else return `Deu ruim`
}
const mesName = (dia) =>{                 
    if (dia === 0) return `Janeiro`
    if (dia === 1) return `Fevereiro`
    if (dia === 2) return `Março`
    if (dia === 3) return `Abril`
    if (dia === 4) return `Maio`
    if (dia === 5) return `Junho`
    if (dia === 6) return `Julho`
    if (dia === 7) return `Agosto`
    if (dia === 8) return `Setembro`
    if (dia === 9) return `Outubro`
    if (dia === 10) return `Novembro`
    if (dia === 11) return `Dezembro`
    else return `Deu ruim`
}

const formataData = (data)=>{               //função principal que puxas as outras funções para gerar o log que queremos
    const dia = zeroAEsquerda(data.getDate())
    const mes = (data.getMonth())
    const ano = zeroAEsquerda(data.getFullYear())
    const hora = zeroAEsquerda(data.getHours())
    const min = zeroAEsquerda(data.getMinutes())
    const seg = zeroAEsquerda(data.getSeconds())
    const diaDaSemana = data.getDay()

    setTheme(hora)
    return `${diaSemana(diaDaSemana)}, ${dia} de ${mesName(mes)} de ${ano} ${hora}:${min}:${seg}`
}

const result = ()=>{
    const resultado = document.querySelector('.resultado')
    return resultado.innerHTML = `${formataData(data)}`
}
const setTheme = (hora)=>{
    const body = document.querySelector('body')
    if (hora<06) return body.setAttribute('class', 'madrugada')
    if (hora<12) return body.setAttribute('class', 'manha')
    if (hora<16) return body.setAttribute('class', 'tarde')
    if (hora<18) return body.setAttribute('class', 'fim-tarde')
    else return body.setAttribute('class', 'noite')
 }

const data = new Date()
window.addEventListener('load', result()) // evento para toda vez que atualizar a página ira executar a função result


})()