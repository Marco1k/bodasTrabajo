create database bodas;
use bodas;

CREATE TABLE clientes (
  NIF varchar(9) NOT NULL,
  Nombre varchar(20) NOT NULL,
  Apellidos varchar(45) NOT NULL,
  FormaPago varchar(45) NOT NULL,
  FechaBoda varchar(45) NOT NULL,
  PRIMARY KEY (NIF)
);

INSERT INTO clientes (NIF,Nombre,Apellidos,FormaPago,FechaBoda) VALUES 
('10101010Z','VICTOR','CARDENAS BERLANGA','Metálico','10/12/2033'),
('11111111Z','EUGENIO','ROLDAN ROMASANTA','Paypal','10/12/2023');

CREATE TABLE invitados (
  NIF varchar(9) NOT NULL,
  Nombre varchar(45) NOT NULL,
  Apellidos varchar(45) NOT NULL,
  Direccion varchar(45) NOT NULL,
  NumPersonas varchar(45) NOT NULL,
  PRIMARY KEY (NIF)
);

INSERT INTO invitados (NIF,Nombre,Apellidos,Direccion,NumPersonas) VALUES 
('10101010b','Ruru','CARDENAS BERLANGA','AAAAAA','12'),
('10101010a','Amelia','CARDENAS BERLANGA','BBBBB','32');

CREATE TABLE convites (
  NIFCliente varchar(9) NOT NULL,
  NIFInvitado varchar(9) NOT NULL,
  Lugar varchar(45) NOT NULL,
  Hora varchar(45) NOT NULL,
  Descripcion varchar(45) NOT NULL,
  PRIMARY KEY (NIFCliente,NIFInvitado),
  CONSTRAINT FK_CLIENTES FOREIGN KEY (NIFCliente) REFERENCES clientes (NIF) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT FK_INVITADOS_CONVITE FOREIGN KEY (NIFInvitado) REFERENCES invitados (NIF) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE lunaDeMiel (
  NIFCliente varchar(9) NOT NULL DEFAULT '',
  codigoViaje varchar(3) NOT NULL DEFAULT '',
  Pais varchar(45) NOT NULL DEFAULT '',
  Coste varchar(45) NOT NULL DEFAULT '',
  PRIMARY KEY (NIFCliente),
  CONSTRAINT FK_CLIENTES_LUNA FOREIGN KEY (NIFCliente) REFERENCES clientes (NIF) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE medioDeTransporte (
  NIFInvitado varchar(9) NOT NULL DEFAULT '',
  codigoTransporte varchar(3) NOT NULL DEFAULT '',
  ModoTransporte varchar(45) NOT NULL DEFAULT '',
  NumPersonas varchar(45) NOT NULL DEFAULT '',
  CosteViaje varchar(45) NOT NULL DEFAULT '',
  PRIMARY KEY (NIFInvitado),
  CONSTRAINT FK_INVITADOS_TRANSPORTE FOREIGN KEY (NIFInvitado) REFERENCES invitados (NIF) ON DELETE NO ACTION ON UPDATE NO ACTION
);