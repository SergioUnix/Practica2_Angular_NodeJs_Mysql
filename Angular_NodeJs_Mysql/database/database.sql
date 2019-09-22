-- create database Practica2;
-- USE Practica2;

-- create table tipo_usuario(
-- cod_tipo_usuario INT NOT NULL auto_increment primary KEY,
-- nombre_tipo varchar(15) not null
-- );
-- insert into tipo_usuario(nombre_tipo) Values("Administrador"),("Asistente"),("Cliente");
-- create table producto(
-- cod_producto int not null auto_increment primary key,
-- nombre varchar(20) not null,
-- cantidad_disp int not null,
-- precio double not null
-- );
-- insert into producto(nombre,cantidad_disp,precio) values('laptop', 30, 13.5),('Lapicero',40,10.5),('Cuaderno',20,8.5);
-- create table proveedor(
-- cod_proveedor int not null auto_increment primary key,
-- nombre varchar(50) not null,
-- direccion varchar(50) not null,
-- telefono int not null
-- );
-- insert into proveedor(nombre,direccion,telefono) values('Gallo mas gallo','9na Av 13-80',24388889),('Elecktra','13 calle zona1',50280956); 
-- create table usuario(
-- cod_usuario int not null auto_increment primary key,
-- nombre varchar(45) not null,
-- apellido varchar(45) not null,
-- nickname varchar(20) not null,
-- password varchar(15) not null,
-- cod_tipo_fk int not null,
-- constraint fk_cod_tipo foreign key (cod_tipo_fk) references tipo_usuario(cod_tipo_usuario)
-- );

-- create table factura(
-- cod_factura int not null auto_increment primary key,
-- nit int not null,
-- fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
-- cod_usuario_fk int not null,
-- constraint fk_cod_usuario foreign key (cod_usuario_fk) references usuario(cod_usuario)
-- );

-- create table producto_proveedor(
-- cod_producto_proveedor int not null auto_increment primary key,
-- cod_producto_fk int not null,
-- cod_proveedor_fk int not null,
-- constraint fk_cod_producto foreign key (cod_producto_fk) references producto(cod_producto),
-- constraint fk_cod_proveedor foreign key (cod_proveedor_fk) references proveedor(cod_proveedor)
-- );


-- create table detalle_factura(
-- cod_detalle_factura int not null auto_increment primary key,
-- cod_factura_fk int not null,
-- cod_producto_proveedor_fk int not null,
-- constraint fk_cod_factura foreign key (cod_factura_fk) references factura(cod_factura),
-- constraint fk_cod_produto_proveedor foreign key (cod_producto_proveedor_fk) references producto_proveedor(cod_producto_proveedor)
-- );




