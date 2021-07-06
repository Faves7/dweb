function validar(){
    var nombre = document.form.nombre.value;
    var correo = document.form.correo.value;
    var comentario = document.form.comentario.value;
    if( nombre.length == 0 || correo.length == 0 || comentario.length == 0 ){
        alert("Debe completar los campos solicitados");
    }else{
        if(validarEmail(correo) == true){
            alert("Debe ingresar un mail válido");
        }else{
            if( nombre.length < 3 ){
                alert("Debe ingresar un nombre válido");
            }else{
                if( comentario.length < 12 ){
                    alert("El comentario debe tener minimo 12 caracteres");
                }else{
                    document.form.submit();
                }
            }
        }
    }
   
}

function validarEmail(valor){
	re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(!re.exec(valor)){
		return true;
	}
	else{
        return false;
    }
}

