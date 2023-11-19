import './MoviesCardList.css';

import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ moviesList, isSavedMovies, onSave, onDelete }) {
  return (
    <div className="movies-list">
      {!moviesList && <Preloader></Preloader>}
      <div className="movies-list__card-wrapper">
        {moviesList &&
          moviesList.map((movieCard) => {
            return (
              <MoviesCard
                movieCard={movieCard}
                isSavedMovies={isSavedMovies}
                onSave={onSave}
                onDelete={onDelete}
                key={movieCard.movieId}
              ></MoviesCard>
            );
          })}
      </div>
    </div>
  );
}

export default MoviesCardList;
