import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useState } from 'react';

export default function Movies() {
  const [moviesList, setMoviesList] = useState([]);

  const handleSave = (cardId) => {
    console.log(cardId);
  };

  return (
    <main className="movies">
      <SearchForm></SearchForm>
      <MoviesCardList
        moviesList={moviesList}
        isSavedMovies={false}
        onSave={handleSave}
      ></MoviesCardList>
    </main >
  );
}
