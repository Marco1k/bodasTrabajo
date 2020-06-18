"use strict";
//CLASE Bodas
function Bodas(){
	this.clientes=[];
	this.invitados=[];
	this.convites=[];
	this.medioDeTransportes=[];
	this.lunasDeMiel=[];
    
}

//métodos de la clase bodas

///*****ALTAS  */
Bodas.prototype.altaLunaDeMiel = function(sNif,sCodigoViaje,sPais,iCoste){
	//devuelve string
  	var resultado="";
	var oCliente=this.buscarCliente(sNif);
	if (oCliente==null) {				//El cliente ya esté registrado
        resultado="El cliente no existe.";
		
    }
	else{				
     		 resultado="Alta luna de miel realizada";
     		 this.lunasDeMiel.push(new LunaDeMiel(sNif,sCodigoViaje,sPais,iCoste));
     	}
	

	return resultado;
}
  
Bodas.prototype.altaMedioDeTransporte = function(sNif,sCodigoTransporte,sModoTransporte,iNumPersonas,iCosteViaje){
  //devuelve string
  	var resultado="";
	var oInvitado=this.buscarInvitado(sNif);
	if (oInvitado==null) {				//El Invitado ya esté registrado
        resultado="El Invitado no existe.";
		
    }
	else{				
     		 resultado="Medio transporte realizada";
     		 this.medioDeTransportes.push(new MedioDeTransporte(sNif,sCodigoTransporte,sModoTransporte,iNumPersonas,iCosteViaje));
     	}
	

	return resultado;
	}
  
  Bodas.prototype.altaCliente = function(oCliente){
  	//no puede haber dos clientes con el mismo nif
    var resultado="El cliente ya exite.";
    if (this.buscarCliente(oCliente.nif)==null) {
        this.clientes.push(oCliente);
        resultado="Cliente dado de alta.";
    }
        return resultado;
  	//devuelve string
  }

	
  Bodas.prototype.altaInvitado = function(oInvitado){
  	//no puede haber dos invitados con el mismo nif
    var resultado="El invitado ya existe.";
    if (this.buscarInvitado(oInvitado.nif)==null) {
        this.invitados.push(oInvitado);
        resultado="Invitado dado de alta.";
    }
        return resultado;
  	//devuelve string
  }
  
  Bodas.prototype.altaConvite = function(nifCliente,nifInvitado,lugar,nifHora,descripcion){
  	//devuelve string
  	var resultado="";
     		 resultado="Convite realizada";
     		 this.convites.push(new Convite(nifCliente,nifInvitado,lugar,nifHora,descripcion));
	

	return resultado;
	}
  
//****FIN ALTAS */

// LISTADOS DESPEGABLES

Bodas.prototype.getOptionsInvitados = function(){

	let oOptions = [];

	for(let i=0; i < this.invitados.length; i++){
		let oOptionInvitado = document.createElement("option");
		oOptionInvitado.value = this.invitados[i].nif;
		oOptionInvitado.textContent =  this.invitados[i].nif + " - " + this.invitados[i].apellidos + ", " + this.invitados[i].nombre;

		// insertamos el option generado en el array
		oOptions.push(oOptionInvitado);
	}

	return oOptions; // Devolvemos array de options
  }
  
  Bodas.prototype.getOptionsClientes = function(){

	let oOptions = [];

	for(let i=0; i < this.clientes.length; i++){
		let oOptionCliente = document.createElement("option");
		oOptionCliente.value = this.clientes[i].nif;
		oOptionCliente.textContent =  this.clientes[i].nif + " - " + this.clientes[i].apellidos + ", " + this.clientes[i].nombre;

		// insertamos el option generado en el array
		oOptions.push(oOptionCliente);
	}

	return oOptions; // Devolvemos array de options
  }

// MODIFICAR/BORRAR CLIENTE:

Bodas.prototype.modificarCliente = function(sNif,sNombre,sApellidos,sFormaPago,sFecha){
        let sMensaje = "";

		if (this.buscarCliente(sNif)==null) {
			sMensaje = "Este cliente no existe";
		}
		
		else {
			for (let i = 0; i < this.clientes.length; i++) {
				if (this.clientes[i].nif == sNif) {
					this.clientes[i].nombre = sNombre;
					this.clientes[i].apellidos = sApellidos;
					this.clientes[i].formaPago = sFormaPago;
					this.clientes[i].fecha	 = sFecha;

					sMensaje = "Cliente modificado correctamente";
				}
			}
		}
		
        return sMensaje;
    }
	
