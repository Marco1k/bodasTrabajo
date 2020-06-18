"use strict";
var oBodas=new Bodas();
var contadorTotalLineas;
datosIniciales();
fOcultarFormularios();
fOcultarTablasListado();
inicializarFrmModInvitado();
inicializarFrmModCliente();
inicializarFrmAltaConvite();
inicializarFrmAltaMedioDeTransporte();
inicializarFrmAltaLunaDeMiel();
inicializarFrmBajaInvitado();
inicializarFrmBajaCliente();
inicializarFrmConviteInvitado();
inicializarFrmMielCliente();

//Mostrar listado de clientes por defecto
window.addEventListener("load", mostrarListadoCliente);

//mostrar pagina principal - evento:
document.getElementById("mostrarPaginaPrincipal").addEventListener("click",fMostrarPaginaPrincipal,false);

//mostrar formularios:
document.getElementById("altaConvite").addEventListener("click",fMostrarAltaConvite,false);
document.getElementById("fMostrarModificarCliente").addEventListener("click", fMostrarModificarCliente, false);
document.getElementById("fMostrarBajaCliente").addEventListener("click", fMostrarBajaCliente, false);
document.getElementById("altaLunaDeMiel").addEventListener("click", fMostrarAltaLunaDeMiel, false);
document.getElementById("altaMedioDeTransporte").addEventListener("click", fMostrarAltaMedioDeTransporte, false);
document.getElementById("fMostrarModificarInvitado").addEventListener("click", fMostrarModificarInvitado, false);
document.getElementById("fMostrarBajaInvitado").addEventListener("click", fMostrarBajaInvitado, false);

//evento - mostrar listado
// mostrarListadoConvites
document.getElementById("mostrarListadoConvites").addEventListener("click",fMostrarListadoConvites,false);
document.getElementById("mostrarListadoMedioDeTransporte").addEventListener("click",fMostrarListadoMedioDeTransporte,false);
document.getElementById("mostrarListadoLunaDeMiel").addEventListener("click",fMostrarListadoLunaDeMiel,false);
document.getElementById("aceptarListarBodasFecha").addEventListener("click",fMostrarListadoBodasFechas,false);
document.getElementById("mostrarBodasFecha").addEventListener("click",fMostrarBodasFecha,false);
document.getElementById("mostrarListadoConviteInvitado").addEventListener("click",fMostrarConviteInvitado,false);
document.getElementById("aceptarListarConviteInvitado").addEventListener("click",fMostrarListadoConviteInvitado,false);
document.getElementById("mostrarListadoMielCliente").addEventListener("click",fMostrarMielCliente,false);
document.getElementById("aceptarListarMielCliente").addEventListener("click",fMostrarListadoMielCliente,false);

//eventos - botones Dar de ALTA:
document.getElementById("aceptarAltaConvite").addEventListener("click",altaConvite,false);
document.getElementById("aceptarAltaLunaMiel").addEventListener("click", faceptarLunaDeMiel,false);
document.getElementById("aceptarAltaMedioDeTransporte").addEventListener("click", faceptarMedioDeTransporte,false);

//eventos - botones mod/borrar cliente/invitado:
document.getElementById("modificarCliente").addEventListener("click",modificarCliente,false);
document.getElementById("darDeBajaCliente").addEventListener("click",darDeBajaCliente,false);
document.getElementById("modificarInvitado").addEventListener("click",modificarInvitado,false);
document.getElementById("darDeBajaInvitado").addEventListener("click",darDeBajaInvitado,false);

