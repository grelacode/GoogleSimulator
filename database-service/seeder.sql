CREATE DATABASE IF NOT EXISTS anywebdatabase;

USE anywebdatabase;

CREATE TABLE IF NOT EXISTS users(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	email VARCHAR(23) NOT NULL UNIQUE, 
	password VARCHAR(8) NOT NULL,
	date INT(11) NOT null (no descpiptivo)
);

CREATE TABLE IF NOT EXISTS links(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	linkname VARCHAR(20) NOT NULL,
	linkurl VARCHAR(200) NOT NULL,
	pin_id VARCHAR(3) REFERENCES pins(id)
	agregar fecha
);

CREATE TABLE IF NOT EXISTS pins(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,	
	pin VARCHAR(3) UNIQUE NOT NULL,
	user_id INT REFERENCES users(id),
	start_at TIME NOT NULL,
    end_at TIME NOT NULL
);

CREATE INDEX IF NOT EXISTS links_index ON links
(
    pin_id [ASC] [NULLS {LAST}],
);

INSERT INTO user( email, pass, date) VALUES ( "test@test", "password", UNIX_TIMESTAMP(NOW()));
INSERT INTO user( email, pass, date) VALUES ( "test1@test1", "password", UNIX_TIMESTAMP(NOW()));

INSERT INTO pins( user_id, pin, data) VALUES ( 1, "AAB", UNIX_TIMESTAMP(NOW()));
INSERT INTO pins( user_id, pin, data) VALUES ( 2, "RRW", UNIX_TIMESTAMP(NOW()));

INSERT INTO links( linkname, linkurl, pin_id) VALUES ( "Libros", "https://www.bbva.com/wp-content/uploads/2017/05/Economia-finanzas-Libros-BBVA.jpg", 1)
INSERT INTO links( linkname, linkurl, pin_id) VALUES ( "Perros", "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5d4b02e35bafe8138f3c986f/perro-corriendo-parrafo.jpg", 1)
INSERT INTO links( linkname, linkurl, pin_id) VALUES ( "Gatos", "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg", 2)
INSERT INTO links( linkname, linkurl, pin_id) VALUES ( "Autos", "https://www.trucks.com/wp-content/uploads/2019/11/id-space.jpg", 2)

