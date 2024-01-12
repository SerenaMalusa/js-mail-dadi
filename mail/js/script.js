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
const loginButton = document.getElementById('login-button');

// definisci una variabile che conterrà la mail utente
let loginEmail = '';

// prendi l'elemento html in cui vuoi vedere il messaggio
const response = document.getElementById('log-message');

// 3. crea la variabile messaggio 'login non permesso'
let logMessage = '';

// al click del bottone
loginButton.addEventListener('click', function () {

    // metti il valore del form nella variabile
    loginEmail = loginInput.value;

    // 3. modifica la variabile messaggio con 'login non permesso'
    logMessage = 'non sei registrato, login non riuscito';

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

    // 5. stampa il messaggio
    response.innerText = logMessage;  

    // svuota il form
    loginInput.value = '';
    //console.log(userEmail);

})

/* BONUS */

//prendi gli elementi html per la registrazione
const registerButton = document.getElementById('register-button');
const registerInput = document.getElementById('register-input');

//al click del bottone per la registrazione
registerButton.addEventListener('click', function() {

    // metti il valore del form nella variabile
    registerEmail = registerInput.value;

    // crea una variabile booleana 
    let registeredUser = false;  

    // per ogni elemento della lista
    for (let i = 0; i < emails.length; i++) {

        // prendi il valore dell'elemento
        let email = emails[i];
        //console.log('email',email,'registerEmail',registerEmail);

        // se l'elemento è uguale alla mail utente
        if (email === registerEmail) {

            // l'utente è registrato
            registeredUser = true;

            // cambia il contenuto del messaggio
            logMessage = `sei già registrato, prova a fare il login!`;

        } 

    }   

    // se l'utente non è registrato
    if (!registeredUser) {

        //metti la mail utente nell'array
        emails.push(registerEmail);

        //cambia il contenuto del messaggio
        logMessage = `  benvenuto ${registerEmail}!
                        ora sei registrato, prova a fare il login.
                    `;

    }
    
    // console.log(emails);

    // stampa il messaggio
    response.innerText = logMessage;  

    // svuota il form
    registerInput.value = '';

})
