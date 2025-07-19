//recupero gli elementi dell'html che mi servono
const mail = document.getElementById(`containerEmail`)

//creo il collegamento che mi richiama la funzione per generare email


let randomEmail = `https://flynn.boolean.careers/exercises/api/random/mail`

let randomSentence = `https://flynn.boolean.careers/exercises/api/random/sentence`

let data = new Date;
let day = data.getDate();
let mese = data.getMonth() + 1;
let hour = data.getHours();
let minuts = data.getMinutes();


let received = `${day}/${mese} ${hour}:${minuts}`

function generateEmail() {
  for (let i = 0; i < 10; i++) {
    axios.get(randomEmail).then(resp => {
      const email = resp.data.response
      mail.innerHTML += `     <tr>
                <td>${email}</td>
                <td>Otto</td>
                <td class ="text-center">${received}</td>
              </tr>`
    })
  }
}
//Chiamata della funzione 
generateEmail();

