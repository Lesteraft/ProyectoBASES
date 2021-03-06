-- Generated by Oracle SQL Developer Data Modeler 18.3.0.268.1156
--   at:        2018-12-19 02:46:26 CST
--   site:      Oracle Database 11g
--   type:      Oracle Database 11g



CREATE TABLE tb_perfiles (
    codigo_perfil             INTEGER NOT NULL,
    codigo_idioma             INTEGER NOT NULL,
    codigo_lugar              INTEGER NOT NULL,
    codigo_cuenta             INTEGER NOT NULL,
    codigo_control_parental   INTEGER,
    nombre_perfil             VARCHAR2(200) NOT NULL,
    imagen                    VARCHAR2(200)
);

ALTER TABLE tb_perfiles ADD CONSTRAINT tb_perfil_pk PRIMARY KEY ( codigo_perfil );

CREATE TABLE tbl_actores (
    codigo_actor   INTEGER NOT NULL,
    nombre_actor   VARCHAR2(200) NOT NULL,
    nacimiento     DATE NOT NULL,
    nacionalidad   VARCHAR2(200)
);

ALTER TABLE tbl_actores ADD CONSTRAINT tbl_actores_pk PRIMARY KEY ( codigo_actor );

CREATE TABLE tbl_actores_x_pelicula (
    codigo_actor      INTEGER NOT NULL,
    codigo_pelicula   INTEGER NOT NULL,
    fecha             DATE NOT NULL
);

CREATE TABLE tbl_actores_x_serie (
    c�digo_serie   INTEGER NOT NULL,
    codigo_actor   INTEGER NOT NULL,
    fecha          DATE NOT NULL
);

ALTER TABLE tbl_actores_x_serie ADD CONSTRAINT tbl_actoresxepisodio_pk PRIMARY KEY ( c�digo_serie,
                                                                                     codigo_actor );

CREATE TABLE tbl_administradores (
    codigo_administrador   INTEGER NOT NULL
);

ALTER TABLE tbl_administradores ADD CONSTRAINT tbl_administradores_pk PRIMARY KEY ( codigo_administrador );

CREATE TABLE tbl_audios (
    codigo_pelicula      INTEGER NOT NULL,
    codigo_audio         INTEGER NOT NULL,
    codigo_idioma        INTEGER NOT NULL,
    nombre_audio         VARCHAR2(200) NOT NULL,
    ruta_archivo_audio   VARCHAR2(200) NOT NULL
);

ALTER TABLE tbl_audios ADD CONSTRAINT tbl_audios_pk PRIMARY KEY ( codigo_audio );

CREATE TABLE tbl_busquedas (
    codigo_busqueda        INTEGER NOT NULL,
    codigo_perfil          INTEGER NOT NULL,
    descripcion_busqueda   VARCHAR2(200) NOT NULL,
    fecha                  DATE NOT NULL
);

ALTER TABLE tbl_busquedas ADD CONSTRAINT tbl_busquedas_pk PRIMARY KEY ( codigo_busqueda );

CREATE TABLE tbl_clasificaciones (
    codigo_clasificacion   INTEGER NOT NULL,
    nombre_clasificacion   VARCHAR2(200)
);

ALTER TABLE tbl_clasificaciones ADD CONSTRAINT tbl_clasificaci�n_pk PRIMARY KEY ( codigo_clasificacion );

CREATE TABLE tbl_clasificaciones_x_edad (
    codigo_clasificacion   INTEGER NOT NULL,
    nombre_clasificacion   VARCHAR2(200) NOT NULL
);

ALTER TABLE tbl_clasificaciones_x_edad ADD CONSTRAINT tbl_clasificacion_pk PRIMARY KEY ( codigo_clasificacion );

CREATE TABLE tbl_codigos_promocionales (
    codigo_promocional   INTEGER NOT NULL,
    nombre_promocion     VARCHAR2(200) NOT NULL,
    fecha_inicio         DATE NOT NULL,
    fecha_fin            DATE NOT NULL
);

ALTER TABLE tbl_codigos_promocionales ADD CONSTRAINT tbl_codigos_promocionales_pk PRIMARY KEY ( codigo_promocional );

CREATE TABLE tbl_configuraciones (
    codigo_configuracion   INTEGER NOT NULL,
    codigo_perfil          INTEGER NOT NULL,
    nombre_configuracion   VARCHAR2(200) NOT NULL,
    fecha                  DATE NOT NULL
);

ALTER TABLE tbl_configuraciones ADD CONSTRAINT tbl_configuraciones_pk PRIMARY KEY ( codigo_configuracion );

CREATE TABLE tbl_controles_parentales (
    codigo_control_parental   INTEGER NOT NULL,
    nombre_control_parental   VARCHAR2(200) NOT NULL,
    codigo_cuenta             INTEGER NOT NULL
);

ALTER TABLE tbl_controles_parentales ADD CONSTRAINT tbl_controles_parentales_pk PRIMARY KEY ( codigo_control_parental );

CREATE TABLE tbl_cuentas (
    codigo_cuenta          INTEGER NOT NULL,
    codigo_administrador   INTEGER,
    codigo_plan            INTEGER NOT NULL,
    correo                 VARCHAR2(200) NOT NULL,
    contrasenia            VARCHAR2(200),
    numero_tarjeta         NUMBER NOT NULL,
    codigo_tarjeta         NUMBER NOT NULL,
    fecha_validez          DATE NOT NULL
);

