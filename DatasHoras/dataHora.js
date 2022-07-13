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
const formataData = (data)=>{               //função principal que puxas as outras funções para gerar o log que queremos
    const dia = zeroAEsquerda(data.getDate())
    const mes = zeroAEsquerda(data.getMonth() +1)
    const ano = zeroAEsquerda(data.getFullYear())
    const hora = zeroAEsquerda(data.getHours())
    const min = zeroAEsquerda(data.getMinutes())
    const seg = zeroAEsquerda(data.getSeconds())
    const diaDaSemana = data.getDay()

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg} ${diaSemana(diaDaSemana)}`
}

const data = new Date();
console.log(formataData(data));