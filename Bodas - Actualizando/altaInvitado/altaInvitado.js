//# sourceURL=altaArticulo.js;
$("#btnAltaInvitado").click(btnAltaInvitado);

function btnAltaInvitado()
{
   
    let sMensaje="";
	
	
	var sNif = frmAltaInvitado.txtNIF.value.trim();
	var sNombre = frmAltaInvitado.txtNombre.value.trim();
	var sApellidos = frmAltaInvitado.txtApellidos.value.trim();
	var sDireccion = frmAltaInvitado.txtDireccion.value.trim();
	var iNumPersonas = frmAltaInvitado.txtNumPersonas.value.trim();
	
    limpiarErrores();
   
    	// Validar DNI
	if(!/^\d{8}[a-zA-Z]$/.test(sNif)){
        sMensaje+="El campo DNI esta mal\n";
    }
    else{
        sMensaje+="";
    }
	
	// Validar nombre
	var oExpReg = /^[a-zA-Z\s]{5,30}$/;

	
		if (oExpReg.test(sNombre) == false) {
			sMensaje+="El nombre esta mal, debe ser entre 5 y 30 caracteres. \n";
		}
		
		else{
			sMensaje+="";
		}
	
	// Validar apellido
	
	var oExpReg = /^[a-zA-Z\s]{5,30}$/;

	
		if (oExpReg.test(sApellidos) == false) {
			sMensaje+="El apellido esta mal, debe ser entre 5 y 30 caracteres. \n";
		}
		
		else{
			sMensaje+="";
		}	
	
	// Validar direccion 
	
	var oExpReg = /^[a-zA-Z0-9\s]{20,200}$/;

	
		if (oExpReg.test(sDireccion) == false) {
			sMensaje+="La dirección esta mal, debe ser entre 20 y 200 caracteres. \n";
		}
		
		else{
			sMensaje+="";
		}	
		
	// Validar número de personas

	var oExpReg = /^([1-99])*$/;

	
		if (oExpReg.test(iNumPersonas) == false) {
			sMensaje+="Esta mal el número de personas, debe ser entre 1 y 99. \n";
		}
		
		else{
			sMensaje+="";
		}

   
   	if(sMensaje=="")
	{
		mensaje(oBodas.altaInvitado(new Cliente(sNif,sNombre,sApellidos,sDireccion,iNumPersonas)));
		frmAltaInvitado.reset();
		
    
        $.ajax({
            url: "altaInvitado/altaInvitado.php",
            data: $('#frmAltaInvitado').serialize(),
            cache: false,
            async: true, // por defecto
            method: "POST",
            success: respuestaAltaInvitado
        });
		
	}
	
	else{
        alert(sMensaje);
    }


       function respuestaAltaInvitado(resultado) {
        let datos = JSON.parse(resultado);
        if (datos["error"]) {
            alert(datos["mensaje"]);
        } else {
            alert(datos["mensaje"]);
            frmAltaArticulo.reset();
            $("#frmAltaInvitado").parent().hide("normal");
        }
    
       
    
    }//fin else

    function limpiarErrores() {
        frmAltaInvitado.txtNIF.classList.remove("error");
        frmAltaInvitado.txtNombre.classList.remove("error");
        frmAltaInvitado.txtDireccion.classList.remove("error");
        frmAltaInvitado.txtNumPersonas.classList.remove("error");
    }
}



