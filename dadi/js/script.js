// prendi gli elementi del DOM
const userNumOutput = document.getElementById('user-number');
const pcNumOutput = document.getElementById('computer-number');
const rollBtn = document.getElementById('roll-btn');
const resultMessage = document.getElementById('result-message');

// 1. al click di un bottone
rollBtn.addEventListener('click', function() {

    // 2.generare per l'utente un numero da 1 a 6
    const userNum = Math.floor( (Math.random() * 5) + 1 );
    //console.log(userNum);

    // 3. generare numero random da 1 a 6
    const pcNum = Math.floor( (Math.random() * 5) + 1 );

    // 4. creare un messaggio
    let message = `parità!
                    hanno vinto tutti
                    o 
                    non ha vinto nessuno?
                    `

    // 5. se il numero dell'utente è maggiore del numero random
    if ( userNum > pcNum ) {

        // messaggio: ha vinto l'utente
        message = 'Hai vinto!!';
    
        // 7. se il numero dell'utente è minore del numero random
    } else if (userNum < pcNum) {

        // messaggio: ha vinto il computer
        message = 'Hai perso :(';

    }

    // 8. stampare in pagina
    userNumOutput.innerText = userNum;
    pcNumOutput.innerText = pcNum;
    resultMessage.innerText = message;

})