// DATOS INICIALES:
    function datosIniciales() {
	 oBodas.altaCliente(new Cliente("12312312F","Alberto","Gómez Gómez","Tarjeta","2020-03-12"));
	 oBodas.altaCliente(new Cliente("47586921G","María","Jiménez Jiménez","Tarjeta","2020-07-12"));
	 oBodas.altaCliente(new Cliente("28591456Y","Jesús","Castañas Castañas","A mano","2021-09-15"));

	 oBodas.altaInvitado(new Invitado("12342312F","Mario","Alonso Marr","Duwsasd 70",1));
	 oBodas.altaInvitado(new Invitado("47586924G","Juan Carlos","Riririri","DDdidii º0",4));
	 oBodas.altaInvitado(new Invitado("47586941G","Isabel","Compass","Bibilsa",1));
	 oBodas.altaInvitado(new Invitado("47583921G","Maria","Renerene","Buho 1",15));

	 oBodas.altaConvite("12312312F","47586924G","Los Palacios","17:00", "Muy bonito");
	 oBodas.altaConvite("47586921G","47586924G","Los marruecos","13:00", "Muy espacioso");
	 oBodas.altaConvite("28591456Y","47583921G","Los pillines","12:00", "Muy único");

	 oBodas.altaMedioDeTransporte("47586924G","22R","Autobus Sanlucar","20", "100");
	
	 oBodas.altaLunaDeMiel("12312312F","21B","Japon","1400");
	
	
	/*
	var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
            cargarXML(this);
    };
    xhr.open("GET", "BBDD.xml", true);
    xhr.send();
	*/
	
	let oXML = loadXMLDoc("BBDD.xml");
}


