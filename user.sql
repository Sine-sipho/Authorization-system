CREATE TABLE users (
	id SERIAL primary key,
	name TEXT NOT NULL,
	email TEXT UNIQUE NOT NULL,
	password VARCHAR(255) NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email, password)
VALUES ('sinesipho', 'siyakasinesipho@gmail.com', '@Sine1998')

SELECT *
FROM users;