ALTER TABLE tbl_cuentas ADD CONSTRAINT tbl_cuenta_pk PRIMARY KEY ( codigo_cuenta );

CREATE TABLE tbl_descargas (
    codigo_perfil        INTEGER NOT NULL,
    codigo_dispositivo   INTEGER NOT NULL,
    fecha                INTEGER NOT NULL
);

ALTER TABLE tbl_descargas ADD CONSTRAINT tbl_descargas_pk PRIMARY KEY ( fecha );

ALTER TABLE tbl_descargas ADD CONSTRAINT tbl_descargas__un UNIQUE ( codigo_perfil,
                                                                    codigo_dispositivo );

CREATE TABLE tbl_directores (
    codigo_director   INTEGER NOT NULL,
    nombre_director   VARCHAR2(200) NOT NULL,
    nacimiento        DATE NOT NULL
);

ALTER TABLE tbl_directores ADD CONSTRAINT tbl_director_pk PRIMARY KEY ( codigo_director );

CREATE TABLE tbl_directores_x_pelicula (
    codigo_director   INTEGER NOT NULL,
    fecha             DATE NOT NULL,
    codigo_pelicula   INTEGER NOT NULL
);

ALTER TABLE tbl_directores_x_pelicula ADD CONSTRAINT tbl_directores_x_pelicula_pk PRIMARY KEY ( codigo_director,
                                                                                                codigo_pelicula );

CREATE TABLE tbl_directores_x_serie (
    c�digo_serie      INTEGER NOT NULL,
    codigo_director   INTEGER NOT NULL,
    fecha             DATE NOT NULL
);

ALTER TABLE tbl_directores_x_serie ADD CONSTRAINT tbl_directores_x_serie_pk PRIMARY KEY ( codigo_director,
                                                                                          c�digo_serie );

CREATE TABLE tbl_dispositivos (
    codigo_dispositivo   INTEGER NOT NULL,
    codigo_plataforma    INTEGER NOT NULL,
    marca                VARCHAR2(200) NOT NULL,
    modelo               VARCHAR2(200) NOT NULL
);

ALTER TABLE tbl_dispositivos ADD CONSTRAINT tbl_dispositivos_pk PRIMARY KEY ( codigo_dispositivo );

ALTER TABLE tbl_dispositivos ADD CONSTRAINT tbl_dispositivos__un UNIQUE ( codigo_plataforma );

CREATE TABLE tbl_episodios (
    codigo_episodio    INTEGER NOT NULL,
    cadigo_temporada   INTEGER NOT NULL,
    nombre_episodio    VARCHAR2(200) NOT NULL,
    duracion           DATE NOT NULL,
    visualizaciones    INTEGER NOT NULL
);

ALTER TABLE tbl_episodios ADD CONSTRAINT tbl_episodios_pk PRIMARY KEY ( codigo_episodio );

CREATE TABLE tbl_estados_series (
    codigo_estado   INTEGER NOT NULL,
    nombre_estado   VARCHAR2(200) NOT NULL
);

ALTER TABLE tbl_estados_series ADD CONSTRAINT tbl_estados_series_pk PRIMARY KEY ( codigo_estado );

CREATE TABLE tbl_generos_cine (
    codigo_genero   INTEGER NOT NULL,
    nombre_genero   VARCHAR2(200) NOT NULL
);

ALTER TABLE tbl_generos_cine ADD CONSTRAINT tbl_generos_pk PRIMARY KEY ( codigo_genero );

CREATE TABLE tbl_generos_x_peliculas (
    tbl_peliculas_codigo_pelicula    INTEGER NOT NULL,
    tbl_generos_cine_codigo_genero   INTEGER NOT NULL
);

CREATE TABLE tbl_generos_x_series (
    tbl_generos_cine_codigo_genero   INTEGER NOT NULL,
    tbl_series_c�digo_serie          INTEGER NOT NULL
);

CREATE TABLE tbl_guionistas (
    codigo_guionista   INTEGER NOT NULL,
    nombre_guionista   VARCHAR2(200) NOT NULL,
    nacimiento         DATE,
    residencia         VARCHAR2(200) NOT NULL
);

ALTER TABLE tbl_guionistas ADD CONSTRAINT tbl_guionistas_pk PRIMARY KEY ( codigo_guionista );

CREATE TABLE tbl_guionistas_x_pelicula (
    codigo_guionista   INTEGER NOT NULL,
    codigo_pelicula    INTEGER NOT NULL,
    fecha              DATE NOT NULL
);

ALTER TABLE tbl_guionistas_x_pelicula ADD CONSTRAINT tbl_guionistas_x_pelicula_pk PRIMARY KEY ( codigo_guionista,
                                                                                                codigo_pelicula );

CREATE TABLE tbl_guionistas_x_serie (
    c�digo_serie       INTEGER NOT NULL,
    codigo_guionista   INTEGER NOT NULL,
    fecha              DATE NOT NULL
);

ALTER TABLE tbl_guionistas_x_serie ADD CONSTRAINT tbl_guionistas_x_episodio_pk PRIMARY KEY ( codigo_guionista,
                                                                                             c�digo_serie );