// Función para cargar el ficheroXML
function loadXMLDoc(filename) {
    let xhttp = null;

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else // code for IE5 and IE6
    {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", filename, false);

    xhttp.send();

    return xhttp.responseXML;
}

// mostrar y ocultar formularios cuando hacemos click:
function fOcultarFormularios(){ 
    if(document.getElementById("frmAltaInvitado") != null){
        frmAltaInvitado.style.display = "none";
    }
    if(document.getElementById("frmAltaCliente") != null){
        frmAltaCliente.style.display = "none";
    }
    frmAltaConvite.style.display = "none";
    frmModCliente.style.display = "none";
	frmBajaCliente.style.display = "none";
	frmModInvitado.style.display = "none";
	frmBajaInvitado.style.display = "none";
    frmAltaLunaDeMiel.style.display = "none";
	frmAltaMedioDeTransporte.style.display = "none";
    document.getElementById("divFrmListaBodasFecha").style.display = "none";
	document.getElementById("divFrmConviteInvitado").style.display = "none";
	document.getElementById("divFrmMielCliente").style.display = "none";
}
function fMostrarPaginaPrincipal(){
    //le damos al LOGO/HOME:
    fOcultarFormularios();
    fOcultarTablasListado();
    mostrarListadoCliente();
    // Mostrar por defecto la lista de los clientes
}
function fOcultarTablasListado(){
    document.getElementById("tabla").style.display = "none";
    
}

// Formulario despegables

function inicializarFrmModCliente(){
	
	// 1. Vaciar desplegable lstClientes
	// Seleccionamos todos los option del desplegable
	let oOptionsCliente = document.querySelectorAll("#lstCliente option");
	//Eliminamos cada option
	for(let i=0; i < oOptionsCliente.length;i++){
		oOptionsCliente.remove();
	}

	// 2.Solicitamos array de option del objeto oBodas
	oOptionsCliente = oBodas.getOptionsClientes();

	// 3. Insertamos los option recién generados
	for(let i=0; i < oOptionsCliente.length;i++){
		document.querySelector("#lstCliente").appendChild(oOptionsCliente[i]);
	}

	// 4. Vaciamos el desplegable de clientes seleccionados
	// Seleccionamos todos los option del desplegable
	oOptionsCliente = document.querySelectorAll("#lstClienteSeleccionados option");
	//Eliminamos cada option
	for(let i=0; i < oOptionsCliente.length;i++){
		oOptionsCliente.remove();
	}
}

function inicializarFrmModInvitado(){

	let oOptionsInvitado = document.querySelectorAll("#lstInvitado option");

	for(let i=0; i < oOptionsInvitado.length;i++){
		oOptionsInvitado.remove();
	}


	oOptionsInvitado = oBodas.getOptionsInvitados();


	for(let i=0; i < oOptionsInvitado.length;i++){
		document.querySelector("#lstInvitado").appendChild(oOptionsInvitado[i]);
	}


	oOptionsInvitado = document.querySelectorAll("#lstInvitadoSeleccionados option");

	for(let i=0; i < oOptionsInvitado.length;i++){
		oOptionsInvitado.remove();
	}
}


function inicializarFrmAltaConvite(){

	let oOptionsInvitado = document.querySelectorAll("#lstInvitado1 option");

	for(let i=0; i < oOptionsInvitado.length;i++){
		oOptionsInvitado.remove();
	}


	oOptionsInvitado = oBodas.getOptionsInvitados();


	for(let i=0; i < oOptionsInvitado.length;i++){
		document.querySelector("#lstInvitado1").appendChild(oOptionsInvitado[i]);
	}


	oOptionsInvitado = document.querySelectorAll("#lstInvitado1Seleccionados option");

	for(let i=0; i < oOptionsInvitado.length;i++){
		oOptionsInvitado.remove();
	}
	
	let oOptionsCliente = document.querySelectorAll("#lstCliente3 option");

	for(let i=0; i < oOptionsCliente.length;i++){
		oOptionsCliente.remove();
	}

	oOptionsCliente = oBodas.getOptionsClientes();

	for(let i=0; i < oOptionsCliente.length;i++){
		document.querySelector("#lstCliente3").appendChild(oOptionsCliente[i]);
	}

	oOptionsCliente = document.querySelectorAll("#lstCliente3Seleccionados option");

	for(let i=0; i < oOptionsCliente.length;i++){
		oOptionsCliente.remove();
	}
	
}

function inicializarFrmAltaMedioDeTransporte(){

	let oOptionsInvitado = document.querySelectorAll("#lstInvitado2 option");

	for(let i=0; i < oOptionsInvitado.length;i++){
		oOptionsInvitado.remove();
	}


	oOptionsInvitado = oBodas.getOptionsInvitados();


	for(let i=0; i < oOptionsInvitado.length;i++){
		document.querySelector("#lstInvitado2").appendChild(oOptionsInvitado[i]);
	}


	oOptionsInvitado = document.querySelectorAll("#lstInvitado2Seleccionados option");

	for(let i=0; i < oOptionsInvitado.length;i++){
		oOptionsInvitado.remove();
	}
}

function inicializarFrmAltaLunaDeMiel(){
	

	let oOptionsCliente = document.querySelectorAll("#lstCliente1 option");

	for(let i=0; i < oOptionsCliente.length;i++){
		oOptionsCliente.remove();
	}

	oOptionsCliente = oBodas.getOptionsClientes();

	for(let i=0; i < oOptionsCliente.length;i++){
		document.querySelector("#lstCliente1").appendChild(oOptionsCliente[i]);
	}

	oOptionsCliente = document.querySelectorAll("#lstCliente1Seleccionados option");

	for(let i=0; i < oOptionsCliente.length;i++){
		oOptionsCliente.remove();
	}
	
}

function inicializarFrmBajaCliente(){
	

	let oOptionsCliente = document.querySelectorAll("#lstCliente2 option");

	for(let i=0; i < oOptionsCliente.length;i++){
		oOptionsCliente.remove();
	}

	oOptionsCliente = oBodas.getOptionsClientes();

	for(let i=0; i < oOptionsCliente.length;i++){
		document.querySelector("#lstCliente2").appendChild(oOptionsCliente[i]);
	}

	oOptionsCliente = document.querySelectorAll("#lstCliente2Seleccionados option");

	for(let i=0; i < oOptionsCliente.length;i++){
		oOptionsCliente.remove();
	}
	
}

function inicializarFrmBajaInvitado(){

	let oOptionsInvitado = document.querySelectorAll("#lstInvitado3 option");

	for(let i=0; i < oOptionsInvitado.length;i++){
		oOptionsInvitado.remove();
	}


	oOptionsInvitado = oBodas.getOptionsInvitados();


	for(let i=0; i < oOptionsInvitado.length;i++){
		document.querySelector("#lstInvitado3").appendChild(oOptionsInvitado[i]);
	}


	oOptionsInvitado = document.querySelectorAll("#lstInvitado3Seleccionados option");

	for(let i=0; i < oOptionsInvitado.length;i++){
		oOptionsInvitado.remove();
	}
}

function inicializarFrmConviteInvitado(){
	
		let oOptionsInvitado = document.querySelectorAll("#lstInvitado4 option");

	for(let i=0; i < oOptionsInvitado.length;i++){
		oOptionsInvitado.remove();
	}


	oOptionsInvitado = oBodas.getOptionsInvitados();


	for(let i=0; i < oOptionsInvitado.length;i++){
		document.querySelector("#lstInvitado4").appendChild(oOptionsInvitado[i]);
	}


	oOptionsInvitado = document.querySelectorAll("#lstInvitado4Seleccionados option");

	for(let i=0; i < oOptionsInvitado.length;i++){
		oOptionsInvitado.remove();
	}

	
}

function inicializarFrmMielCliente(){
	

	let oOptionsCliente = document.querySelectorAll("#lstCliente4 option");

	for(let i=0; i < oOptionsCliente.length;i++){
		oOptionsCliente.remove();
	}

	oOptionsCliente = oBodas.getOptionsClientes();

	for(let i=0; i < oOptionsCliente.length;i++){
		document.querySelector("#lstCliente4").appendChild(oOptionsCliente[i]);
	}

	oOptionsCliente = document.querySelectorAll("#lstCliente4Seleccionados option");

	for(let i=0; i < oOptionsCliente.length;i++){
		oOptionsCliente.remove();
	}
	
}

// Bodas fecha
function fMostrarBodasFecha(){
    fOcultarFormularios();
    fOcultarTablasListado();
    document.getElementById("divFrmListaBodasFecha").style.display = "block";
    frmBodasFecha.reset();
}

// convite invitado 

function fMostrarConviteInvitado()
{
    fOcultarFormularios();
    fOcultarTablasListado();
    document.getElementById("divFrmConviteInvitado").style.display = "block";
    frmConviteInvitado.reset();
}

// cliente miel

function fMostrarMielCliente()
{
    fOcultarFormularios();
    fOcultarTablasListado();
    document.getElementById("divFrmMielCliente").style.display = "block";
    frmMielCliente.reset();
}

// mostrar tabla

function fMostrarListadoBodasFechas(){
    fOcultarFormularios();
    document.getElementById("tabla").style.display = "table";
    fVaciarTabla();
    let dtInicio = (new Date(frmBodasFecha.fechaInicio.value));
    let dtFin = (new Date(frmBodasFecha.fechaFin.value));
    oBodas.listadoBodasFecha(dtInicio,dtFin);
}

function fMostrarListadoConviteInvitado(){
    fOcultarFormularios();
    document.getElementById("tabla").style.display = "table";
    fVaciarTabla();
    var sNif = frmConviteInvitado.lstInvitado4.value.trim();
    oBodas.listadoConviteInvitado(sNif);
}

function fMostrarListadoMielCliente(){
    fOcultarFormularios();
    document.getElementById("tabla").style.display = "table";
    fVaciarTabla();
    var sNif = frmMielCliente.lstCliente4.value.trim();
    oBodas.listadoMielCliente(sNif);
}

function fVaciarTabla(){
    let hijosTabla = document.querySelectorAll('#tabla > *');
    if(hijosTabla.length > 0){
        hijosTabla.forEach(hijo=>{
            hijo.remove();
        })
    }
}

// mostrarListadoCliente
function mostrarListadoCliente(){
    fOcultarFormularios();
    fOcultarTablasListado();
    document.getElementById("tabla").style.display = "table";
    fVaciarTabla();
    let tablaAMostrar = oBodas.listadoCliente();
    document.getElementById("tabla").append(tablaAMostrar);
    
}

// Cliente
function fMostarAltaCliente(){
    fOcultarFormularios();
    fOcultarTablasListado();
    frmAltaCliente.reset();
    frmAltaCliente.style.display = "block";
    

}



function fMostrarModificarCliente(){
    fOcultarFormularios();
    fOcultarTablasListado();
    frmModCliente.reset();
    frmModCliente.style.display = "block";

}
function fMostrarBajaCliente(){
    fOcultarFormularios();
    fOcultarTablasListado();
    frmBajaCliente.reset();
    frmBajaCliente.style.display = "block";

}

// Invitado 

function fMostrarModificarInvitado(){
    fOcultarFormularios();
    fOcultarTablasListado();
    frmModInvitado.reset();
    frmModInvitado.style.display = "block";

}
function fMostrarBajaInvitado(){
    fOcultarFormularios();
    fOcultarTablasListado();
    frmBajaInvitado.reset();
    frmBajaInvitado.style.display = "block";

}


function darDeBajaCliente(){
   let sMensaje="";
	
	var sNif = frmBajaCliente.lstCliente2.value.trim();
	
	// Validar DNI
	if(!/^\d{8}[a-zA-Z]$/.test(sNif)){
        sMensaje+="El campo DNI esta mal\n";
    }
    else{
        sMensaje+="";
    }
	
	if(sMensaje=="")
	{
		mensaje(oBodas.bajaCliente(new Cliente(sNif)));
	}
	
	else{
        alert(sMensaje);
    }
}

function darDeBajaInvitado(){
   let sMensaje="";
	
	var sNif = frmBajaInvitado.lstInvitado3.value.trim();
	
	// Validar DNI
	if(!/^\d{8}[a-zA-Z]$/.test(sNif)){
        sMensaje+="El campo DNI esta mal\n";
    }
    else{
        sMensaje+="";
    }
	
	if(sMensaje=="")
	{
		mensaje(oBodas.bajaInvitado(new Invitado(sNif)));
	}
	
	else{
        alert(sMensaje);
    }
}

function modificarCliente(){
		let sMensaje="";
	
	var sNif=frmModCliente.lstCliente.value;
	// var sNif = frmModCliente.txtNIF.value.trim();
	var sNombre = frmModCliente.txtNombre.value.trim();
	var sApellidos = frmModCliente.txtApellidos.value.trim();
	var sFormaPago = frmModCliente.txtFormaPago.value.trim();
	var sFecha = frmModCliente.txtFecha.value.trim();
    
	
	// Vamos a controlar los fallos a la hora de insertar formularios
	
	
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
		mensaje(oBodas.modificarCliente(sNif,sNombre,sApellidos,sFormaPago,sFecha));
		frmModCliente.reset();
	}
	
	else{
        alert(sMensaje);
    }
}
// fin cliente

