import '../Movies/Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import { useState } from 'react';

export default function SavedMovies() {
  const [savedMovies, setSavedMovies] = useState([]);
  const handleDelete = (cardId) => {
    console.log(cardId);
  };
  // const sortedMovies = movies.filter((movie) => movie.isSaved);

  return (
    <main className="movies">
      <SearchForm></SearchForm>
      <MoviesCardList
        moviesList={savedMovies}
        isSavedMovies={true}
        onDelete={handleDelete}
      ></MoviesCardList>
    </main>
  );
}
