// fetch('../data.')
// .then(response => {
//     if (!response.ok) {
//         throw new Error('Erro ao carregar o arquivo JSON');
//     }
//     return response.json();
// })
// .then(data => {
//     // Faça algo com os dados JSON
//     verificarJson(data)
// })
// .catch(error => console.error('Erro:', error));

// function verificarJson(data){
//     const btn = document.querySelector("#btn")

//     btn.addEventListener('click', (event) => {
//         event.preventDefault()
//         const user = document.getElementById('usuario').value
//         const passaword = document.getElementById('senha').value

//         const login = data.find((objeto) => objeto.usuario === user && objeto.senha === passaword)

//         if(login){
//             window.location = '../pages/pagina-clima.html'
//         }else{
//             alert('Usúario não encontrado')
//         }
//     })
// }
const data = [
    
    {
      "id": 1,
      "usuario": "arthur",
      "senha": "123456"
    },
    {
      "id": 2,
      "usuario": "vitoria",
      "senha": "654321"
    },
    {
      "id": 3,
      "usuario": "carlos",
      "senha": "123654"
    }
  
]

console.log(data)

const btn = document.querySelector('#btn')
//O event é importante, pois em formularios, o html mostra o que vc quer, mas depois atualiza e some
//O event permite permanecer com essas informaçõs
//Utiliza dessa forma que foi mostrada
btn.addEventListener('click', (event)=>{
event.preventDefault()
const user  = document.getElementById('usuario').value
const passaword = document.getElementById('senha').value

const login = data.find((objeto) => objeto.usuario === user && objeto.senha === passaword)

if(login){
    window.location = `./pages/pagina-clima.html`
}else{
    alert('usuario não encontrado')
}

})         