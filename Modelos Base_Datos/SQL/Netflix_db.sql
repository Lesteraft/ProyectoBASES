CREATE OR REPLACE PROCEDURE Registro_Usuarios(in_codigo_cuenta IN  integer, in_codigo_plan IN integer, in_correo IN VARCHAR2, in_password IN VARCHAR2, in_num_tarjeta IN number, in_codigo_tarjeta IN number, in_fecha_validez IN date)
IS
BEGIN
    INSERT INTO TBL_CUENTAS
    (CODIGO_CUENTA, CODIGO_PLAN, CORREO, CONTRASEÑA, NUMERO_TARJETA, CODIGO_TARJETA, FECHA_VALIDEZ) 
    VALUES
    (in_codigo_cuenta, in_codigo_plan, in_correo, in_password, in_num_tarjeta, in_codigo_tarjeta, in_fecha_validez);
END;

EXECUTE registro_usuarios(cuentas_seq.nextval, 1, 'oskr814@gmail.com', '123456', 123456789, 123, to_date('11/24', 'MM/YY'));
EXECUTE registro_usuarios(cuentas_seq.nextval,1,'oscar@gmail.com','asdf',123456789789,123,TO_DATE('11/12', 'MM/YY'));

CREATE SEQUENCE cuentas_seq
 START WITH     1
 INCREMENT BY   1;
 
 DROP SEQUENCE cuentas_seq;
 
 
 CREATE OR REPLACE PROCEDURE LOGIN
 AS
 BEGIN
    SELECT CORREO, CONTRASEÑA  FROM TBL_CUENTAS;
 END;
 
 ALTER TABLE TBL_PELICULAS
 ADD
 (
    URL_VIDEO VARCHAR2(200),
    URL_IMAGEN VARCHAR2(200)
);

CREATE OR REPLACE PROCEDURE 
UPLOAD_PELI(in_codigo_pelicula IN integer, in_codigo_valoracion IN integer, in_codigo_clasificacion IN integer, in_codigo_administrador IN integer, in_nombre_pelicula varchar2, in_resenia IN varchar2, in_anio_estreno IN date, in_visualizaciones IN number, in_urlvideo IN varchar2, in_urlimagen IN varchar2 )
IS
BEGIN
    INSERT INTO TBL_PELICULAS
    (CODIGO_PELICULA, CODIGO_VALORACION, CODIGO_CLASIFICACION, NOMBRE_PELICULA, RESENIA, ANIO_ESTRENO, VIZUALIZACIONES, URL_VIDEO, URL_IMAGEN)
    VALUES
    (in_codigo_pelicula, in_codigo_valoracion, in_codigo_clasificacion, in_codigo_administrador, in_nombre_pelicula, in_resenia, in_anio_estreno, in_visualizaciones, in_urlvideo, in_urlimagen );
END;

execute upload_peli(1, 1, 1, 1, 'Aquaman', 'Hola Mundo', to_date('11/12', 'MM/YY'), 0, 'URLVIDEO', 'URLIMAGEN');