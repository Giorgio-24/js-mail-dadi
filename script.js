/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

//= VARIABLES
var message = 'Lei è autorizzato a procedere, benvenuto signore.'

var unauthorisedMessage = 'ATTENZIONE!! Non sei autorizzato a procedere.'

var userMail = prompt('Inserisci qui la tua email: ');
console.log(userMail)

var authorisedUsers = ['nietzschefriedrich@gmail.com', 'sigmundfreud@gmail.com', 'marxkarl@gmail.com', 'immanuelkant@gmail.com', 'arthurschopenhauer@gmail.com'];
console.log(authorisedUsers)

var correspondance = false;

var lenght = authorisedUsers.length;


//= CICLE
for (var i = 0; 1 < length; i++) {
  if (userMail == authorisedUsers[i]){
      correspondance = true;
  }
}

if (correspondance = true){
    var result = document.getElementById('typed-email');
    console.log(result)

    result.innerHTML = message;
} else {
    var result = document.getElementById('typed-email');
    console.log(result)

    result.innerHTML = unauthorisedMessage;
}

