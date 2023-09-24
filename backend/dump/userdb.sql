create database usersdb;
use usersdb;
CREATE TABLE users(
auth0_id varchar(250),
username varchar(50),
email varchar(50),
PRIMARY KEY (auth0_id)
);
select* from users;

CREATE TABLE players(
player_id INT AUTO_INCREMENT,
auth0_id varchar(250),
username varchar(50),
imagen varchar(250),
puntuacion varchar(250),
PRIMARY KEY (player_id),
foreign key(auth0_id) references users(auth0_id)
);
select* from players;
drop table players;
DESCRIBE users;