CREATE TABLE tbl_idiomas (
    codigo_idioma   INTEGER NOT NULL,
    nombre_idioma   VARCHAR2(200)
);

ALTER TABLE tbl_idiomas ADD CONSTRAINT tbl_idioma_pk PRIMARY KEY ( codigo_idioma );

CREATE TABLE tbl_listas (
    codigo_perfil      INTEGER NOT NULL,
    codigo_pelicula    INTEGER,
    c�digo_serie       INTEGER,
    cadigo_temporada   INTEGER,
    fecha              DATE NOT NULL,
    codigo_lista       INTEGER NOT NULL
);

ALTER TABLE tbl_listas ADD CONSTRAINT tbl_lista_favoritos_pk PRIMARY KEY ( codigo_perfil );

CREATE TABLE tbl_notificaciones (
    codigo_notificacion       INTEGER NOT NULL,
    descripcion               VARCHAR2(200) NOT NULL,
    fecha                     DATE NOT NULL,
    tb_perfil_codigo_perfil   INTEGER NOT NULL
);

ALTER TABLE tbl_notificaciones ADD CONSTRAINT tbl_notificaciones_pk PRIMARY KEY ( codigo_notificacion );

CREATE TABLE tbl_pagos (
    codigo_cuenta        INTEGER NOT NULL,
    codigo_pago          INTEGER NOT NULL,
    codigo_promocional   INTEGER,
    fecha_pago           DATE NOT NULL,
    monto_pagado         NUMBER NOT NULL,
    estado_pago          CHAR(1) NOT NULL
);

ALTER TABLE tbl_pagos ADD CONSTRAINT tbl_pagos_pk PRIMARY KEY ( codigo_pago );

CREATE TABLE tbl_peliculas (
    codigo_pelicula        INTEGER NOT NULL,
    codigo_clasificacion   INTEGER NOT NULL,
    codigo_administrador   INTEGER NOT NULL,
    valoracion             INTEGER,
    nombre_pelicula        VARCHAR2(200) NOT NULL,
    resenia                VARCHAR2(250) NOT NULL,
    anio_estreno           DATE NOT NULL,
    visualizaciones        INTEGER NOT NULL,
    url_video              VARCHAR2(200) NOT NULL,
    url_imagen1            VARCHAR2(200) NOT NULL,
    url_imagen2            VARCHAR2(200) NOT NULL
);

ALTER TABLE tbl_peliculas ADD CONSTRAINT tbl_peliculas_pk PRIMARY KEY ( codigo_pelicula );

CREATE TABLE tbl_planes (
    codigo_plan          INTEGER NOT NULL,
    nombre_plan          VARCHAR2(200) NOT NULL,
    precio               INTEGER NOT NULL,
    cantidad_pantallas   INTEGER NOT NULL,
    calidad              VARCHAR2(200) NOT NULL
);

ALTER TABLE tbl_planes ADD CONSTRAINT tbl_planes_pk PRIMARY KEY ( codigo_plan );

CREATE TABLE tbl_plataformas (
    codigo_plataforma   INTEGER NOT NULL,
    nombre_plataforma   VARCHAR2(200) NOT NULL
);

ALTER TABLE tbl_plataformas ADD CONSTRAINT tbl_plataformas_pk PRIMARY KEY ( codigo_plataforma );

CREATE TABLE tbl_reacciones (
    codigo_reaccion   INTEGER NOT NULL,
    codigo_perfil     INTEGER NOT NULL,
    c�digo_serie      INTEGER,
    codigo_episodio   INTEGER,
    codigo_pelicula   INTEGER,
    nombre_reaccion   VARCHAR2(200) NOT NULL
);

ALTER TABLE tbl_reacciones ADD CONSTRAINT tbl_like_pk PRIMARY KEY ( codigo_reaccion );

CREATE TABLE tbl_regiones (
    codigo_lugar         INTEGER NOT NULL,
    codigo_lugar_padre   INTEGER,
    nombre_lugar         VARCHAR2(200) NOT NULL,
    latitud              VARCHAR2(200),
    longitud             VARCHAR2(200)
);

ALTER TABLE tbl_regiones ADD CONSTRAINT tbl_region_pk PRIMARY KEY ( codigo_lugar );

CREATE TABLE tbl_reproducciones (
    codigo_reproduccion    INTEGER NOT NULL,
    segundo_reproduccion   INTEGER NOT NULL,
    codigo_pelicula        INTEGER,
    codigo_perfil          INTEGER NOT NULL,
    codigo_episodio        INTEGER,
    fecha                  DATE NOT NULL
);

ALTER TABLE tbl_reproducciones ADD CONSTRAINT tbl_reproducciones_pk PRIMARY KEY ( codigo_reproduccion );

CREATE TABLE tbl_series (
    c�digo_serie           INTEGER NOT NULL,
    codigo_estado          INTEGER NOT NULL,
    codigo_administrador   INTEGER NOT NULL,
    nombre_serie           VARCHAR2(200) NOT NULL,
    numero_temporadas      INTEGER NOT NULL
);

ALTER TABLE tbl_series ADD CONSTRAINT series_pk PRIMARY KEY ( c�digo_serie );

