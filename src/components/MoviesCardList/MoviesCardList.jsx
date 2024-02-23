import './MoviesCardList.css';
import { useEffect, useState } from 'react';

import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ moviesList, isSavedMovies, onSave, onDelete }) {
  const [displayedCards, setDisplayedCards] = useState([]);
  const [rowsCount, setRowsCount] = useState(4);

  useEffect(() => {
    const setupCardGrid = () => {
      const viewWidth = document.documentElement.clientWidth;
      let cardInRow = 3;

      console.log(viewWidth);

      if (viewWidth < 1280) {
        cardInRow = 2;
      }
      if (viewWidth < 690) {
        if (rowsCount < 5) {
          setRowsCount(5);
        }
        cardInRow = 1;
      }

      setDisplayedCards(moviesList.slice(0, cardInRow * rowsCount));
    };

    const handleResize = () => {
      setupCardGrid();
    };

    window.addEventListener('resize', handleResize);
    setupCardGrid();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [moviesList, rowsCount]);

  const handleMoreClick = () => {
    setRowsCount(rowsCount + 1);
  };

  return (
    <div className="movies-list">
      {!displayedCards && <Preloader></Preloader>}
      <div className="movies-list__card-wrapper">
        {displayedCards &&
          displayedCards.map((movieCard) => {
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
      {moviesList > displayedCards && <button
        className="button movies-list__more-button"
        type="button"
        onClick={handleMoreClick}
      >
        Ещё
      </button>}
    </div>
  );
}

export default MoviesCardList;
