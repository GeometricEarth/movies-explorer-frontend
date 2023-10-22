import '../Movies/Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import movies from '../../utils/mockData';

export default function SavedMovies() {
  const handleDelete = (cardId) => {
    console.log(cardId);
  };
  const sortedMovies = movies.filter(movie=>movie.isSaved);

  return (
    <>
      <div className="movies">
        <SearchForm></SearchForm>
        <MoviesCardList
          moviesList={sortedMovies}
          isSavedMovies={true}
          onDelete={handleDelete}
        ></MoviesCardList>
        {sortedMovies.length > 10 && (
          <button className="movies__more-button" type="button">
            Ещё
          </button>
        )}
      </div>
    </>
  );
}