CREATE TABLE tbl_subtitulos (
    codigo_pelicula          INTEGER NOT NULL,
    codigo_subtitulo         INTEGER NOT NULL,
    nombre_subtitulo         VARCHAR2(200) NOT NULL,
    ruta_archivo_subtitulo   VARCHAR2(200) NOT NULL
);

ALTER TABLE tbl_subtitulos ADD CONSTRAINT tbl_subtitulos_pk PRIMARY KEY ( codigo_subtitulo );

CREATE TABLE tbl_temporada (
    cadigo_temporada   INTEGER NOT NULL,
    c�digo_serie       INTEGER NOT NULL,
    numero_temporada   INTEGER NOT NULL,
    numero_episodios   INTEGER NOT NULL
);

ALTER TABLE tbl_temporada ADD CONSTRAINT tbl_temporada_pk PRIMARY KEY ( cadigo_temporada );

ALTER TABLE tbl_actores_x_serie
    ADD CONSTRAINT t_actors_x_epi_t_actors_fk FOREIGN KEY ( codigo_actor )
        REFERENCES tbl_actores ( codigo_actor );

ALTER TABLE tbl_actores_x_serie
    ADD CONSTRAINT t_actors_x_epi_t_series_fk FOREIGN KEY ( c�digo_serie )
        REFERENCES tbl_series ( c�digo_serie );

ALTER TABLE tbl_actores_x_pelicula
    ADD CONSTRAINT t_actors_x_peli_t_actors_fk FOREIGN KEY ( codigo_actor )
        REFERENCES tbl_actores ( codigo_actor );

ALTER TABLE tbl_actores_x_pelicula
    ADD CONSTRAINT t_actors_x_peli_t_peli_fk FOREIGN KEY ( codigo_pelicula )
        REFERENCES tbl_peliculas ( codigo_pelicula );

ALTER TABLE tbl_controles_parentales
    ADD CONSTRAINT t_co_parent_t_cuenta_fk FOREIGN KEY ( codigo_cuenta )
        REFERENCES tbl_cuentas ( codigo_cuenta );

ALTER TABLE tbl_configuraciones
    ADD CONSTRAINT t_config_t_perfil_fk FOREIGN KEY ( codigo_perfil )
        REFERENCES tb_perfiles ( codigo_perfil );

ALTER TABLE tbl_cuentas
    ADD CONSTRAINT t_cuenta_t_planes_fk FOREIGN KEY ( codigo_plan )
        REFERENCES tbl_planes ( codigo_plan );

ALTER TABLE tbl_cuentas
    ADD CONSTRAINT t_cuentas_t_admini_fk FOREIGN KEY ( codigo_administrador )
        REFERENCES tbl_administradores ( codigo_administrador );

ALTER TABLE tbl_dispositivos
    ADD CONSTRAINT t_devices_t_platform_fk FOREIGN KEY ( codigo_plataforma )
        REFERENCES tbl_plataformas ( codigo_plataforma );

ALTER TABLE tbl_directores_x_serie
    ADD CONSTRAINT t_direc_x_serie_t_direc_fk FOREIGN KEY ( codigo_director )
        REFERENCES tbl_directores ( codigo_director );

ALTER TABLE tbl_directores_x_serie
    ADD CONSTRAINT t_direc_x_serie_t_series_fk FOREIGN KEY ( c�digo_serie )
        REFERENCES tbl_series ( c�digo_serie );

ALTER TABLE tbl_directores_x_pelicula
    ADD CONSTRAINT t_direct_x_peli_t_direct_fk FOREIGN KEY ( codigo_director )
        REFERENCES tbl_directores ( codigo_director );

ALTER TABLE tbl_directores_x_pelicula
    ADD CONSTRAINT t_direct_x_peli_t_peli_fk FOREIGN KEY ( codigo_pelicula )
        REFERENCES tbl_peliculas ( codigo_pelicula );

ALTER TABLE tbl_descargas
    ADD CONSTRAINT t_downl_t_devices_fk FOREIGN KEY ( codigo_dispositivo )
        REFERENCES tbl_dispositivos ( codigo_dispositivo );

ALTER TABLE tbl_descargas
    ADD CONSTRAINT t_downl_t_perfil_fk FOREIGN KEY ( codigo_perfil )
        REFERENCES tb_perfiles ( codigo_perfil );

ALTER TABLE tbl_episodios
    ADD CONSTRAINT t_episo_t_tempora_fk FOREIGN KEY ( cadigo_temporada )
        REFERENCES tbl_temporada ( cadigo_temporada );

ALTER TABLE tbl_generos_x_peliculas
    ADD CONSTRAINT t_gen_x_peli_t_gen_cine_fk FOREIGN KEY ( tbl_generos_cine_codigo_genero )
        REFERENCES tbl_generos_cine ( codigo_genero );

ALTER TABLE tbl_generos_x_peliculas
    ADD CONSTRAINT t_gen_x_peli_t_peli_fk FOREIGN KEY ( tbl_peliculas_codigo_pelicula )
        REFERENCES tbl_peliculas ( codigo_pelicula );

ALTER TABLE tbl_generos_x_series
    ADD CONSTRAINT t_gen_x_peliv1_t_gen_cine_fk FOREIGN KEY ( tbl_generos_cine_codigo_genero )
        REFERENCES tbl_generos_cine ( codigo_genero );