function modificarInvitado(){
		let sMensaje="";
	
	var sNif=frmModInvitado.lstInvitado.value;
	// var sNif = frmModInvitado.txtNIF.value.trim();
	var sNombre = frmModInvitado.txtNombre.value.trim();
	var sApellidos = frmModInvitado.txtApellidos.value.trim();
	var sDireccion = frmModInvitado.txtDireccion.value.trim();
	var iNumPersonas = frmModInvitado.txtNumPersonas.value.trim();
    
	
	// Vamos a controlar los fallos a la hora de insertar formularios
	
	
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
	
	// Insertamos el invitado
	
	if(sMensaje=="")
	{
		mensaje(oBodas.modificarInvitado(sNif,sNombre,sApellidos,sDireccion,iNumPersonas));
		frmModInvitado.reset();
	}
	
	else{
        alert(sMensaje);
    }
}
// fin invitado


//convite
    function fMostrarAltaConvite(){
        fOcultarFormularios();
        fOcultarTablasListado();
        frmAltaConvite.style.display = "block";
        frmAltaConvite.reset();
    }

    function fMostrarListadoConvite(){
        fOcultarFormularios();
        document.getElementById("tabla").style.display = "table";
        fVaciarTabla();
        let tablaAMostrar = oBodas.listadoConvites();
        document.getElementById("tabla").append(tablaAMostrar);
    }
