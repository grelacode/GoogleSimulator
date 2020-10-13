CREATE DATABASE IF NOT EXISTS googleSimulatorDB;

USE googleSimulatorDB;

CREATE TABLE IF NOT EXISTS Google_Users(
	user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	email VARCHAR(23) NOT NULL UNIQUE,
	password VARCHAR(8) NOT NULL,
	user_created_date INT(11) NOT NULL
);

CREATE TABLE IF NOT EXISTS Users_searches(
    search_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    search_keyword VARCHAR(200) NOT NULL,
    user_id INT FOREIGN KEY REFERENCES Google_Users(user_id)
    search_date INT(11) NOT NULL
);

CREATE INDEX IF NOT EXISTS id_user_index ON Google_Users(
    user_id
);

CREATE INDEX IF NOT EXISTS id_search_index ON Users_searches(
    search_id
);

INSERT INTO user(email, pass, date) VALUES ("test@test", "password", UNIX_TIMESTAMP(NOW()));
INSERT INTO user(email, pass, date) VALUES ("test1@test1", "password", UNIX_TIMESTAMP(NOW()));

INSERT INTO searches(search, user_id, date) VALUES ("dog", 1, UNIX_TIMESTAMP(NOW()) );
INSERT INTO searches(search, user_id, date) VALUES ("cat", 1, UNIX_TIMESTAMP(NOW()) );
INSERT INTO searches(search, user_id, date) VALUES ("car", 2, UNIX_TIMESTAMP(NOW()) );
INSERT INTO searches(search, user_id, date) VALUES ("water", 2, UNIX_TIMESTAMP(NOW()) );