ALTER TABLE tbl_generos_x_series
    ADD CONSTRAINT t_gen_x_peliv1_t_series_fk FOREIGN KEY ( tbl_series_c�digo_serie )
        REFERENCES tbl_series ( c�digo_serie );

ALTER TABLE tbl_guionistas_x_serie
    ADD CONSTRAINT t_guio_x_episo_series_fk FOREIGN KEY ( c�digo_serie )
        REFERENCES tbl_series ( c�digo_serie );

ALTER TABLE tbl_guionistas_x_serie
    ADD CONSTRAINT t_guio_x_episo_t_guio_fk FOREIGN KEY ( codigo_guionista )
        REFERENCES tbl_guionistas ( codigo_guionista );

ALTER TABLE tbl_guionistas_x_pelicula
    ADD CONSTRAINT t_guio_x_peli_t_guio_fk FOREIGN KEY ( codigo_guionista )
        REFERENCES tbl_guionistas ( codigo_guionista );

ALTER TABLE tbl_guionistas_x_pelicula
    ADD CONSTRAINT t_guio_x_peli_t_peli_fk FOREIGN KEY ( codigo_pelicula )
        REFERENCES tbl_peliculas ( codigo_pelicula );

ALTER TABLE tbl_listas
    ADD CONSTRAINT t_list_fav_t_peli_fk FOREIGN KEY ( codigo_pelicula )
        REFERENCES tbl_peliculas ( codigo_pelicula );

ALTER TABLE tbl_listas
    ADD CONSTRAINT t_list_fav_t_perfil_fk FOREIGN KEY ( codigo_perfil )
        REFERENCES tb_perfiles ( codigo_perfil );

ALTER TABLE tbl_listas
    ADD CONSTRAINT t_list_fav_t_series_fk FOREIGN KEY ( c�digo_serie )
        REFERENCES tbl_series ( c�digo_serie );

ALTER TABLE tbl_listas
    ADD CONSTRAINT t_list_fav_t_temp_fk FOREIGN KEY ( cadigo_temporada )
        REFERENCES tbl_temporada ( cadigo_temporada );

ALTER TABLE tbl_notificaciones
    ADD CONSTRAINT t_notifi_t_perfil_fk FOREIGN KEY ( tb_perfil_codigo_perfil )
        REFERENCES tb_perfiles ( codigo_perfil );

ALTER TABLE tbl_pagos
    ADD CONSTRAINT t_pagos_t_cod_promo_fk FOREIGN KEY ( codigo_promocional )
        REFERENCES tbl_codigos_promocionales ( codigo_promocional );

ALTER TABLE tbl_pagos
    ADD CONSTRAINT t_pagos_t_cuenta_fk FOREIGN KEY ( codigo_cuenta )
        REFERENCES tbl_cuentas ( codigo_cuenta );

ALTER TABLE tbl_peliculas
    ADD CONSTRAINT t_peli_t_admin_fk FOREIGN KEY ( codigo_administrador )
        REFERENCES tbl_administradores ( codigo_administrador );

ALTER TABLE tbl_peliculas
    ADD CONSTRAINT t_peli_t_clasifi_x_edad_fk FOREIGN KEY ( codigo_clasificacion )
        REFERENCES tbl_clasificaciones_x_edad ( codigo_clasificacion );

ALTER TABLE tb_perfiles
    ADD CONSTRAINT t_perfil_t_clasifi_fk FOREIGN KEY ( codigo_control_parental )
        REFERENCES tbl_controles_parentales ( codigo_control_parental );

ALTER TABLE tbl_reacciones
    ADD CONSTRAINT t_reaccion_t_episodios_fk FOREIGN KEY ( codigo_episodio )
        REFERENCES tbl_episodios ( codigo_episodio );

ALTER TABLE tbl_reacciones
    ADD CONSTRAINT t_reaccion_t_peliculas_fk FOREIGN KEY ( codigo_pelicula )
        REFERENCES tbl_peliculas ( codigo_pelicula );

ALTER TABLE tbl_reacciones
    ADD CONSTRAINT t_reaccion_t_perfil_fk FOREIGN KEY ( codigo_perfil )
        REFERENCES tb_perfiles ( codigo_perfil );

ALTER TABLE tbl_reacciones
    ADD CONSTRAINT t_reaccion_t_series_fk FOREIGN KEY ( c�digo_serie )
        REFERENCES tbl_series ( c�digo_serie );

ALTER TABLE tbl_regiones
    ADD CONSTRAINT t_regiones_t_regiones_fk FOREIGN KEY ( codigo_lugar_padre )
        REFERENCES tbl_regiones ( codigo_lugar );

ALTER TABLE tbl_reproducciones
    ADD CONSTRAINT t_repro_t_episo_fk FOREIGN KEY ( codigo_episodio )
        REFERENCES tbl_episodios ( codigo_episodio );

ALTER TABLE tbl_reproducciones
    ADD CONSTRAINT t_repro_t_perfil_fk FOREIGN KEY ( codigo_perfil )
        REFERENCES tb_perfiles ( codigo_perfil );

ALTER TABLE tbl_reproducciones
    ADD CONSTRAINT t_repro_tbl_peli_fk FOREIGN KEY ( codigo_pelicula )
        REFERENCES tbl_peliculas ( codigo_pelicula );

