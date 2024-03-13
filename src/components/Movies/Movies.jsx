import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import getMovies from '../../utils/MoviesApi';
import { useState, useEffect } from 'react';
import { saveMovie, getSavedMovies, deleteMovie } from '../../utils/MainApi';

export default function Movies() {
  const [moviesList, setMoviesList] = useState([]);
  const [isShorts, setShorts] = useState(false);
  const [filteredList, setFilteredList] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const filmsList = JSON.parse(localStorage.getItem('filteredFilms'));
    setMoviesList(filmsList);
    setShorts(!!Number(localStorage.getItem('isShorts')));
  }, []);

  useEffect(() => {
    if (!moviesList || moviesList.length === 0) {
      return;
    }

    localStorage.setItem('filteredFilms', JSON.stringify(moviesList));
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
            cardInState.id === savedCard.movieId
              ? { ...cardInState, isSaved: true, movieId: savedCard._id }
              : cardInState,
          );
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
      let filteredFilms = foundMovies.filter((movie) => {
        return movie.nameRU.includes(query);
      });
      const savedMovies = await getSavedMovies();
      filteredFilms = filteredFilms.map((movie) => {
        const likedMovie = savedMovies.find((item) => {
          return item.movieId === movie.id;
        });
        if (!likedMovie) {
          return movie;
        }
        return { ...movie, isSaved: true, movieId: likedMovie._id };
      });

      setMoviesList(filteredFilms);
      if (filteredFilms.length === 0) {
        setError('Ничего не найдено');
      }

      localStorage.setItem('searchQuery', query);
    } catch (err) {
      setError(err.toString());
    }
  };

  const handleSetShorts = (value) => {
    localStorage.setItem('isShorts', value ? 1 : 0);
    setShorts(value);
  };

  const handleDelete = (id) => {
    deleteMovie(id)
      .then(() => {
        setMoviesList((state) => {
          return state.map((movie) => {
            if (movie.movieId !== id) {
              return movie;
            }
            movie.isSaved = false;
            movie.movieId = '';
            return movie;

          });
        });

        // setMoviesList((state) => {
        //   const newState = state.filter((movie) => {
        //     return movie.movieId !== id;
        //   });
        //   return newState;
        // });
      })
      .catch(console.log);
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
        onDelete={handleDelete}
      ></MoviesCardList>
    </main>
  );
}
