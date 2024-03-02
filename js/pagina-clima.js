//seleção  de dados
// const baseURL = "6328fa0a4b8038333b021e60a631d64f"
const baseURL2 = "d6a6d21a29db56a57f9336ce41e5166e"
//  api do carrosel: https://openweathermap.org/forecast5
//serve para pegar o 'dado' que será chamado ou não na API
const valueInput = document.querySelector("#value-input")
const btnPesquisar = document.querySelector("#btn-pesquisar")

//vai servir para mostrar os dados ao usuario
//sempre que vc puxar um valor de  uma api, vc tem que ter um local para mostrar esses dados
const cidade = document.querySelector("#cidade")
const temperatura = document.querySelector("#temperatura span") //span pois é um paragramo e o quea gente vai imprimir vindo da api vai esta dentro o samp
const descricao = document.querySelector("#descricao")
const imgDescricao = document.querySelector("#img-descricao")
const umidade = document.querySelector("#umidade span") //span pois é um paragramo e o quea gente vai imprimir vindo da api vai esta dentro o samp
const vento = document.querySelector("#vento span") //span pois é um paragramo e o quea gente vai imprimir vindo da api vai esta dentro o samp
const resultadoContainer = document.querySelector("#box-resultado")
const temp1 = document.querySelector("#temperatura1")
const img1 = document.querySelector("#img-descricao-day1")
const temp2 = document.querySelector("#temperatura2")
const img2 = document.querySelector("#img-descricao-day2")
const temp3 = document.querySelector("#temperatura3")
const img3 = document.querySelector("#img-descricao-day3")
const temp4 = document.querySelector("#temperatura4")
const img4 = document.querySelector("#img-descricao-day4")
const temp5 = document.querySelector("#temperatura5")
const img5 = document.querySelector("#img-descricao-day5")
const temp6 = document.querySelector("#temperatura6")
const img6 = document.querySelector("#img-descricao-day6")
const temp7 = document.querySelector("#temperatura7")
const img7 = document.querySelector("#img-descricao-day7")




//Função:

//função que vai conferir la na api
const verificaAPI = async(value) => { //value = nome da cidade
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&units=metric&appid=${baseURL2}&lang=pt_br`
    // https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${baseURL}&lang=pt_br
    // https://api.openweathermap.org/data/2.5/forecast?q=${value}&units=metric&appid=${baseURL}&lang=pt_br`;

    //O fetch(url) vai fazer uma solicitação a API, vai la da uma olhada nela
    //O await é para so continuar, ou seja, ir para outra linha quando a chamada da api for concluida
    const resposta = await fetch(url);
    //apos a verificação da api que vai ser armazenada em 'resposta'  vai ser transformada em formato json()
    //O await vai servir para so ir para proxima linha quando toda essa api estiver em formato json 
    const data = await resposta.json()
    //vai mostrar os dados = 'data' com o formato json()
    return data
}


//mostrar o valor pro usuario: 
const mostrarValue = async (value) => {
    const data = await verificaAPI(value)
    cidade.innerHTML = data.city.name
    temperatura.innerHTML = parseInt(data.list[0].main.temp)
    descricao.innerHTML = data.list[0].weather[0].description
    imgDescricao.setAttribute("src",`https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`)
    umidade.innerHTML = `${data.list[0].main.humidity}%`
    vento.innerHTML = `${data.list[0].wind.speed}km/h`
    temp1.innerHTML = parseInt(data.list[1].main.temp)
    temp2.innerHTML = parseInt(data.list[2].main.temp)
    temp3.innerHTML = parseInt(data.list[3].main.temp)
    temp4.innerHTML = parseInt(data.list[4].main.temp)
    temp5.innerHTML = parseInt(data.list[5].main.temp)
    temp6.innerHTML = parseInt(data.list[6].main.temp)
    temp7.innerHTML = parseInt(data.list[7].main.temp)
    img1.setAttribute("src",`https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}.png`)
    img2.setAttribute("src",`https://openweathermap.org/img/wn/${data.list[2].weather[0].icon}.png`)
    img3.setAttribute("src",`https://openweathermap.org/img/wn/${data.list[3].weather[0].icon}.png`)
    img4.setAttribute("src",`https://openweathermap.org/img/wn/${data.list[4].weather[0].icon}.png`)
    img5.setAttribute("src",`https://openweathermap.org/img/wn/${data.list[5].weather[0].icon}.png`)
    img6.setAttribute("src",`https://openweathermap.org/img/wn/${data.list[6].weather[0].icon}.png`)
    img7.setAttribute("src",`https://openweathermap.org/img/wn/${data.list[7].weather[0].icon}.png`)

    resultadoContainer.classList.remove("hide")
}
//tratamento de erro
const verificarbtn = (value) => {
    if(value === ''){
        alert('Preencha o campo com a sua cidade')
    }else{
        mostrarValue(value)
    }
}




//Eventos:

//Ao clicar no botão, vai ser chamada uma função que vai verificar a API pelo nome da cidade
//Como a função no evento tem como parametro o valor do que foi escrito no input, quando é chamada a função, os seus parametros são os mesmo
//deixa as coisas conectadas
btnPesquisar.addEventListener("click", async (e) => {
    e.preventDefault();

    const value = valueInput.value

    verificarbtn(value)
   
})