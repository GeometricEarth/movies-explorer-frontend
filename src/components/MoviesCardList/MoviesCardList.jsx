import './MoviesCardList.css'

import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ moviesList }) {
  return (
    <section className="movies-list">
      {!moviesList && <Preloader></Preloader>}
      <div className='movies-list__card-wrapper'>
        {moviesList.map((moviesCard) => {
          return (
            <MoviesCard
              movieCard={(moviesCard)}
              key={moviesCard.movieId}
            ></MoviesCard>
          );
        })}
      </div>
      <button className='movies-list__more-button' type="button">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
