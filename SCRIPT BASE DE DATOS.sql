create database Practica2;
USE Practica2;

create table tipo_usuario(
cod_tipo_usuario INT NOT NULL auto_increment primary KEY,
nombre_tipo varchar(15) not null
);
/*..insert into tipo_usuario(nombre_tipo) Values("Administrador"),("Asistente"),("Cliente");..*/

create table producto(
cod_producto int not null auto_increment primary key,
nombre varchar(20) not null,
cantidad_disp int not null,
precio double not null
);
/*..insert into producto(nombre,cantidad_disp,precio) values('laptop', 30, 13.5),('Lapicero',40,10.5),('Cuaderno',20,8.5);..*/

create table proveedor(
cod_proveedor int not null auto_increment primary key,
nombre varchar(50) not null,
direccion varchar(50) not null,
telefono int not null
);
/*..insert into proveedor(nombre,direccion,telefono) values('Gallo mas gallo','9na Av 13-80',24388889),('Elecktra','13 calle zona1',50280956); ..*/

create table usuario(
cod_usuario int not null auto_increment primary key,
nombre varchar(45) not null,
apellido varchar(45) not null,
nickname varchar(20) not null,
password varchar(15) not null,
cod_tipo_fk int not null,
constraint fk_cod_tipo foreign key (cod_tipo_fk) references tipo_usuario(cod_tipo_usuario)
);
/*..insert into usuario(nombre,apellido,nickname,password,cod_tipo_fk) values('Ariel','Ramírez','SergioUnix','1234',1),('Mady','Mendez','MadeUnix','12345',2),('Pedro','Perez','PedroUnix','123456',3); ..*/

create table factura(
cod_factura int not null auto_increment primary key,
nit int not null,
fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
cod_usuario_fk int not null,
constraint fk_cod_usuario foreign key (cod_usuario_fk) references usuario(cod_usuario)
);
/*..insert into factura(nit,cod_usuario_fk) values(1245124,2),(45785,3);..*/


create table detalle_factura(
cod_detalle_factura int not null auto_increment primary key,
cod_factura_fk int not null,
cod_producto_fk int not null,
constraint fk_cod_factura foreign key (cod_factura_fk) references factura(cod_factura),
constraint fk_cod_produto_proveedor foreign key (cod_producto_fk) references producto(cod_producto)
);
/*..insert into detalle_factura(cod_factura_fk,cod_producto_fk) values (1,1),(1,2),(2,1),(2,2);..*/


create table producto_proveedor(
cod_producto_proveedor int not null auto_increment primary key,
cod_producto_fk int not null,
cod_proveedor_fk int not null,
constraint fk_cod_producto foreign key (cod_producto_fk) references producto(cod_producto),
constraint fk_cod_proveedor foreign key (cod_proveedor_fk) references proveedor(cod_proveedor)
);
/*..insert into producto_proveedor(cod_producto_fk,cod_proveedor_fk) values (1,1),(1,2),(2,1),(2,2),(3,1),(3,2);..*/

/*..    Querys Necesarios para Practica 2  ...*/

/*.. Buscar Usuario...*/
Select * from usuario where nickname='SergioUnix' and password=1234;
/*.. Crear Usuario ...*/
insert into usuario(nombre,apellido,nickname,password,cod_tipo_fk) values('Zord','Garcia','ZordUnix','177',3);
select*from usuario;
/*.. Crear Proveedor ...*/
insert into proveedor(nombre,direccion,telefono) values('Gallo mas gallo','9na Av 13-80',24388889);

/*.. Agregar,  Modificar,  Eliminar y buscar Productos ...*/
insert into producto(nombre,cantidad_disp,precio) values('bocina', 33, 14);
UPDATE producto set nombre='laptop', cantidad_disp=30, precio=13.5  WHERE  cod_producto=1;
DELETE FROM producto WHERE cod_usuario =3;
Select * from producto where nombre='Lapicero';

/*.. Asociar producto a uno  o más proveedores ...*/
insert into producto_proveedor(cod_producto_fk,cod_proveedor_fk) values (1,1);

/*.. Almacenar la facturas de las compras realizadas y crear detalle de cada factura ...*/
insert into factura(nit,cod_usuario_fk) values(1245124,2),(45785,3);
insert into detalle_factura(cod_factura_fk,cod_producto_fk) values (1,3),(1,3),(2,4),(2,4);

/*.. Reporte 1...Listado de todos los productos ordenados de los más comprados a los menos
comprados.*/
Select  producto.nombre, count(nombre)as vendidos FROM detalle_factura INNER JOIN producto ON detalle_factura.cod_producto_fk = producto.cod_producto
group by nombre order by vendidos desc;

/*.. Reporte 2  Listado de todos los clientes ordenados alfabéticamente y la cantidad de compras
que cada uno ha realizado ....*/
Select  nombre, count(nombre)as compras FROM factura INNER JOIN usuario ON factura.cod_usuario_fk = usuario.cod_usuario
group by nombre order by nombre asc;
