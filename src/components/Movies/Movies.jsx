import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import movies from '../../utils/mockData';

export default function Movies() {
  const handleSave = (cardId) => {
    console.log(cardId);
  };

  return (
    <main className="movies">
      <SearchForm></SearchForm>
      <MoviesCardList
        moviesList={movies}
        isSavedMovies={false}
        onSave={handleSave}
      ></MoviesCardList>
      {movies.length > 10 && (
        <button className="button movies__more-button" type="button">
          Ещё
        </button>
      )}
    </main>
  );
}
