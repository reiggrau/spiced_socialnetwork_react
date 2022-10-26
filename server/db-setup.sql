DROP TABLE IF EXISTS codes;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL UNIQUE,
    password VARCHAR NOT NULL,
    picture VARCHAR,
    bio VARCHAR,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE codes (
    id SERIAL PRIMARY KEY,
    user_email VARCHAR NOT NULL REFERENCES users (email),
    code VARCHAR,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- CREATE TABLE characters (
--     id SERIAL PRIMARY KEY,
--     user_id VARCHAR NOT NULL UNIQUE REFERENCES users (id),
--     picture VARCHAR,
--     bio VARCHAR
-- );