// Para dar de baja a un cliente/invitado

	Bodas.prototype.bajaCliente= function(oCliente){
		let sResultado = "";
        let buscarCliente = false;

        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].nif == oCliente.nif) {
                this.clientes.splice(i, 1);
                sResultado = "Cliente borrado correctamente";
                buscarCliente = true;
            }
        }

        if (buscarCliente == false) {
            sResultado = "No hay ningun cliente con ese NIF";
        }

        return sResultado;
	}
	
		Bodas.prototype.bajaInvitado= function(oInvitado){
		let sResultado = "";
        let buscarInvitado = false;

        for (let i = 0; i < this.invitados.length; i++) {
            if (this.invitados[i].nif == oInvitado.nif) {
                this.invitados.splice(i, 1);
                sResultado = "Invitado borrado correctamente";
                buscarInvitado = true;
            }
        }

        if (buscarInvitado == false) {
            sResultado = "No hay ningun invitado con ese NIF";
        }

        return sResultado;
	}
	

// Modificar invitados

Bodas.prototype.modificarInvitado = function(sNif,sNombre,sApellidos,sDireccion,iNumPersonas){
        let sMensaje = "";

		if (this.buscarInvitado(sNif)==null) {
			sMensaje = "Este invitado no existe";
		}
		
		else {
			for (let i = 0; i < this.invitados.length; i++) {
				if (this.invitados[i].nif == sNif) {
					this.invitados[i].nombre = sNombre;
					this.invitados[i].apellidos = sApellidos;
					this.invitados[i].direccion = sFormaPago;
					this.invitados[i].numPersonas	 = sFecha;

					sMensaje = "Invitado modificado correctamente";
				}
			}
		}
		
        return sMensaje;
    }

//****BUSQUEDAS ***métodos de búsquedas:

  Bodas.prototype.buscarCliente = function(sNif){
  	var oCliente = null;
    var array=this.clientes.filter(cliente => cliente.nif == sNif);
    if (array.length>0)
        oCliente=array[0];
    return oCliente;
  	//devuelve oCliente si está o nulo si no está en la tabla
  }

  Bodas.prototype.buscarInvitado = function(sNif){
  	var oInvitado = null;
    var array=this.invitados.filter(invitado => invitado.nif == sNif);
    if (array.length>0)
        oInvitado=array[0];
    return oInvitado;
  	//devuelve oInvitado si está o nulo si no está en la tabla
  }

  Bodas.prototype.buscarConvite = function(oCliente){
  	// var oCliente=null; MAL
	  var array=this.convite.filter(convite=>convite.nifCliente==oCliente.nif);
	  let oConvite = null;
  	if(array.length>0)
  		oConvite=array[0];
  	return oConvite;
  	//devuelve oConvite
  }
//******fin métodos de búsquedas


// *********LISTADOS ******

Array.prototype.swap = function (x,y) {
	var b = this[x];
	this[x] = this[y];
	this[y] = b;
	return this;
  }
  
Bodas.prototype.listadoMedioDeTransporte = function(){
    let tabla = document.getElementById("tabla");
    let cabecera = tabla.createTHead();
    let fila= cabecera.insertRow(-1);
    let celda = fila.insertCell(-1);
    celda.textContent = "NIF Invitado";
    celda = fila.insertCell(-1);
    celda.textContent = "Codigo medio transporte";
    celda = fila.insertCell(-1);
    celda.textContent = "Modo transporte";
    celda = fila.insertCell(-1);
    celda.textContent = "Numero personas";
    celda = fila.insertCell(-1);
    celda.textContent = "Coste viaje";
    let cuerpito = document.createElement("tbody");

     for(var i=0; i< this.medioDeTransportes.length; i++){
       cuerpito.append(this.medioDeTransportes[i].toHTMLrow());
    }
    return cuerpito;

}

Bodas.prototype.listadoLunaDeMiel = function(){

    let tabla = document.getElementById("tabla");
    let cabecera = tabla.createTHead();
    let fila= cabecera.insertRow(-1);
    let celda = fila.insertCell(-1);
    celda.textContent = "NIF cliente";
    celda = fila.insertCell(-1);
    celda.textContent = "Codigo viaje";
    celda = fila.insertCell(-1);
    celda.textContent = "Pais";
    celda = fila.insertCell(-1);
    celda.textContent = "Coste viaje";

    let cuerpito = document.createElement("tbody");

     for(var i=0; i< this.lunasDeMiel.length; i++){
       cuerpito.append(this.lunasDeMiel[i].toHTMLrow());
    }
    return cuerpito;

}

