import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useState, useEffect } from 'react';

export default function Movies() {
  const [moviesList, setMoviesList] = useState([]);
  const [isShorts, setShorts] = useState(false);
  const [filtredList, setFiltredList] = useState([]);

  useEffect(() => {
    if (isShorts) {
      const shorts = moviesList.filter((movie) => movie.duration < 40);
      setFiltredList(shorts);
      return
    }
    setFiltredList(moviesList);
  }, [isShorts]);

  const handleSave = (cardId) => {
    console.log(cardId);
  };

  const handleSearch = (searchQuery) => {
    fetch("https://api.nomoreparties.co/beatfilm-movies").then((resp) => {
      return resp.json()
    }).then((data) => {
      const filtredFilms = data.filter((film) => {
        return film.nameRU.includes(searchQuery)
      });
      setMoviesList(filtredFilms);
    })
  }

  return (
    <main className="movies">
      <SearchForm isShorts={isShorts} setShorts={setShorts} onSubmit={handleSearch}></SearchForm>
      <MoviesCardList
        moviesList={filtredList}
        isSavedMovies={false}
        onSave={handleSave}
      ></MoviesCardList>
    </main >
  );
}
