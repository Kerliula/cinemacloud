import { pool } from "../elysia/lib/db.ts";

// Create roles table
await pool.query(`
  CREATE TABLE IF NOT EXISTS roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`);

// Create users table
await pool.query(`
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE RESTRICT ON UPDATE CASCADE
  )
`);

// Create genres table
await pool.query(`
  CREATE TABLE IF NOT EXISTS genres (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`);

// Create movies table
await pool.query(`
  CREATE TABLE IF NOT EXISTS movies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    cover_image_url VARCHAR(2048),
    release_year YEAR,
    duration_mins INT,
    description TEXT,
    movie_url VARCHAR(2048),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`);

// Create movie_genres table
await pool.query(`
  CREATE TABLE IF NOT EXISTS movie_genres (
    movie_id INT NOT NULL,
    genre_id INT NOT NULL,
    PRIMARY KEY (movie_id, genre_id),
    CONSTRAINT fk_movie
      FOREIGN KEY (movie_id) REFERENCES movies(id)
      ON DELETE CASCADE,
    CONSTRAINT fk_genre
      FOREIGN KEY (genre_id) REFERENCES genres(id)
      ON DELETE CASCADE
  )
`);

// Create movie_scenes table
await pool.query(`
  CREATE TABLE IF NOT EXISTS movie_scenes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    movie_id INT NOT NULL,
    image_url VARCHAR(2048) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_scene_movie
      FOREIGN KEY (movie_id) REFERENCES movies(id)
      ON DELETE CASCADE
  )
`);

// Insert default roles
await pool.query(`
  INSERT INTO roles (name)
  VALUES ('user'), ('admin')
  ON DUPLICATE KEY UPDATE name = name;
`);

// Insert default genres
await pool.query(`
  INSERT INTO genres (name) VALUES
    ('Action'),
    ('Adventure'),
    ('Animation'),
    ('Biography'),
    ('Comedy'),
    ('Crime'),
    ('Documentary'),
    ('Drama'),
    ('Family'),
    ('Fantasy'),
    ('Film Noir'),
    ('History'),
    ('Horror'),
    ('Music'),
    ('Musical'),
    ('Mystery'),
    ('Romance'),
    ('Sci-Fi'),
    ('Sport'),
    ('Thriller'),
    ('War'),
    ('Western')
  ON DUPLICATE KEY UPDATE name = name
`);

process.exit();
