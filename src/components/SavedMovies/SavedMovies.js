import '../Movies/Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import { useEffect, useState } from 'react';
import { getSavedMovies, deleteMovie } from '../../utils/MainApi';

export default function SavedMovies() {
  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [isShorts, setShorts] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setShorts(!!Number(localStorage.getItem('isShortsSaved')));
    getSavedMovies()
      .then((movies) => {
        setSavedMovies(movies);
        setFilteredList(movies);
      })
      .catch(console.log);
  }, []);

  const handleDelete = (id) => {
    deleteMovie(id)
      .then(() => {
        setSavedMovies((state) => {
          return state.filter((movie) => {
            return movie.movieId !== id;
          });
        });
        setFilteredList((state) => {
          return state.filter((movie) => {
            return movie.movieId !== id;
          });
        });
      })
      .catch(async (resp) => {
        try {
          if (resp instanceof TypeError) {
            const errMessage =
              'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
            console.error(errMessage);
            setError(errMessage);
            return;
          }
          const jsonBody = await resp.json();
          setError(jsonBody.message);
        } catch (error) {
          console.error(error);
        }
      });
  };

  const filtrateShorts = (list) => {
    return list.filter((movie) => movie.duration < 40);
  };

  const filtrateByName = (list, query) => {
    const loweredQuery = query.toLowerCase();
    return list.filter((movie) => {
      return (
        movie.nameRU.toLowerCase().includes(loweredQuery) ||
        movie.nameEN.toLowerCase().includes(loweredQuery)
      );
    });
  };

  const handleSetShorts = (value) => {
    localStorage.setItem('isShortsSaved', value ? 1 : 0);
    setShorts(value);
  };

  const handleSearch = (query) => {
    setFilteredList(filtrateByName(savedMovies, query));
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
        moviesList={isShorts ? filtrateShorts(filteredList) : filteredList}
        isSavedMovies={true}
        onDelete={handleDelete}
      ></MoviesCardList>
    </main>
  );
}
