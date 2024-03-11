import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import getMovies from '../../utils/MoviesApi';
import { useState, useEffect } from 'react';
import { saveMovie, getSavedMovies } from '../../utils/MainApi';

export default function Movies() {
  const [moviesList, setMoviesList] = useState([]);
  const [isShorts, setShorts] = useState(false);
  const [filteredList, setFilteredList] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const filmsList = JSON.parse(localStorage.getItem('filteredFilms'));
    setMoviesList(filmsList || []);
    setShorts(!!Number(localStorage.getItem('isShorts')));
  }, []);

  useEffect(() => {
    if (isShorts) {
      const shorts = moviesList.filter((movie) => movie.duration < 40);
      setFilteredList(shorts);
      setError(shorts.length === 0 ? 'Ничего не найдено' : '');
      return;
    }
    setFilteredList(moviesList);
  }, [isShorts, moviesList]);

  const handleSave = (card) => {
    saveMovie(card)
      .then((savedCard) => {
        setMoviesList((state) => {
          const newState = state.map((cardInState) =>
            cardInState.id === card.id
              ? { ...cardInState, isSaved: true }
              : cardInState,
          );
          localStorage.setItem('filteredFilms', JSON.stringify(newState));
          return newState;
        });
      })
      .catch(console.log);
  };

  const handleSearch = async (query) => {
    try {
      setError('');
      setMoviesList([]);
      const foundMovies = await getMovies(query);

      if (!foundMovies) {
        setError(
          'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
        );
        return;
      }
      const filteredFilms = foundMovies.filter((movie) => {
        return movie.nameRU.includes(query);
      });
      const savedMovies = await getSavedMovies();
      filteredFilms.map((movie) => {
        savedMovies.includes();
      });
      console.log(savedMovies);

      setMoviesList(filteredFilms);
      if (filteredFilms.length === 0) {
        setError('Ничего не найдено');
      }

      localStorage.setItem('filteredFilms', JSON.stringify(filteredFilms));
      localStorage.setItem('searchQuery', query);
    } catch (err) {
      setError(err.toString());
    }
  };

  const handleSetShorts = (value) => {
    localStorage.setItem('isShorts', value ? 1 : 0);
    setShorts(value);
  };

  return (
    <main className="movies">
      <SearchForm
        isShorts={isShorts}
        setShorts={handleSetShorts}
        onSubmit={handleSearch}
      ></SearchForm>
      <div className="movies__message">{error}</div>
      <MoviesCardList
        moviesList={filteredList}
        isSavedMovies={false}
        onSave={handleSave}
      ></MoviesCardList>
    </main>
  );
}
