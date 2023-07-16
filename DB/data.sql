CREATE DATABASE db_insidenciasTecnicas;
USE db_insidenciasTecnicas;
CREATE TABLE
    areas(
        id BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
        nombre VARCHAR(255) NOT NULL
    );
CREATE TABLE hardware (
    id BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(25) NOT NULL,
    creado_por VARCHAR(255) NOT NULL,
    actualizado_por VARCHAR(255) NULL
);
CREATE TABLE software (
    id BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    nombre_programa VARCHAR(255) NOT NULL,
    creado_por VARCHAR(255) NOT NULL,
    actualizado_por VARCHAR(255) NULL
);
CREATE TABLE tipoInsidencias(
    id BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    tipo VARCHAR(255) NOT NULL
);
CREATE TABLE categorias (
    id BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    categoria ENUM('hardware', 'software') NOT NULL ,
    id_producto BIGINT(20) UNSIGNED NULL ,
    Foreign Key (id_producto) REFERENCES hardware(id) ON DELETE SET NULL,
    Foreign Key (id_producto) REFERENCES software(id) ON DELETE SET NULL
);
CREATE TABLE trainers (
    id BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    id_area BIGINT(20) UNSIGNED NOT NULL,
    email_personal VARCHAR(255) UNIQUE NULL,
    email_corporativo VARCHAR(255) UNIQUE NULL,
    telefono_movil VARCHAR(15) UNIQUE NULL,
    telefono_residencia VARCHAR(10) UNIQUE NULL,
    telefono_empresa VARCHAR(10) UNIQUE NULL,
    telefono_movil_empresarial VARCHAR(15) UNIQUE NULL,
    FOREIGN KEY (id_area) REFERENCES areas(id)
);
CREATE TABLE insidencias (
    id BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    id_categoria BIGINT(20) UNSIGNED NOT NULL,
    id_tipo_insidencia BIGINT(20) UNSIGNED NOT NULL,
    descripcion VARCHAR(255) NULL,
    fecha_reporte TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_area BIGINT(20) UNSIGNED NOT NULL,
    id_trainer BIGINT(20) UNSIGNED NOT NULL,
    FOREIGN KEY (id_categoria) REFERENCES categorias(id),
    FOREIGN KEY (id_tipo_insidencia) REFERENCES tipoInsidencias(id), 
    FOREIGN KEY (id_area) REFERENCES areas(id),
    FOREIGN KEY (id_trainer) REFERENCES trainers(id)
);  

