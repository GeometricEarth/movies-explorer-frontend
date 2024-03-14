import '../Movies/Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import { useEffect, useState } from 'react';
import { getSavedMovies } from '../../utils/MainApi';

export default function SavedMovies() {
  const [savedMovies, setSavedMovies] = useState([]);
  const [isShorts, setShorts] = useState(true);

  useEffect(() => {
    getSavedMovies()
      .then((movies) => {

        setSavedMovies(movies);
      })
      .catch(console.log);
  }, []);

  useEffect(() => {
    if (isShorts) {
      savedMovies.filter((movie) => movie.duration < 40);
    }
  }, [isShorts]);

  const handleDelete = (cardId) => {
    console.log(cardId);
  };

  return (
    <main className="movies">
      <SearchForm isShorts={isShorts} setShorts={setShorts}></SearchForm>
      <MoviesCardList
        moviesList={savedMovies}
        isSavedMovies={true}
        onDelete={handleDelete}
      ></MoviesCardList>
    </main>
  );
}
