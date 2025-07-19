//recupero gli elementi dell'html che mi servono
const mail = document.getElementById(`containerEmail`)

//creo il collegamento che mi richiama la funzione per generare email


let randomEmail = `https://flynn.boolean.careers/exercises/api/random/mail`


//generare frase random

let randomSentence = `https://flynn.boolean.careers/exercises/api/random/sentence`


// STABILIRE ORA E DATA
let data = new Date;
let day = data.getDate();
let mese = data.getMonth() + 1;
let hour = data.getHours();
let minuts = data.getMinutes();

let received = `${day}/${mese} ${hour}:${minuts}`

function generateEmail() {
  for (let i = 0; i < 10; i++) {
    axios.get(randomEmail).then(resp => {
      const email = resp.data.response;
      mail.innerHTML += `     <tr>
                <td>${email}</td>
                <td>${content[i]}</td>
                <td class ="text-center">${received}</td>
              </tr>`
    })
  }
}
//Chiamata della funzione per generare email
generateEmail();

// funzione per creare frasi random

const content = [];

function generateSentence() {
  for (let i = 0; i < 10; i++) {
    axios.get(randomSentence).then(resp => {
      const sentence = resp.data.response
      content.push(sentence)
      console.log(sentence)
    })
  }
}

generateSentence()
//recupero il bottone 
const button = document.getElementById(`reload`)

//genero la funzione che al click, svuota le email gia presenti e  me ne restituisce altre 10 

button.addEventListener(`click`, (e) => {
  e.preventDefault();
  mail.innerHTML = ``;
  generateEmail()
})