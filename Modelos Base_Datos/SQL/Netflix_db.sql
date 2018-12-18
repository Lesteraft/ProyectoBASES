/*PROCEDIMIENTOS ALMACENADOS*/

/*Procedimiento almacenado necesario para el registro de usuarios en TBL_CUENTAS*/
CREATE OR REPLACE PROCEDURE Registro_Usuarios(in_codigo_cuenta IN  integer, in_codigo_plan IN integer, in_correo IN VARCHAR2, in_password IN VARCHAR2, in_num_tarjeta IN number, in_codigo_tarjeta IN number, in_fecha_validez IN date)
IS
BEGIN
    INSERT INTO TBL_CUENTAS
    (CODIGO_CUENTA, CODIGO_PLAN, CORREO, CONTRASE�A, NUMERO_TARJETA, CODIGO_TARJETA, FECHA_VALIDEZ) 
    VALUES
    (in_codigo_cuenta, in_codigo_plan, in_correo, in_password, in_num_tarjeta, in_codigo_tarjeta, in_fecha_validez);
END;


/*Procedimiento almacenado necesario para validar credenciales del login*/
CREATE OR REPLACE PROCEDURE LOGIN
 AS
 BEGIN
    SELECT CORREO, CONTRASE�A  FROM TBL_CUENTAS;
 END;
 
 ALTER TABLE TBL_PELICULAS
 ADD
 (
    URL_VIDEO VARCHAR2(200),
    URL_IMAGEN VARCHAR2(200)
);


/*Procedimiento necesario para subir peliculas*/
CREATE OR REPLACE PROCEDURE 
UPLOAD_PELI(
             in_codigo_pelicula IN integer, 
             in_codigo_valoracion IN integer, 
             in_codigo_clasificacion IN integer, 
             in_codigo_administrador IN integer, 
             in_nombre_pelicula varchar2, 
             in_resenia IN varchar2, 
             in_anio_estreno IN date, 
             in_visualizaciones IN number, 
             in_urlvideo IN varchar2, 
             in_urlimagen IN varchar2 
          )
IS
BEGIN
    INSERT INTO TBL_PELICULAS
    (CODIGO_PELICULA, CODIGO_VALORACION, CODIGO_CLASIFICACION, CODIGO_ADMINISTRADOR, NOMBRE_PELICULA, RESENIA, ANIO_ESTRENO, VISUALIZACIONES, URL_VIDEO, URL_IMAGEN)
    VALUES
    (
        in_codigo_pelicula, 
        in_codigo_valoracion, 
        in_codigo_clasificacion, 
        in_codigo_administrador, 
        in_nombre_pelicula, 
        in_resenia, 
        in_anio_estreno, 
        in_visualizaciones, 
        in_urlvideo, 
        in_urlimagen 
    );
END;


/*Creacion SEQUENCE*/

/*SEQUENCE CUENTAS*/
CREATE SEQUENCE cuentas_seq
 START WITH     1
 INCREMENT BY   1;
 
  DROP SEQUENCE cuentas_seq; 

/*SEQUENCE PELICULAS*/
CREATE SEQUENCE peliculas_seq
 START WITH     1
 INCREMENT BY   1;
 
 DROP SEQUENCE peliculas_seq; 
 


/*Pruebas procedimientos almacenados*/
execute upload_peli(2, 1, 1, 1, 'Aquaman', 'Hola Mundo', to_date('11/12', 'MM/YY'), 0, 'URLVIDEO', 'URLIMAGEN');