ALTER TABLE tbl_series
    ADD CONSTRAINT t_series_t_admin_fk FOREIGN KEY ( codigo_administrador )
        REFERENCES tbl_administradores ( codigo_administrador );

ALTER TABLE tbl_series
    ADD CONSTRAINT t_series_t_estados_series_fk FOREIGN KEY ( codigo_estado )
        REFERENCES tbl_estados_series ( codigo_estado );

ALTER TABLE tbl_subtitulos
    ADD CONSTRAINT t_subti_t_peli_fk FOREIGN KEY ( codigo_pelicula )
        REFERENCES tbl_peliculas ( codigo_pelicula );

ALTER TABLE tb_perfiles
    ADD CONSTRAINT tb_perfil_tbl_cuenta_fk FOREIGN KEY ( codigo_cuenta )
        REFERENCES tbl_cuentas ( codigo_cuenta );

ALTER TABLE tb_perfiles
    ADD CONSTRAINT tb_perfil_tbl_idioma_fk FOREIGN KEY ( codigo_idioma )
        REFERENCES tbl_idiomas ( codigo_idioma );

ALTER TABLE tb_perfiles
    ADD CONSTRAINT tb_perfil_tbl_region_fk FOREIGN KEY ( codigo_lugar )
        REFERENCES tbl_regiones ( codigo_lugar );

ALTER TABLE tbl_audios
    ADD CONSTRAINT tbl_audios_tbl_idioma_fk FOREIGN KEY ( codigo_idioma )
        REFERENCES tbl_idiomas ( codigo_idioma );

ALTER TABLE tbl_audios
    ADD CONSTRAINT tbl_audios_tbl_peliculas_fk FOREIGN KEY ( codigo_pelicula )
        REFERENCES tbl_peliculas ( codigo_pelicula );

ALTER TABLE tbl_busquedas
    ADD CONSTRAINT tbl_busquedas_tb_perfil_fk FOREIGN KEY ( codigo_perfil )
        REFERENCES tb_perfiles ( codigo_perfil );

ALTER TABLE tbl_temporada
    ADD CONSTRAINT tbl_tempo_series_fk FOREIGN KEY ( c�digo_serie )
        REFERENCES tbl_series ( c�digo_serie );

ALTER TABLE tbl_actores_x_serie
    ADD CONSTRAINT t_actors_x_epi_t_actors_fk FOREIGN KEY ( codigo_actor )
        REFERENCES tbl_actores ( codigo_actor );

ALTER TABLE tbl_actores_x_serie
    ADD CONSTRAINT t_actors_x_epi_t_series_fk FOREIGN KEY ( c�digo_serie )
        REFERENCES tbl_series ( c�digo_serie );

ALTER TABLE tbl_actores_x_pelicula
    ADD CONSTRAINT t_actors_x_peli_t_actors_fk FOREIGN KEY ( codigo_actor )
        REFERENCES tbl_actores ( codigo_actor );

ALTER TABLE tbl_actores_x_pelicula
    ADD CONSTRAINT t_actors_x_peli_t_peli_fk FOREIGN KEY ( codigo_pelicula )
        REFERENCES tbl_peliculas ( codigo_pelicula );

ALTER TABLE tbl_controles_parentales
    ADD CONSTRAINT t_co_parent_t_cuenta_fk FOREIGN KEY ( codigo_cuenta )
        REFERENCES tbl_cuentas ( codigo_cuenta );

ALTER TABLE tbl_configuraciones
    ADD CONSTRAINT t_config_t_perfil_fk FOREIGN KEY ( codigo_perfil )
        REFERENCES tb_perfiles ( codigo_perfil );

ALTER TABLE tbl_cuentas
    ADD CONSTRAINT t_cuenta_t_planes_fk FOREIGN KEY ( codigo_plan )
        REFERENCES tbl_planes ( codigo_plan );

ALTER TABLE tbl_cuentas
    ADD CONSTRAINT t_cuentas_t_admini_fk FOREIGN KEY ( codigo_administrador )
        REFERENCES tbl_administradores ( codigo_administrador );

ALTER TABLE tbl_dispositivos
    ADD CONSTRAINT t_devices_t_platform_fk FOREIGN KEY ( codigo_plataforma )
        REFERENCES tbl_plataformas ( codigo_plataforma );

ALTER TABLE tbl_directores_x_serie
    ADD CONSTRAINT t_direc_x_serie_t_direc_fk FOREIGN KEY ( codigo_director )
        REFERENCES tbl_directores ( codigo_director );

ALTER TABLE tbl_directores_x_serie
    ADD CONSTRAINT t_direc_x_serie_t_series_fk FOREIGN KEY ( c�digo_serie )
        REFERENCES tbl_series ( c�digo_serie );

ALTER TABLE tbl_directores_x_pelicula
    ADD CONSTRAINT t_direct_x_peli_t_direct_fk FOREIGN KEY ( codigo_director )
        REFERENCES tbl_directores ( codigo_director );

ALTER TABLE tbl_directores_x_pelicula
    ADD CONSTRAINT t_direct_x_peli_t_peli_fk FOREIGN KEY ( codigo_pelicula )
        REFERENCES tbl_peliculas ( codigo_pelicula );

