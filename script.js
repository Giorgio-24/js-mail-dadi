/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

/* //= VARIABLES
var message = 'Lei è autorizzato a procedere, benvenuto signore.'

var unauthorisedMessage = 'ATTENZIONE!! Non sei autorizzato a procedere.'

var userMail = prompt('Inserisci qui la tua email: ');
console.log(userMail)

var authorisedUsers = ['nietzschefriedrich@gmail.com', 'sigmundfreud@gmail.com', 'marxkarl@gmail.com', 'immanuelkant@gmail.com', 'arthurschopenhauer@gmail.com'];
console.log(authorisedUsers)

var correspondance = false;

var length = authorisedUsers.length;


//= CICLE
for (var i = 0; 1 < length; i++) {
  if (userMail == authorisedUsers[i]) {
      correspondance = true;
  }
}

if (correspondance) {
    var result = document.getElementById('authorised');
    console.log(result);

    result.innerHTML = message;
} else {
    var result = document.getElementById('unauthorised');
    console.log(result);

    result.innerHTML = unauthorisedMessage;
}  //! VA ALL'INFINITO */


//^GIOCO DEI DADI

//= VARIABLES

var x = 'VAI!';

prompt('Tira il tuo dado.', x)

var userNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber)

var cpuNumber = Math.floor(Math.random() * 6) + 1;
console.log(cpuNumber)

//=CONDITIONS
if (userNumber > cpuNumber){
    alert('CONGRATULAZIONI! Hai vinto.')
} else if (userNumber < cpuNumber){
    alert('OH NO! Hai perso, che sfortuna.')
} else {
    alert('PAREGGIO! Gioca di nuovo la partita.')
}
