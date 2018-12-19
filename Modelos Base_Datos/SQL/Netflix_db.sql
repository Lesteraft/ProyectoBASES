/*PROCEDIMIENTOS ALMACENADOS*/

/*Procedimiento almacenado necesario para el registro de usuarios en TBL_CUENTAS*/
CREATE OR REPLACE PROCEDURE 
Registro_Usuarios(
                    in_codigo_cuenta IN  integer,
                    in_codigo_administrador IN integer,
                    in_codigo_plan IN integer, 
                    in_correo IN VARCHAR2, 
                    in_password IN VARCHAR2, 
                    in_num_tarjeta IN number, 
                    in_codigo_tarjeta IN number, 
                    in_fecha_validez IN date
                )
IS
BEGIN
    INSERT INTO TBL_CUENTAS
    (CODIGO_CUENTA, CODIGO_ADMINISTRADOR, CODIGO_PLAN, CORREO, CONTRASENIA, NUMERO_TARJETA, CODIGO_TARJETA, FECHA_VALIDEZ) 
    VALUES
    (in_codigo_cuenta, in_codigo_administrador, in_codigo_plan, in_correo, in_password, in_num_tarjeta, in_codigo_tarjeta, in_fecha_validez);
END;

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
             in_urlimagen1 IN varchar2,
             in_urlimagen2 IN varchar2 
          )
IS
BEGIN
    INSERT INTO TBL_PELICULAS
    (CODIGO_PELICULA, CODIGO_VALORACION, CODIGO_CLASIFICACION, CODIGO_ADMINISTRADOR, NOMBRE_PELICULA, RESENIA, ANIO_ESTRENO, VISUALIZACIONES, URL_VIDEO, URL_IMAGEN1, URL_IMAGEN2)
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
        in_urlimagen1,
        in_urlimagen2
    );
END;

/*Procedimiento almacenado para crear perfiles*/
CREATE OR REPLACE PROCEDURE 
crear_perfil(in_codigo_perfil integer, in_codigo_idioma integer, in_codigo_cuenta integer, in_nombre_perfil varchar )
IS
BEGIN
    INSERT INTO TBL_PERFILES
    (CODIGO_PERFIL, CODIGO_IDIOMA, CODIGO_CUENTA, NOMBRE_PERFIL)
    VALUES
    (in_codigo_perfil, in_codigo_idioma, in_codigo_cuenta, in_nombre_perfil);
END;

/*Creacion SEQUENCE*/

/*SEQUENCE CUENTAS*/
CREATE SEQUENCE cuentas_seq
 START WITH     1
 INCREMENT BY   1;
 
  

/*SEQUENCE PELICULAS*/
CREATE SEQUENCE peliculas_seq
 START WITH     1
 INCREMENT BY   1;
 

 /*SEQUENCE ADMINISTRADOR*/
CREATE SEQUENCE administrador_seq
 START WITH     1
 INCREMENT BY   1;
 
 /*SEQUENCE PERFILES*/
CREATE SEQUENCE perfiles_seq
 START WITH     1
 INCREMENT BY   1;
  

/*############### - ELIMINACIONES - #########################*/

DROP PROCEDURE Registro_Usuarios;
DROP PROCEDURE LOGIN;
DROP PROCEDURE UPLOAD_PELI;
DROP PROCEDURE NUEVO_ADMINISTRADOR;

/*SEQUENCES*/

/*SEQUENCE CUENTAS*/
DROP SEQUENCE cuentas_seq; 

/*SEQUENCE PELICULAS*/
 DROP SEQUENCE peliculas_seq; 
 
 /*SEQUENCE PERFILES*/
  DROP SEQUENCE perfiles_seq;
 
SELECT A.CORREO,
       A.NUMERO_TARJETA,
       B.NOMBRE_PLAN
FROM TBL_CUENTAS A
INNER JOIN TBL_PLANES B
ON A.CODIGO_PLAN = B.CODIGO_PLAN;