// fin convite

// listados

function fMostrarListadoConvites(){
		fOcultarFormularios();
        document.getElementById("tabla").style.display = "table";
        fVaciarTabla();
        let tablaAMostrar = oBodas.listadoConvites();
        document.getElementById("tabla").append(tablaAMostrar);
}


function fMostrarListadoMedioDeTransporte(){
		fOcultarFormularios();
        document.getElementById("tabla").style.display = "table";
        fVaciarTabla();
        let tablaAMostrar = oBodas.listadoMedioDeTransporte();
        document.getElementById("tabla").append(tablaAMostrar);
}

function fMostrarListadoLunaDeMiel(){
		fOcultarFormularios();
        document.getElementById("tabla").style.display = "table";
        fVaciarTabla();
        let tablaAMostrar = oBodas.listadoLunaDeMiel();
        document.getElementById("tabla").append(tablaAMostrar);
}

// FIN mostrar y ocultar formularios


//**** ALTAS  *******************************/


//Alta convite
function altaConvite() {
    let sMensaje="";
	
	var sNifCliente=frmAltaConvite.lstCliente3.value.trim();
	// El valor seleccionado del desplegable es el NIF del invitado
	var sNifInvitado=frmAltaConvite.lstInvitado1.value;
	var sLugar=frmAltaConvite.txtLugar.value.trim();
	var sHora=frmAltaConvite.txtHora.value.trim();
	var sDescripcion=frmAltaConvite.txtDescripcion.value.trim();
	
	// Validar DNI CLIENTE
	if(!/^\d{8}[a-zA-Z]$/.test(sNifCliente)){
        sMensaje+="El campo DNI cliente esta mal\n";
    }
    else{
        sMensaje+="";
    }
	
	// Validar DNI INVITADO
	if(!/^\d{8}[a-zA-Z]$/.test(sNifInvitado)){
        sMensaje+="El campo DNI invitado esta mal\n";
    }
    else{
        sMensaje+="";
    }
	
	// Validar lugar 
	
	var oExpReg = /^[a-zA-Z0-9\s]{20,200}$/;

	
		if (oExpReg.test(sLugar) == false) {
			sMensaje+="El lugar esta mal, debe ser entre 20 y 200 caracteres. \n";
		}
		
		else{
			sMensaje+="";
		}	
	
	// Validar descripcion 
	
		var oExpReg = /^[a-zA-Z0-9\s]{20,200}$/;

	
		if (oExpReg.test(sDescripcion) == false) {
			sMensaje+="La descripcion esta mal, debe ser entre 20 y 200 caracteres. \n";
		}
		
		else{
			sMensaje+="";
		}	
	
	// Se envia los datos
	
	if(sMensaje=="")
	{
		mensaje(oBodas.altaConvite(sNifCliente,sNifInvitado,sLugar,sHora,sDescripcion));
		frmAltaConvite.reset();
	}
	
	else{
        alert(sMensaje);
    }
	

}