ALTER TABLE tbl_descargas
    ADD CONSTRAINT t_downl_t_devices_fk FOREIGN KEY ( codigo_dispositivo )
        REFERENCES tbl_dispositivos ( codigo_dispositivo );

ALTER TABLE tbl_descargas
    ADD CONSTRAINT t_downl_t_perfil_fk FOREIGN KEY ( codigo_perfil )
        REFERENCES tb_perfiles ( codigo_perfil );

ALTER TABLE tbl_episodios
    ADD CONSTRAINT t_episo_t_tempora_fk FOREIGN KEY ( cadigo_temporada )
        REFERENCES tbl_temporada ( cadigo_temporada );

ALTER TABLE tbl_generos_x_peliculas
    ADD CONSTRAINT t_gen_x_peli_t_gen_cine_fk FOREIGN KEY ( tbl_generos_cine_codigo_genero )
        REFERENCES tbl_generos_cine ( codigo_genero );

ALTER TABLE tbl_generos_x_peliculas
    ADD CONSTRAINT t_gen_x_peli_t_peli_fk FOREIGN KEY ( tbl_peliculas_codigo_pelicula )
        REFERENCES tbl_peliculas ( codigo_pelicula );

ALTER TABLE tbl_generos_x_series
    ADD CONSTRAINT t_gen_x_peliv1_t_gen_cine_fk FOREIGN KEY ( tbl_generos_cine_codigo_genero )
        REFERENCES tbl_generos_cine ( codigo_genero );

ALTER TABLE tbl_generos_x_series
    ADD CONSTRAINT t_gen_x_peliv1_t_series_fk FOREIGN KEY ( tbl_series_c�digo_serie )
        REFERENCES tbl_series ( c�digo_serie );

ALTER TABLE tbl_guionistas_x_serie
    ADD CONSTRAINT t_guio_x_episo_series_fk FOREIGN KEY ( c�digo_serie )
        REFERENCES tbl_series ( c�digo_serie );

ALTER TABLE tbl_guionistas_x_serie
    ADD CONSTRAINT t_guio_x_episo_t_guio_fk FOREIGN KEY ( codigo_guionista )
        REFERENCES tbl_guionistas ( codigo_guionista );

ALTER TABLE tbl_guionistas_x_pelicula
    ADD CONSTRAINT t_guio_x_peli_t_guio_fk FOREIGN KEY ( codigo_guionista )
        REFERENCES tbl_guionistas ( codigo_guionista );

ALTER TABLE tbl_guionistas_x_pelicula
    ADD CONSTRAINT t_guio_x_peli_t_peli_fk FOREIGN KEY ( codigo_pelicula )
        REFERENCES tbl_peliculas ( codigo_pelicula );

ALTER TABLE tbl_listas
    ADD CONSTRAINT t_list_fav_t_peli_fk FOREIGN KEY ( codigo_pelicula )
        REFERENCES tbl_peliculas ( codigo_pelicula );

ALTER TABLE tbl_listas
    ADD CONSTRAINT t_list_fav_t_perfil_fk FOREIGN KEY ( codigo_perfil )
        REFERENCES tb_perfiles ( codigo_perfil );

ALTER TABLE tbl_listas
    ADD CONSTRAINT t_list_fav_t_series_fk FOREIGN KEY ( c�digo_serie )
        REFERENCES tbl_series ( c�digo_serie );

ALTER TABLE tbl_listas
    ADD CONSTRAINT t_list_fav_t_temp_fk FOREIGN KEY ( cadigo_temporada )
        REFERENCES tbl_temporada ( cadigo_temporada );

ALTER TABLE tbl_notificaciones
    ADD CONSTRAINT t_notifi_t_perfil_fk FOREIGN KEY ( tb_perfil_codigo_perfil )
        REFERENCES tb_perfiles ( codigo_perfil );

ALTER TABLE tbl_pagos
    ADD CONSTRAINT t_pagos_t_cod_promo_fk FOREIGN KEY ( codigo_promocional )
        REFERENCES tbl_codigos_promocionales ( codigo_promocional );

ALTER TABLE tbl_pagos
    ADD CONSTRAINT t_pagos_t_cuenta_fk FOREIGN KEY ( codigo_cuenta )
        REFERENCES tbl_cuentas ( codigo_cuenta );

ALTER TABLE tbl_peliculas
    ADD CONSTRAINT t_peli_t_admin_fk FOREIGN KEY ( codigo_administrador )
        REFERENCES tbl_administradores ( codigo_administrador );

ALTER TABLE tbl_peliculas
    ADD CONSTRAINT t_peli_t_clasifi_x_edad_fk FOREIGN KEY ( codigo_clasificacion )
        REFERENCES tbl_clasificaciones_x_edad ( codigo_clasificacion );

ALTER TABLE tb_perfiles
    ADD CONSTRAINT t_perfil_t_clasifi_fk FOREIGN KEY ( codigo_control_parental )
        REFERENCES tbl_controles_parentales ( codigo_control_parental );

ALTER TABLE tbl_reacciones
    ADD CONSTRAINT t_reaccion_t_episodios_fk FOREIGN KEY ( codigo_episodio )
        REFERENCES tbl_episodios ( codigo_episodio );

ALTER TABLE tbl_reacciones
    ADD CONSTRAINT t_reaccion_t_peliculas_fk FOREIGN KEY ( codigo_pelicula )
        REFERENCES tbl_peliculas ( codigo_pelicula );

