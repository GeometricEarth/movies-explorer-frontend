import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ moviesList }) {
  return (
    <section className="movies-list">
      {!moviesList && <Preloader></Preloader>}

      {moviesList.map((moviesCard) => {
        return <MoviesCard movieCard={moviesCard}></MoviesCard>;
      })}
    </section>
  );
}

export default MoviesCardList;
