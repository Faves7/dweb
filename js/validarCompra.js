function validarCompra(){
    var nombre = document.form.nombre.value;
    var nroDocumento = document.form.dni.value;
    var direccion = document.form.dir.value;
    var formaPago = document.form.formaPago.value;

    if ( nombre.length == 0 || nroDocumento.length == 0 || direccion.length == 0){
        alert("Debe completar los campos solictados, por favor");
    }else{
        var mensaje = "Nombre y Apellido: " + nombre + "\r\n";
        mensaje += "Número de Documento: " + nroDocumento + "\r\n";
        mensaje += "Dirección: " + direccion + "\r\n";
        if( formaPago == "1" ){
            mensaje += "Forma de pago: Efectivo";
        }else{
            mensaje += "Forma de pago: Mercado Pago";
        }
        window.print(mensaje);
    }
}

//Falta agregar a la variable mensaje el campo seleccionado del medio de pago
//Falta: En caso de que se seleccione la opción "Punto de encuentro", deshabilitar la casilla "Domicilio". 