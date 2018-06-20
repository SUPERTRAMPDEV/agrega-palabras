let palabras = new Array();

function agregar()
{

let palabra = document.getElementById("inputpalabras").value;
palabras.push(palabra);



  var campo = document.getElementById('campo');

//primer click
if(palabras[1] == null){
  campo.innerHTML = palabra;
}else{
  // + de 1 click
  var frase = "";

  for(var i = 0; i < palabras.length;i++){
    if(i < palabras.length-1){
    frase += palabras[i] + ", ";
  }else{
    frase += palabras[i];
  }

  }

  campo.innerHTML = frase;



}


  document.appendChild(campo);



}
