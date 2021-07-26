var localStorage = window.localStorage;

function mostrarSesion(){
    document.getElementById('contenido').style.display = 'none' ;
    document.getElementById('barra').style.display = 'none' ; 
    document.getElementById('contenido-sesion').style.display = 'block' ; 
}

function mostrarNav(){
    document.getElementById('contenido').style.display = 'none' ;
    document.getElementById('contenido-sesion').style.display = 'none' ; 
    document.getElementById('barra').style.display = 'block' ; 
  
}