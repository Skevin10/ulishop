var localStorage = window.localStorage;

function mostrarEmpresas(){
    document.getElementById('admi').style.display = 'block' ; 
    document.getElementById('producto').style.display = 'none' ;
    document.getElementById('motorista').style.display = 'none' ;
    document.getElementById('ordenes').style.display = 'none' ;
   
}

function mostrarProducto(){
    document.getElementById('admi').style.display = 'none' ; 
    document.getElementById('producto').style.display = 'block' ;
    document.getElementById('motorista').style.display = 'none' ;
    document.getElementById('ordenes').style.display = 'none' ; 
}

function mostrarMotorista(){
    document.getElementById('admi').style.display = 'none' ; 
    document.getElementById('producto').style.display = 'none' ;
    document.getElementById('motorista').style.display = 'block' ;
    document.getElementById('ordenes').style.display = 'none' ;
}

function mostrarOrdenes(){
    document.getElementById('admi').style.display = 'none' ; 
    document.getElementById('producto').style.display = 'none' ;
    document.getElementById('motorista').style.display = 'none' ;
    document.getElementById('ordenes').style.display = 'block' ;
}