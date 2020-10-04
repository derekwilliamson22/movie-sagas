const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  
  res.sendStatus(500)
});

router.get('/details/:id', (req, res) => {
  console.log("What are my body and params?:", req.body, req.params.id);
  const movieId = req.params.id
  const getMoviesQueryString =
  `SELECT "genres"."name" FROM "movies"
  JOIN "movies_genres"
  ON "movies_genres"."movies_id" = "movies"."id"
  JOIN "genres"
  ON "movies_genres"."genres_id" = "genres"."id"
  WHERE "movies"."id" = $1;`;
  pool.query(getMoviesQueryString, [movieId])
  .then(result => {
    console.log('what are result', result.rows);
    
    res.send(result.rows);
  })
  .catch(error => {
      console.log('Error getting movies', error);
      res.sendStatus(500);
    });
  });

module.exports = router;