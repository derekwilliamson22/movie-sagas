const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  console.log("What are my body and params?:", req.body, req.params);

  // pretty straightforward call to get ALL of the genres
  const getMoviesQueryString = `SELECT * FROM "genres" ORDER BY "id" ASC;`;

  pool.query(getMoviesQueryString)
  .then(result => {
    res.send(result.rows);
  })
  .catch(error => {
      console.log('Error getting genres', error);
      res.sendStatus(500);
    });
});


router.get('/details/:id', (req, res) => {
  console.log("What are my body and params?:", req.body, req.params.id);
  const movieId = req.params.id

  // using the junction table "movies_genres" this query
  // sends back the name of the genre associated with the id
  // that matches that of which movie is selected on the movie details page
  const getMoviesQueryString =
  `SELECT "genres"."name"
  FROM "movies"
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