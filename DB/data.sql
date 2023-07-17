CREATE DATABASE db_insidenciasTecnicas;
USE db_insidenciasTecnicas;
CREATE TABLE
    areas(
        id BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
        nombre VARCHAR(255) NOT NULL
    );
CREATE TABLE
    tipoInsidencias(
        id BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
        tipo VARCHAR(255) NOT NULL
    );
CREATE TABLE
    trainers (
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
CREATE TABLE hardware (
    id BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(25) NOT NULL,
    creado_por BIGINT(20) UNSIGNED NOT NULL,
    actualizado_por BIGINT(20) UNSIGNED NULL,
    Foreign Key (creado_por ) REFERENCES trainers(id),
    Foreign Key (actualizado_por  ) REFERENCES trainers(id)
);
CREATE TABLE software (
    id BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    nombre_programa VARCHAR(255) NOT NULL,
    creado_por BIGINT(20) UNSIGNED NOT NULL ,
    actualizado_por BIGINT(20) UNSIGNED NULL ,
    Foreign Key (creado_por) REFERENCES trainers(id),
    Foreign Key (actualizado_por) REFERENCES trainers(id)
);

CREATE TABLE categorias (
    id BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    categoria ENUM('hardware', 'software') NOT NULL ,
    id_hardware BIGINT(20) UNSIGNED NULL ,
    id_software BIGINT(20) UNSIGNED NULL,
    Foreign Key (id_hardware ) REFERENCES hardware(id) ON DELETE SET NULL,
    Foreign Key (id_software ) REFERENCES software(id) ON DELETE SET NULL
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

INSERT INTO areas (nombre) VALUES
("Apolo"),
("Artemis"),
("Sputnik"),
("Skylab"),
("Corvus"),
("Endor");

INSERT INTO tipoinsidencias (tipo) VALUES
("Leve"),
("Moderada"),
("Crítica");

INSERT INTO trainers (nombre,id_area,email_personal,email_corporativo,telefono_movil) VALUES
('Johlver',1,'Johlver@gmail.com','JohlverCampus@gmail.com','12358'),
('Vermen',1,'Vermen@gmail.com','VermerCampus@gmail.com','11249'),
('Miguel',1,'Miguel@gmail.com','MiguelCampus@gmail.com','23458'),
('Carlos',1,'Carlos@gmail.com','CarlosCampus@gmail.com','85321'),
('Roy',1,'Roy@gmail.com','RoyCampus@gmail.com','43210');

INSERT INTO hardware (nombre,creado_por) VALUES
('Computadores',1),
('Teclados',3),
('Mouse',3),
('Diademas',1);

INSERT INTO software (nombre_programa,creado_por) VALUES
('Visual Studio',1),
('Discord',3),
('NodeJS',3),
('OBS Studio',3),
('MYSQL',1),
('NPM',3);

INSERT INTO categorias (categoria,id_hardware,id_software) VALUES
('hardware',1,NULL),
('software',NULL,1),
('hardware',2,NULL), 
('software',NULL,2),
('hardware',3,NULL),
('software',NULL,3),
('hardware',4,NULL),
('software',NULL,4),
('software',NULL,5),
('software',NULL,6); 

INSERT INTO insidencias (id_categoria,id_tipo_insidencia,descripcion,id_area,id_trainer) VALUES
(1, 1, 'Incidente menor en el PC', 1, 1),
(2, 3, 'Error crítico en el software', 2, 3),
(5, 2, 'Problema con mouse,la rueda no sirve', 3, 2),
(1, 2, 'El computador no enciende', 1, 1 );



