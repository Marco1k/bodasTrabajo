// Carga dinámica de formularios
$("#altaInvitado").click(abrirAltaInvitado);
$("#altaCliente").click(abrirAltaCliente);
$("#mostrarListadoClientes").click(fMostrarListadoClientes);
$("#mostrarListadoInvitados").click(fMostrarListadoInvitados);



function abrirAltaInvitado() {

    // Oculto todos los formularios menos este
    $("form:not('#frmAltaArticulo')").hide("normal");
    $("#body").hide("normal");

    // Verifico si ya he cargado el formulario antes
    if ($('#frmAltaArticulo').size() == 0) {
        $("<div>").appendTo('#formularios').load("altaInvitado/altaInvitado.html",
            function() {
                $.getScript("altaInvitado/altaInvitado.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmAltaInvitado').show("normal");
    }
}

function abrirAltaCliente(){
    // Oculto todos los formularios menos este
    $("form:not('#frmAltaCliente')").hide("normal");
    $("#body").hide("normal");

    // Verifico si ya he cargado el formulario antes
    if ($('#frmAltaCliente').size() == 0) {
        $("<div>").appendTo('#formularios').load("altaCliente/altaCliente.html",
            function() {
                $.getScript("altaCliente/altaCliente.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmAltaCliente').show("normal");
    }
}


function fMostrarListadoClientes(){
    fOcultarFormularios();
    fOcultarTablasListado();
    document.getElementById("tabla").style.display = "table";
    fVaciarTabla();
    

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
    celda.textContent = "Fecha";
    celda = fila.insertCell(-1);
    celda.textContent = "Forma pago";

    let cuerpito = document.createElement("tbody");

    //GET from clientes
    $.get("altaCliente/getClientesListadoXML.php", respuestaListadoClientes, "xml");
    function respuestaListadoClientes(oXML){
      let clientes = oXML.querySelectorAll("cliente");
      
      clientes.forEach(function(cliente){
			fila.insertCell(-1).textContent = cliente.querySelector("nif").textContent;
            fila.insertCell(-1).textContent = cliente.querySelector("nombre").textContent;
            fila.insertCell(-1).textContent = cliente.querySelector("apellidos").textContent;
            fila.insertCell(-1).textContent = cliente.querySelector("fecha").textContent;
            fila.insertCell(-1).textContent = cliente.querySelector("formaPago").textContent;
      });
      
    }
    tabla.appendChild(cuerpito);
    
    
    $("#body").show("normal");
}

function fMostrarListadoInvitados()
{
    fOcultarFormularios();
    fVaciarTabla();
    let tHead = document.getElementById("tabla").createTHead();
    let tBody = document.getElementById("tabla").appendChild(document.getElementById("tabla").createTBody());
    let cabecera = tHead.insertRow(-1);
    cabecera.insertCell(-1).textContent = "NIF";
    cabecera.insertCell(-1).textContent = "NOMBRE";
    cabecera.insertCell(-1).textContent = "APELLIDOS";
    cabecera.insertCell(-1).textContent = "DIRECCION";
    cabecera.insertCell(-1).textContent = "NUMERO PERSONAS";
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
      }

    $.get("altaInvitado/getInvitadosListadoXML.php", respuestaListadoInvitados, "xml");
    function respuestaListadoInvitados(oXML){
      let empleados = oXML.querySelectorAll("invitado");
      
      empleados.forEach(function(invitado){
          let fila = tBody.insertRow(-1);
          fila.insertCell(-1).textContent = invitado.querySelector("nif").textContent;
          fila.insertCell(-1).textContent = invitado.querySelector("nombre").textContent;
          fila.insertCell(-1).textContent = invitado.querySelector("apellidos").textContent;
          fila.insertCell(-1).textContent = invitado.querySelector("direccion").textContent;
          fila.insertCell(-1).textContent = invitado.querySelector("numPersonas").textContent;
      });
      
    }
  
  document.getElementById("tabla").style.display = "table";
  $("#body").show("normal");
}