// mostrar alta luna de miel
function fMostrarAltaLunaDeMiel()
{
    fOcultarFormularios();
    fOcultarTablasListado();
    frmAltaLunaDeMiel.reset();
    frmAltaLunaDeMiel.style.display = "block";
}

// mostrar alta medio de transporte
function fMostrarAltaMedioDeTransporte()
{
    fOcultarFormularios();
    fOcultarTablasListado();
    frmAltaMedioDeTransporte.reset();
    frmAltaMedioDeTransporte.style.display = "block";
}


// cuando haga click boton aceptarAltaMedioTransporte
function faceptarMedioDeTransporte(){
    
	let sMensaje="";
	
	var sNif = frmAltaMedioDeTransporte.lstInvitado2.value.trim();
	var sCodigoTransporte = frmAltaMedioDeTransporte.txtCodigoTransporte.value.trim();
	var sModoTransporte = frmAltaMedioDeTransporte.txtModoTransporte.value.trim();
	var iCosteViaje = frmAltaMedioDeTransporte.txtCosteViaje.value.trim();
	
	
	
	// Validar DNI
	if(!/^\d{8}[a-zA-Z]$/.test(sNif)){
        sMensaje+="El campo DNI esta mal\n";
    }
    else{
        sMensaje+="";
    }
	
	// Validar codigo transporte
	
		if(!/^\d{2}[a-zA-Z]$/.test(sCodigoTransporte)){
        sMensaje+="El campo Codigo de transporte esta mal, necesita 2 numeros y una letra\n";
    }
    else{
        sMensaje+="";
    }
	

	
	// Validar coste viaje 
	
	var oExpReg = /^([1-99])*$/;

	
		if (oExpReg.test(iCosteViaje) == false) {
			sMensaje+="Esta mal el coste de viaje, debe ser entre 1 y 99. \n";
		}
		
		else{
			sMensaje+="";
		}	
	
	
	if(sMensaje=="")
	{
		mensaje(oBodas.altaMedioDeTransporte(sNif,sCodigoTransporte,sModoTransporte,iNumPersonas,iCosteViaje));
	}
	
	else{
        alert(sMensaje);
    }
    
}

