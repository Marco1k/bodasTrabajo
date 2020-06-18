//# sourceURL=altaCliente.js;

$("#btnAltaCliente").click(aceptarAltaCliente);
//Alta cliente
function aceptarAltaCliente(){
    
	let sMensaje="";
	
	
	var sNif = frmAltaCliente.txtNIF.value.trim();
	var sNombre = frmAltaCliente.txtNombre.value.trim();
	var sApellidos = frmAltaCliente.txtApellidos.value.trim();
	var sFormaPago = frmAltaCliente.txtFormaPago.value.trim();
	var sFecha = frmAltaCliente.txtFecha.value.trim();
	
    
    let bValido = true;
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
		
	
   // Validar fecha 

	var oExpReg = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;

	 // if (oExpReg.test(sFecha) == false) {
		if ((sFecha.match(oExpReg)) && (campo!='')) {
			sMensaje+="La fecha está mal, debe ser algo como 00/00/0000. \n";
		}
		
		else{
			sMensaje+="";
		}
		
	
    // Insertamos el cliente
	
	if(sMensaje=="")
	{
		mensaje(oBodas.altaCliente(new Cliente(sNif,sNombre,sApellidos,sFormaPago,sFecha)));
		frmAltaCliente.reset();
		
		 //Llamada POST ayax
        let oCliente = {
            dni: sNif,
            nombre: sNombre,
            apellidos: sApellidos, 
            formaPago: sFormaPago, 
            fecha: sFecha
        };
            // Instanciar objeto Ajax
            var oAjax = instanciarXHR();

            // Parametros
            let sParametros = "datos=" + JSON.stringify(oCliente);
            sParametros = encodeURI(sParametros);

            //Configurar la llamada --> Asincrono por defecto
            oAjax.open("POST", "altaCliente/altaCliente.php");

            //Asociar manejador de evento de la respuesta
            oAjax.addEventListener("readystatechange", respuestaAltaCliente, false);

            // Cabecera POST
            oAjax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            //Hacer la llamada
            oAjax.send(sParametros);
        
        
        //let parametros = "datos=" + JSON.stringify(oCliente);
        //$.post("altaCliente/altaCliente.php", encodeURI(parametros), respuestaAltaCliente, "json");
		
	}
	
	else{
        alert(sMensaje);
    }

   

        
    
    function respuestaAltaCliente(){
                     
        if (this.readyState == 4 && this.status == 200){
            let oDatos = this.responseText;
            oDatos = JSON.parse(oDatos);

            if (oDatos.error) {
                alert(oDatos.sMensaje);
            } else {
                alert(oDatos.sMensaje);
                frmAltaCliente.reset();
                $("#frmAltaCliente").hide("normal");
            }
        }
       
    }

    function limpiarErrores(){
        frmAltaCliente.txtNIF.classList.remove("error");
        frmAltaCliente.txtNombre.classList.remove("error");
        frmAltaCliente.txtApellidos.classList.remove("error");
        frmAltaCliente.txtFormaPago.classList.remove("error");
        frmAltaCliente.txtFecha.classList.remove("error");
    }
}
//Fin alta cliente
function instanciarXHR() {
    var xhttp = null;

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else // code for IE5 and IE6
    {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    return xhttp;
}