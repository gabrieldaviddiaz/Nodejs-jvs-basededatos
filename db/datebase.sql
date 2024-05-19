create database if not exists biblioteca;

use biblioteca;

create table libros(
    id INT(5) not null AUTO_INCREMENT,
    nombre varchar(15) DEFAULT NULL,
    descripcion varchar(45) DEFAULT NULL,
    PRIMARY KEY (id)
);

insert into libros values
(1,"matematicas","libro de matematicas de primer semestre"),
(2,"historia","libro referente a historia mundial"),
(3,"turismo","libro detallado de los mejores paisajes del mundo");




create table cliente (
    cedula INT (8) not null AUTO_INCREMENT,
    nombre varchar(15) DEFAULT NULL,
    apellido varchar (15) DEFAULT NULL,
    telefono INT (11) DEFAULT NULL,
    PRIMARY KEY (cedula)
);

insert into cliente values 
(29939568,"andres","gonzales",041654423458),
(28665485,"maria", "paris",04125699874);

create table bibliotecario (
    cedula INT (8) not null AUTO_INCREMENT,
    nombre varchar(15) DEFAULT NULL,
    apellido varchar (15) DEFAULT NULL,
    telefono INT (11) DEFAULT NULL,
    PRIMARY KEY (cedula)
);

insert into bibliotecario values 
(25589685,"alberto","perez",04145896587),
(26589654,"monica", "lopez",0416589654);

create table prestamo (
    id INT(5) not null AUTO_INCREMENT,
    usuario varchar (15) DEFAULT NULL,
    tiempo INT (6) not null,
    PRIMARY key (id)
);

insert into prestamo values 
(1,"kimberling",72),
(2,"fernando",72);