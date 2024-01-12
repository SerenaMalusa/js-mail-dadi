// prendi gli elementi del DOM
const userNumOutput = document.getElementById('user-number');
const pcNumOutput = document.getElementById('computer-number');
const rollBtn = document.getElementById('roll-btn');
const resultMessage = document.getElementById('result-message');

// 1. al click di un bottone
rollBtn.addEventListener('click', function() {

    // 2.generare per l'utente un numero da 1 a 6 e stamparlo in pagina
    const userNum = Math.floor( (Math.random() * 5) + 1 );
    //console.log(userNum);
    userNumOutput.innerText = userNum;

    // 3. generare numero random da 1 a 6 e stamparlo in pagina
    const pcNum = Math.floor( (Math.random() * 5) + 1 );
    pcNumOutput.innerText = pcNum;
    
})