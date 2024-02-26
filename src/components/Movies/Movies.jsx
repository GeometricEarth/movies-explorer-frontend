import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import getMovies from '../../utils/MoviesApi';
import { useState, useEffect } from 'react';

export default function Movies() {
  const [moviesList, setMoviesList] = useState([]);
  const [isShorts, setShorts] = useState(false);
  const [filteredList, setFilteredList] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    setShorts(!!(Number(localStorage.getItem('isShorts'))));
    console.log(localStorage.getItem('isShorts'));
  }, [])

  useEffect(() => {
    console.log(`s ${isShorts}`);
    localStorage.setItem('isShorts', isShorts ? 1 : 0);
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
          setError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
          return
        }
        const filteredFilms = data.filter((film) => {
          return film.nameRU.includes(searchQuery);
        });
        setMoviesList(filteredFilms);
        if (filteredFilms.length === 0) {
          return setError('Ничего не найдено');
        }
        setError('');
        localStorage.setItem('filteredFilms', JSON.stringify(filteredFilms));
        localStorage.setItem('searchQuery', searchQuery);
      })
      .catch((err) => {
        setError(err.toString());
      });
  };

  return (
    <main className="movies">
      <SearchForm
        isShorts={isShorts}
        setShorts={setShorts}
        onSubmit={handleSearch}
      ></SearchForm>
      <div className='movies__message'>{error}</div>
      <MoviesCardList
        moviesList={filteredList}
        isSavedMovies={false}
        onSave={handleSave}
      ></MoviesCardList>
    </main>
  );
}
