var btn = document.querySelector("#btn");

btn.addEventListener("click", function() {

    var div = document.querySelector("#container");
    
  if(div.style.display === "none") {
        div.style.display = "block";
    } else {
      div.style.display = "none";
  }
    
});



var btnParticipantes = document.querySelector("#btnParticipantes");

btnParticipantes.addEventListener("click", function() {

    var div = document.querySelector("#containerParticipantes");
    
  if(div.style.display === "none") {
        div.style.display = "block";
    } else {
      div.style.display = "none";
  }
    
});



var btnHistotico = document.querySelector("#btnHistotico");

btnHistotico.addEventListener("click", function() {

    var div = document.querySelector("#containerHistorico");
    
  if(div.style.display === "none") {
        div.style.display = "block";
    } else {
      div.style.display = "none";
  }
    
});