const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// router route to db to get all movies
router.get('/', (req, res) => {
  console.log("What are my body and params?:", req.body, req.params);

  // straightforward select ALL call for all 
  // the movies for initial movie library load
  const getMoviesQueryString =
  `SELECT * FROM "movies" ORDER BY "id" ASC;`;

  pool.query(getMoviesQueryString)
  .then(result => {
    res.send(result.rows);
  })
  .catch(error => {
      console.log('Error getting movies', error);
      res.sendStatus(500);
    });
  });

router.get('/details/:id', (req, res) => {
  console.log("What are my body and params?:", req.body, req.params.id);
  const movieId = req.params.id

  // this query gets the relevant movie info for
  // a single movie. the limit helps avoid duplicates
  // in the case of more than one genre 
  const getMoviesQueryString =
  `SELECT 
  "movies"."title", 
  "movies"."description", 
  "movies"."poster" 
  FROM "movies"
  JOIN "movies_genres"
  ON "movies_genres"."movies_id" = "movies"."id"
  JOIN "genres"
  ON "movies_genres"."genres_id" = "genres"."id"
  WHERE "movies"."id" = $1
  Limit 1;`;

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

router.post('/', (req, res) => {
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertMovieQuery = `
  INSERT INTO "movies" ("title", "poster", "description")
  VALUES ($1, $2, $3)
  RETURNING "id";`

  // FIRST QUERY MAKES MOVIE
  pool.query(insertMovieQuery, [req.body.title, req.body.poster, req.body.description])
  .then(result => {
    console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!
    
    const createdMovieId = result.rows[0].id

    // Depending on how you make your junction table, this insert COULD change.
    const insertMovieGenreQuery = `
      INSERT INTO "movies_genres" ("movies_id", "genres_id")
      VALUES  ($1, $2);
      `
      // SECOND QUERY MAKES GENRE FOR THAT NEW MOVIE
      pool.query(insertMovieGenreQuery, [createdMovieId, req.body.genre]).then(result => {
        //Now that both are done, send back success!
        res.sendStatus(201);
      }).catch(err => {
        // catch for second query
        console.log(err);
        res.sendStatus(500)
      })

// Catch for first query
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
})

module.exports = router;