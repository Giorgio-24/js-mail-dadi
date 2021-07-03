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
    result.innerHTML = 'Lei è autorizzato a procedere, bentornato signore.';
    console.log(result);
} else {
    var result = document.getElementById('validation')
    result.innerHTML = 'ATTENZIONE!! Non sei autorizzato a procedere.';
    console.log(result);
}

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