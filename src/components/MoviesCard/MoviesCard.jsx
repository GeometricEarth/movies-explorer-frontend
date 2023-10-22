import './MoviesCard.css';

function MoviesCard({ movieCard, isSavedMovies, onSave, onDelete }) {
  const { image, title, duration, isSaved, movieId } = movieCard;
  return (
    <div className="movies-card">
      <img className="movies-card__image" src={image} alt={title} />
      {!isSavedMovies & !isSaved ? (
        <button
          className="movies-card__button movies-card__button_type_save"
          onClick={() => {
            onSave(movieId);
          }}
        >
          Сохранить
        </button>
      ) : (
        <></>
      )}
      {!isSavedMovies & isSaved ? (
        <button className="movies-card__button movies-card__button_type_saved"></button>
      ) : (
        <></>
      )}
      {isSavedMovies ? (
        <button
          className="movies-card__button movies-card__button_type_delete"
          onClick={() => {
            onDelete(movieId);
          }}
        ></button>
      ) : (
        <></>
      )}

      <div className="movies-card__description">
        <p className="movies-card__title">{title}</p>
        <span className="movies-card__duration">
          {parseInt(duration / 60) + 'ч ' + (duration % 60) + 'м'}
        </span>
      </div>
    </div>
  );
}

export default MoviesCard;
