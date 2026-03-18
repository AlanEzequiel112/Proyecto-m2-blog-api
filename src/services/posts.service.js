const pool = require('../db');

// Obtener todos los posts
const getAllPosts = async () => {
  const result = await pool.query('SELECT * FROM posts ORDER BY id');
  return result.rows;
};

// Obtener post por ID
const getPostById = async (id) => {
  const result = await pool.query(
    'SELECT * FROM posts WHERE id = $1',
    [id]
  );
  return result.rows[0];
};

// Obtener posts por author
const getPostsByAuthor = async (authorId) => {
  const result = await pool.query(
    `SELECT p.*, a.name AS author_name, a.email
     FROM posts p
     JOIN authors a ON p.author_id = a.id
     WHERE p.author_id = $1`,
    [authorId]
  );

  return result.rows;
};

// Crear post
const createPost = async ({ author_id, title, content, published }) => {
  const result = await pool.query(
    `INSERT INTO posts (author_id, title, content, published)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [author_id, title, content, published ?? false]
  );

  return result.rows[0];
};

module.exports = {
  getAllPosts,
  getPostById,
  getPostsByAuthor,
  createPost,
};