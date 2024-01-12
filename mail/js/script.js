// 1. crea una lista di email 
const emails = [
    'tizio_caio@sempronio.it',
    'nonloso@bohboh.com',
    'esempio@dominio.org',
    'ciao@sonoio.it'
]

console.log(emails);

// 2. chiedi all'utente la sua mail
// prendo gli elementi del form
const loginInput = document.getElementById('login-input');
const registerButton = document.getElementById('login-button');

// definisci una variabile che conterrà la mail utente
let loginEmail = '';

// al click del bottone
registerButton.addEventListener('click', function () {

    // metti il valore del form nella variabile
    loginEmail = loginInput.value;

    // svuota il form
    loginInput.value = '';
    //console.log(userEmail);

    // 3. crea la variabile messaggio 'login non permesso'
    let logMessage = 'non sei registrato, login non riuscito';

    // 4. per ogni elemento della lista
    for (let i = 0; i < emails.length; i++) {

        // prendi il valore dell'elemento
        let email = emails[i];

        // se l'elemento è uguale alla mail utente
        if (email === loginEmail) {

            //cambia il contenuto del messaggio
            logMessage = `bentornato ${loginEmail}!`;

        } 

    }

    // prendi l'elemento html in cui vuoi vedere il messaggio
    const loginResponse = document.getElementById('log-message');

    // 5. stampa il messaggio
    //console.log(logMessage);
    loginResponse.innerText = logMessage;  

})


 