Bodas.prototype.listadoConvites = function(){

    let tabla = document.getElementById("tabla");
    let cabecera = tabla.createTHead();
    let fila= cabecera.insertRow(-1);
    let celda = fila.insertCell(-1);
    celda.textContent = "NIF cliente";
    celda = fila.insertCell(-1);
    celda.textContent = "NIF invitado";
    celda = fila.insertCell(-1);
    celda.textContent = "Lugar";
    celda = fila.insertCell(-1);
    celda.textContent = "Hora";
	celda = fila.insertCell(-1);
    celda.textContent = "Descripcion";

    let cuerpito = document.createElement("tbody");

     for(var i=0; i< this.convites.length; i++){
       cuerpito.append(this.convites[i].toHTMLrow());
    }
    return cuerpito;

}

Bodas.prototype.listadoCliente = function(){
    let tabla = document.getElementById("tabla");
    let cabecera = tabla.createTHead();
    let fila= cabecera.insertRow(-1);
    let celda = fila.insertCell(-1);
    celda.textContent = "NIF cliente";
    celda = fila.insertCell(-1);
    celda.textContent = "Nombre";
    celda = fila.insertCell(-1);
    celda.textContent = "Apellidos";
    celda = fila.insertCell(-1);
    celda.textContent = "Forma pago";
    celda = fila.insertCell(-1);
    celda.textContent = "Fecha";
    let cuerpito = document.createElement("tbody");

     for(var i=0; i< this.clientes.length; i++){
       cuerpito.append(this.clientes[i].toHTMLrow());
    }
    return cuerpito;

}

Bodas.prototype.listadoBodasFecha = function(fInicio,fFin){
    let dtInicio =fInicio;
    let dtFin = fFin;
    
    let tabla = document.getElementById("tabla");
    let cabecera = tabla.createTHead();
    let fila= cabecera.insertRow(-1);
    let celda = fila.insertCell(-1);
    celda.textContent = "NIF";
    celda = fila.insertCell(-1);
    celda.textContent = "Nombre del cliente";
    celda = fila.insertCell(-1);
    celda.textContent = "Apellido del cliente";
    celda = fila.insertCell(-1);
    celda.textContent = "Forma pago";
    celda = fila.insertCell(-1);
    celda.textContent = "Fecha";
    let cuerpito = document.createElement("tbody");

    let arrayFecha = [];
    for(let i=0; i<this.clientes.length;i++){
        let fecha = fechaToDate(this.clientes[i].fecha);
        if(fecha>dtInicio && fecha<dtFin){
            arrayFecha.push(this.clientes[i]);
        }
    }

    arrayFecha.forEach(x =>{
        
        cuerpito.appendChild(x.toHTMLrow());
    });

    tabla.appendChild(cuerpito);
    return tabla;

}

Bodas.prototype.listadoConviteInvitado = function(sNif){
    let oNif =sNif;
    
    let tabla = document.getElementById("tabla");
    let cabecera = tabla.createTHead();
    let fila= cabecera.insertRow(-1);
    let celda = fila.insertCell(-1);
    celda.textContent = "NIF Cliente";
    celda = fila.insertCell(-1);
    celda.textContent = "NIF Invitado";
    celda = fila.insertCell(-1);
    celda.textContent = "Lugar";
    celda = fila.insertCell(-1);
    celda.textContent = "Hora";
    celda = fila.insertCell(-1);
    celda.textContent = "Descripcion";
    let cuerpito = document.createElement("tbody");

    let arrayNif = [];
    for(let i=0; i<this.convites.length;i++){
        let nif = this.convites[i].nifInvitado;
        if(nif == oNif){
            arrayNif.push(this.convites[i]);
        }
    }

    arrayNif.forEach(x =>{
        
        cuerpito.appendChild(x.toHTMLrow());
    });

    tabla.appendChild(cuerpito);
    return tabla;

}

Bodas.prototype.listadoMielCliente = function(sNif){
    let oNif =sNif;
    
    let tabla = document.getElementById("tabla");
    let cabecera = tabla.createTHead();
    let fila= cabecera.insertRow(-1);
    let celda = fila.insertCell(-1);
	
    celda.textContent = "NIF Cliente";
    celda = fila.insertCell(-1);
    celda.textContent = "Codigo viaje";
    celda = fila.insertCell(-1);
    celda.textContent = "Pais";
    celda = fila.insertCell(-1);
    celda.textContent = "Coste viaje";
    celda = fila.insertCell(-1);
    let cuerpito = document.createElement("tbody");

    let arrayNif = [];
    for(let i=0; i<this.lunasDeMiel.length;i++){
        let nif = this.lunasDeMiel[i].nif;
        if(nif == oNif){
            arrayNif.push(this.lunasDeMiel[i]);
        }
    }

    arrayNif.forEach(x =>{
        
        cuerpito.appendChild(x.toHTMLrow());
    });

    tabla.appendChild(cuerpito);
    return tabla;

}

