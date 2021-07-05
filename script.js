//^EMAIL LIST

//= VARIABLES
var list = ['nietzschefriedrich@gmail.com', 'sigmundfreud@gmail.com', 'marxkarl@gmail.com', 'immanuelkant@gmail.com', 'arthurschopenhauer@gmail.com'];

var userMail = prompt('Inserisci la tua email: ');

var bool = false;

var len = list.length;

//=CICLE
for (var i = 0; i < len; i++) {
  if (userMail == list[i]) {
      bool = true;
  }
}

if (bool) {
    var result = document.getElementById('validation')
    result.style.backgroundColor = "#00ff00"
    result.innerHTML = 'Lei è autorizzato a procedere, bentornato signore.';
    console.log(result);
} else {
    var result = document.getElementById('validation')
    result.style.backgroundColor = "#ff0000"
    result.innerHTML = 'ATTENZIONE!! Non sei autorizzato a procedere.';
    console.log(result);
}

//^GIOCO DEI DADI

//= VARIABLES
var winningMessage = 'CONGRATULAZIONI! Hai vinto.'

var losingMessage = 'OH NO! Hai perso, che sfortuna.'

var yourNumberIs = 'Dal tuo dado è uscito il numero: '

var enemyNumberIs = 'Dal dado del tuo avversario è uscito il numero: '

//=CICLE
for (var y = 0; y < 1; y++){

  var x = 'VAI!';

  prompt('Tira il tuo dado.', x)

  var userNumber = Math.floor(Math.random() * 6) + 1;
  console.log(userNumber)
        
  var cpuNumber = Math.floor(Math.random() * 6) + 1;
  console.log(cpuNumber)

  var yourResult = document.getElementById('usernumber')
  yourResult.innerText = yourNumberIs + userNumber;
  console.log(yourResult)

  var enemyResult = document.getElementById('cpunumber')
     enemyResult.innerText = enemyNumberIs + cpuNumber;
     console.log(enemyResult)

 if (userNumber > cpuNumber){
     yourResult;
     enemyResult;
     var finalDiceResult = document.getElementById('result')
     finalDiceResult.innerText = winningMessage;
     finalDiceResult.style.backgroundColor = "#00ff00"
     console.log(finalDiceResult.innerText)
 } else if (userNumber < cpuNumber){
     yourResult;
     enemyResult;
     var finalDiceResult = document.getElementById('result')
     finalDiceResult.innerText = losingMessage;
     finalDiceResult.style.backgroundColor = "#ff0000"
     console.log(finalDiceResult.innerText)
 } else {
     var y = --y;
     alert('PAREGGIO! Gioca di nuovo la partita.')
 } 

}