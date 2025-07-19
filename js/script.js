//recupero gli elementi dell'html che mi servono
const mail = document.getElementById(`containerEmail`)

//creo il collegamento che mi richiama la funzione per generare email


let randomEmail = `https://flynn.boolean.careers/exercises/api/random/mail`


// function generateEmail() {
for (let i = 0; i < 10; i++) {
  axios.get(randomEmail).then(resp => {
    const email = resp.data.response
    mail.innerHTML += `<div>${email}</div>`
  })
}
// }