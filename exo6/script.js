// var age= document.getElementById("age").value;

// function displayAge() {
//   var age = document.getElementById('age').value;
//   if (age >= 18){
//     alert("Vous êtes majeur");
//   }else{
//     alert("Vous êtes mineur");
//   }
// }

function displayAge() {
  var age = document.getElementById('age').value;
  //si age existe
  if (age){
    //et si age > ou = à 18
    if (age >= 18){
      //alors affiche ce message
      alert("Vous êtes majeur");
    }else{
      //sinon afficher ce message
      alert("Vous êtes mineur");
    }
  //et si age n'existe pas afficher ce message
} else{
  alert("Veuillez saisir des champs")
  }
}
