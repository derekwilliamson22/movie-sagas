/// TODO /// 

In general, we want to be able to see a movie, and edit its content, including it's genres.

Feature list

## Home Page
  [x] on page load, display ALL movies "GET_ALL_MOVIES" -> "SET_MOVIES"
  [x] onClick (movie poster) Link to /details view for THAT movie ("id")

## Details Page
  [x] show ALL details for a movie, including genre "GET_ALL_MOVIES" -> "SET_MOVIES"
  [ ] "BACK TO LIST" button returns user to "Home" page (Link!)

## ADD Movie Page
  [ ] CREATE a FORM that has:
    [ ] input for TITLE
    [ ] input for URL for Image
    [ ] input for DESCRIPTION
    [ ] input(s) for GENRE(S)
  [ ] ADD "CANCEL" BUTTON that Links to Home page (no saving, alert for leave before saving?)
  [ ] ADD "SAVE" button that SUBMITS changes to movie details "ADD_MOVIE" -> "SET_MOVIES"

## Make it nice
  [ ] Style Style Style
    [ ] Add a CARD component for Home Page
    [ ] Add a GRID component for the Display page
    [ ] Add comments/update README
  [x] Make 15+ commits/use feature branching

## STRETCH ZONE

  [ ] ADD EDIT PAGE/FUNCTIONALITY
  [ ] ADD "EDIT DETAILS" BUTTON that Links to /Edit page (should look like /details page)
    [ ] UPDATE TITLE "UPDATE_MOVIE" -> "SET_MOVIES"
    [ ] UPDATE DESCRIPTION "UPDATE_MOVIE" -> "SET_MOVIES"
    [ ] UPDATE TITLE "UPDATE_MOVIE" -> "SET_MOVIES"
  [ ] ADD CANCEL BUTTON that Links to Details page
  [ ] ADD SAVE BUTTON THAT SAVES CHANGES "UPDATE_MOVIE" -> "SET_MOVIES"
  [ ] Display current values of inputs in /edit page

  ## SUPER STRETCH MODE

  [ ] Display all genres on movie list page. Research array_agg to make this possible.
  [ ] Allow the user to select many genres
  [ ] Move sagas and reducers out of your index.js and into separate files (ideally in src/redux/reducers and
      src/redux/sagas folders).
  [ ] Allow the user to refresh the details or edit page. The url for the details page would be something like
      /details/1 for movie with id of 1. Research react router params.
  [ ] Allow the user to add a genre to a movie.
  [ ] Allow the user to remove a genre from a movie.
  [ ] Only display the top 10 movies, and allow the user to search for movie titles with a search bar on the
      home page (you can do this on the client side or the server side, server side is a bigger stretch, but good practice).
  [ ] Create an Admin page. Add a link from the Home page to the Admin page. The page should initially display
      a login form (an input for username and an input for password). When the user enters the correct username (camera) and password (action), the page should display a form to add genres to the database, and a list of all of the genres with an x to remove them from the database. Note: This isn't actually secure, but it's pretty fun, and really good practice.
    