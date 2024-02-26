import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import getMovies from '../../utils/MoviesApi';
import { useState, useEffect } from 'react';

export default function Movies() {
  const [moviesList, setMoviesList] = useState([]);
  const [isShorts, setShorts] = useState(false);
  const [filteredList, setFilteredList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isShorts) {
      const shorts = moviesList.filter((movie) => movie.duration < 40);
      setFilteredList(shorts);
      return;
    }
    setFilteredList(moviesList);
  }, [isShorts, moviesList]);

  const handleSave = (cardId) => {
    console.log(cardId);
  };

  const handleSearch = (searchQuery) => {
    getMovies(searchQuery)
      .then((data) => {
        if (!data) {
          throw new Error(
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
          );
        }
        const filteredFilms = data.filter((film) => {
          return film.nameRU.includes(searchQuery);
        });
        setMoviesList(filteredFilms);
      })
      .catch((err) => {
        // console.error(`ERR: ${err}`);
        setError(err);
      });
  };

  return (
    <main className="movies">
      <SearchForm
        isShorts={isShorts}
        setShorts={setShorts}
        onSubmit={handleSearch}
      ></SearchForm>
      <MoviesCardList
        moviesList={filteredList}
        isSavedMovies={false}
        onSave={handleSave}
      ></MoviesCardList>
    </main>
  );
}
