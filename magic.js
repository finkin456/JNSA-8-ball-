const answers = ['Yes', 'No', 'maybe', 'ask again', 'in the near future'];

let message = document.getElementById('message');

function foo(){
  document.getElementById("message").innerHTML = answers[Math.floor(Math.random() * 5)];
}