///**** FIN LISTADOS ************* */



//***** CLASES  */

Array.prototype.swap = function (x,y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
}

//clase cliente 
class Cliente{
	constructor(sNif,sNombre,sApellidos,dFecha,sFormaPago){
	this.nif=sNif;
	this.nombre=sNombre;
	this.apellidos=sApellidos;
	this.fecha=dFecha;
	this.formaPago=sFormaPago;
	}
	toHTMLrow(){
		let linea = document.createElement("tr");
			
			let celda = linea.insertCell(-1);
			celda.textContent=this.nif;
			
			celda = linea.insertCell(-1);
			celda.textContent=this.nombre;
			
			celda = linea.insertCell(-1);
			celda.textContent=this.apellidos;
			
			celda = linea.insertCell(-1);
			celda.textContent=this.fecha;
			
			celda = linea.insertCell(-1);
			celda.textContent=this.formaPago;
			
			return linea;
	}
}

//clase convite 
class Convite{
	constructor(oCliente,oInvitado,lugar,hora, descripcion){
	this.cliente=oCliente;
	this.invitado=oInvitado;
	this.lugar=lugar;
	this.hora=hora;
	this.descripcion=descripcion;
}
	toHTMLrow(){
			let linea = document.createElement("tr");
			
			let celda = linea.insertCell(-1);
			celda.textContent=this.cliente;
			
			celda = linea.insertCell(-1);
			celda.textContent=this.invitado;
			
			celda = linea.insertCell(-1);
			celda.textContent=this.lugar;
			
			celda = linea.insertCell(-1);
			celda.textContent=this.hora;
			
			celda = linea.insertCell(-1);
			celda.textContent=this.descripcion;
			
			return linea;
	}
}

Date.prototype.toString=function(){
	var dia=this.getDate();
	var mes=this.getMonth()+1;
	var anio=this.getFullYear();
	var sCadena=dia+"/"+mes+"/"+anio;
	return sCadena;
}

//clase invitado 
class Invitado{
	constructor(sNif,sNombre,sApellidos,sDireccion,iNumPersonas){
		this.nif=sNif;
		this.nombre=sNombre;
		this.apellidos=sApellidos;
		this.direccion=sDireccion;
		this.numPersonas=iNumPersonas;
}
	toHTMLrow(){
		let linea = document.createElement("tr");
			
			let celda = linea.insertCell(-1);
			celda.textContent=this.nif;
			
			celda = linea.insertCell(-1);
			celda.textContent=this.nombre;
			
			celda = linea.insertCell(-1);
			celda.textContent=this.apellidos;
			
			celda = linea.insertCell(-1);
			celda.textContent=this.direccion;
			
			celda = linea.insertCell(-1);
			celda.textContent=this.numPersonas;
			
			return linea;
	}
}

// Clase medio de transporte 

class MedioDeTransporte{
	constructor(sNif,sCodigoTransporte,sModoTransporte,iNumPersonas,iCosteViaje){
	this.nif=sNif;
	this.codigoTransporte=sCodigoTransporte;
	this.modoTransporte=sModoTransporte;
	this.numPersonas=iNumPersonas;
	this.costeViaje=iCosteViaje;
}

	toHTMLrow(){
		let linea = document.createElement("tr");
			
			let celda = linea.insertCell(-1);
			celda.textContent=this.nif;
			
			celda = linea.insertCell(-1);
			celda.textContent=this.codigoTransporte;
			
			celda = linea.insertCell(-1);
			celda.textContent=this.modoTransporte;
			
			celda = linea.insertCell(-1);
			celda.textContent=this.numPersonas;
			
			celda = linea.insertCell(-1);
			celda.textContent=this.costeViaje;
			
			return linea;
	}
}

// Clase luna de miel

class LunaDeMiel{
	constructor(sNif,sCodigoViaje,sPais,iCoste){
	this.nif=sNif;
	this.codigoViaje=sCodigoViaje;
	this.pais=sPais;
	this.coste=iCoste;
}

	toHTMLrow(){
		let linea = document.createElement("tr");
			
			let celda = linea.insertCell(-1);
			celda.textContent=this.nif;
			
			celda = linea.insertCell(-1);
			celda.textContent=this.codigoViaje;
			
			celda = linea.insertCell(-1);
			celda.textContent=this.pais;
			
			celda = linea.insertCell(-1);
			celda.textContent=this.coste;
			
			return linea;
	}
}