ALTER TABLE tbl_reacciones
    ADD CONSTRAINT t_reaccion_t_perfil_fk FOREIGN KEY ( codigo_perfil )
        REFERENCES tb_perfiles ( codigo_perfil );

ALTER TABLE tbl_reacciones
    ADD CONSTRAINT t_reaccion_t_series_fk FOREIGN KEY ( c�digo_serie )
        REFERENCES tbl_series ( c�digo_serie );

ALTER TABLE tbl_regiones
    ADD CONSTRAINT t_regiones_t_regiones_fk FOREIGN KEY ( codigo_lugar_padre )
        REFERENCES tbl_regiones ( codigo_lugar );

ALTER TABLE tbl_reproducciones
    ADD CONSTRAINT t_repro_t_episo_fk FOREIGN KEY ( codigo_episodio )
        REFERENCES tbl_episodios ( codigo_episodio );

ALTER TABLE tbl_reproducciones
    ADD CONSTRAINT t_repro_t_perfil_fk FOREIGN KEY ( codigo_perfil )
        REFERENCES tb_perfiles ( codigo_perfil );

ALTER TABLE tbl_reproducciones
    ADD CONSTRAINT t_repro_tbl_peli_fk FOREIGN KEY ( codigo_pelicula )
        REFERENCES tbl_peliculas ( codigo_pelicula );

ALTER TABLE tbl_series
    ADD CONSTRAINT t_series_t_admin_fk FOREIGN KEY ( codigo_administrador )
        REFERENCES tbl_administradores ( codigo_administrador );

ALTER TABLE tbl_series
    ADD CONSTRAINT t_series_t_estados_series_fk FOREIGN KEY ( codigo_estado )
        REFERENCES tbl_estados_series ( codigo_estado );

ALTER TABLE tbl_subtitulos
    ADD CONSTRAINT t_subti_t_peli_fk FOREIGN KEY ( codigo_pelicula )
        REFERENCES tbl_peliculas ( codigo_pelicula );

ALTER TABLE tb_perfiles
    ADD CONSTRAINT tb_perfil_tbl_cuenta_fk FOREIGN KEY ( codigo_cuenta )
        REFERENCES tbl_cuentas ( codigo_cuenta );

ALTER TABLE tb_perfiles
    ADD CONSTRAINT tb_perfil_tbl_idioma_fk FOREIGN KEY ( codigo_idioma )
        REFERENCES tbl_idiomas ( codigo_idioma );

ALTER TABLE tb_perfiles
    ADD CONSTRAINT tb_perfil_tbl_region_fk FOREIGN KEY ( codigo_lugar )
        REFERENCES tbl_regiones ( codigo_lugar );

ALTER TABLE tbl_audios
    ADD CONSTRAINT tbl_audios_tbl_idioma_fk FOREIGN KEY ( codigo_idioma )
        REFERENCES tbl_idiomas ( codigo_idioma );

ALTER TABLE tbl_audios
    ADD CONSTRAINT tbl_audios_tbl_peliculas_fk FOREIGN KEY ( codigo_pelicula )
        REFERENCES tbl_peliculas ( codigo_pelicula );

ALTER TABLE tbl_busquedas
    ADD CONSTRAINT tbl_busquedas_tb_perfil_fk FOREIGN KEY ( codigo_perfil )
        REFERENCES tb_perfiles ( codigo_perfil );

ALTER TABLE tbl_temporada
    ADD CONSTRAINT tbl_tempo_series_fk FOREIGN KEY ( c�digo_serie )
        REFERENCES tbl_series ( c�digo_serie );



-- Oracle SQL Developer Data Modeler Summary Report: 
-- 
-- CREATE TABLE                            39
-- CREATE INDEX                             0
-- ALTER TABLE                            142
-- CREATE VIEW                              0
-- ALTER VIEW                               0
-- CREATE PACKAGE                           0
-- CREATE PACKAGE BODY                      0
-- CREATE PROCEDURE                         0
-- CREATE FUNCTION                          0
-- CREATE TRIGGER                           0
-- ALTER TRIGGER                            0
-- CREATE COLLECTION TYPE                   0
-- CREATE STRUCTURED TYPE                   0
-- CREATE STRUCTURED TYPE BODY              0
-- CREATE CLUSTER                           0
-- CREATE CONTEXT                           0
-- CREATE DATABASE                          0
-- CREATE DIMENSION                         0
-- CREATE DIRECTORY                         0
-- CREATE DISK GROUP                        0
-- CREATE ROLE                              0
-- CREATE ROLLBACK SEGMENT                  0
-- CREATE SEQUENCE                          0
-- CREATE MATERIALIZED VIEW                 0
-- CREATE MATERIALIZED VIEW LOG             0
-- CREATE SYNONYM                           0
-- CREATE TABLESPACE                        0
-- CREATE USER                              0
-- 
-- DROP TABLESPACE                          0
-- DROP DATABASE                            0
-- 
-- REDACTION POLICY                         0
-- 
-- ORDS DROP SCHEMA                         0
-- ORDS ENABLE SCHEMA                       0
-- ORDS ENABLE OBJECT                       0
-- 
-- ERRORS                                   0
-- WARNINGS                                 0
