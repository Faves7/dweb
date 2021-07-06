var subtotal = 0;
//var carrito = []; 
var cant = 0;


var monto = document.getElementById("total"); //Muestra monto a pagar
var cantProductos = document.getElementById("cantProductos"); //Muestra cantidad de productos

function agregarProducto(precio){
    cant = cant + 1;
    precio = parseInt(precio);
    subtotal = subtotal + precio;
    cantProductos.innerHTML = cant;
    monto.innerHTML = "Subtotal: <b>$" + subtotal + "</b>";
}

function irAFormulario(){
    if(subtotal == 0){
        alert("Debe seleccionar al menos un producto");
    }else{
        window.location.href = "../confirmaCompra.html";
    }
}

function vaciarLista(){
    subtotal = 0;
    cant = 0;
    cantProductos.innerHTML = "No se han seleccionado productos";
    monto.innerHTML = "Subtotal: <b>$0</b>";
}


