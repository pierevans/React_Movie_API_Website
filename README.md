# Movie App

A simple React movie application that uses the TMDB API to display popular movies, search for movies, and manage a list of favorite movies.

## Features

- View popular movies
- Search for movies by title
- Display movie posters
- Display movie titles
- Display movie release years
- Add movies to Favorites
- Remove movies from Favorites
- Save favorite movies using localStorage
- Navigate between Home and Favorites pages

## Technologies Used

- React
- React Router
- Context API
- TMDB API
- Tailwind CSS
- React Icons
- localStorage

## Main Pages

- Home
- Favorites

## How It Works

The app fetches movie data from the TMDB API. Popular movies are displayed on the Home page, and users can search for specific movies using the search bar.

Users can add movies to their Favorites list. Favorite movies are managed with React Context API and saved in localStorage so they remain available after the page is refreshed.