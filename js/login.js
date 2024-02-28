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
const btn = document.querySelector("#btn")

btn.addEventListener('click', (event) => {
event.preventDefault()
const user = document.getElementById('usuario').value
const passaword = document.getElementById('senha').value

const login = data.find((objeto) => objeto.usuario === user && objeto.senha === passaword)

if(login){
    window.location = './pages/pagina-clima.html'
}else{
    alert('Usúario não encontrado')
    }
})

