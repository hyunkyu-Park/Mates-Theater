# Mates Theater Web Application
https://youtu.be/uD5d56NX0xI


## Introduction
Mates Theater is a web application that provides information about movies and reviews. It is developed using React and react-router-dom, with a user-friendly UI created using Bootstrap.

## Key Features

1. Main Page
<pre>
  • Upon accessing the "/" path, a list of movies is displayed.
  • A "Today's fortune: I know you are ready to travel" message appears for 2 seconds upon page loading.
</pre>

2. Movie List and Details
<pre>
  • At "/future", you can view a list of user's pinned movies.
  • "/future/:id" displays detailed information about a specific movie.
  • "/past" shows a list of past reviews.
  • "/search" takes you to a page where you can search for movies.
  • "/search/:id" shows detailed information about a specific searched movie.
</pre>

3. TMDB API Integration
<pre>
  • The movieapi.js file contains functions to fetch movie rankings and genre information using the TMDB API.
</pre>


## Note
An API key for TMDB API is required. Set your API key in the movieapi.js file in the apiKey variable.
