function validarCompra(){
    var nombre = document.form.nombre.value;
    var nroDocumento = document.form.dni.value;
    var direccion = document.form.dir.value;
    var formaPago = document.form.formaPago.value;

    if( nombre.length == 0 || nroDocumento.length == 0 ){
        alert("Debe completar los campos solictados, por favor");
    }else{
        var mensaje = "Nombre y Apellido: " + nombre + "\r\n";
        mensaje += "Número de Documento: " + nroDocumento + "\r\n";
        if(formaPago == "1"){
            mensaje += "FOrma de Pago: Efectivo" + "\r\n";
            mensaje += "Dirección: " + direccion;
        }else{
            mensaje += "Forma de Pago: Mercado Pago" + "\r\n";
        }
        window.print(mensaje);
    }
}