//cuando click boton aceptarAltaLunaMiel:
function faceptarLunaDeMiel(){
    let sMensaje="";
	
	var sNif = frmAltaLunaDeMiel.lstCliente1.value.trim();
	var sCodigoViaje = frmAltaLunaDeMiel.txtCodigoViaje.value.trim();
	var sPais = frmAltaLunaDeMiel.txtPais.value.trim();
	var iCoste = frmAltaLunaDeMiel.txtCoste.value.trim();
	
	// Validar DNI
	if(!/^\d{8}[a-zA-Z]$/.test(sNif)){
        sMensaje+="El campo DNI esta mal\n";
    }
    else{
        sMensaje+="";
    }
	
	// Validar codigo viaje

		
	if(!/^\d{2}[a-zA-Z]$/.test(sCodigoViaje)){
        sMensaje+="El campo Codigo de viaje esta mal, necesita 2 numeros y una letra\n";
    }
    else{
        sMensaje+="";
    }

	// Validar pais
	
	var oExpReg = /^[a-zA-Z0-9\s]{5,30}$/;

	
		if (oExpReg.test(sPais) == false) {
			sMensaje+="El pais esta mal, debe ser entre 5 y 30 caracteres. \n";
		}
		
		else{
			sMensaje+="";
		}	
	
	// Validar coste
	
	var oExpReg = /^([1-9][0-9]|1000)$/;

	
		if (oExpReg.test(iCoste) == false) {
			sMensaje+="Esta mal el coste de viaje, debe ser entre 1 y 100. \n";
		}
		
		else{
			sMensaje+="";
		}	
	
	if(sMensaje=="")
	{
		mensaje(oBodas.altaLunaDeMiel(sNif,sCodigoViaje,sPais,iCoste));
	}
	
	else{
        alert(sMensaje);
    }
    
}

// fin alta luna de miel

function mensaje(sTexto) {
    alert(sTexto);
}


// Convierte una fecha DD/MM/AAAA a Date
function fechaToDate(fecha){
    let dia = fecha.split("/")[0];
    let mes = fecha.split("/")[1];
    let año = fecha.split("/")[2];
    return new Date(año + "/" + mes + "/" + dia);
}