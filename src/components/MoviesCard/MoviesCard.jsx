import './MoviesCard.css';

function MoviesCard({ movieCard, isSavedMovies, onSave, onDelete }) {
  const { image, nameRU, duration, isSaved, geoMovieId } = movieCard;
  return (
    <div className="movies-card">
      <img className="movies-card__image" src={image} alt={nameRU} />
      {!isSavedMovies & !isSaved ? (
        <button
          className="movies-card__button movies-card__button_type_save"
          onClick={() => {
            onSave(movieCard);
          }}
        >
          Сохранить
        </button>
      ) : (
        <></>
      )}
      {!isSavedMovies & isSaved ? (
        <button
          className="movies-card__button movies-card__button_type_saved"
          onClick={() => {
            onDelete(geoMovieId);
          }}></button>
      ) : (
        <></>
      )}
      {isSavedMovies ? (
        <button
          className="movies-card__button movies-card__button_type_delete"
          onClick={() => {
            onDelete(geoMovieId);
          }}
        ></button>
      ) : (
        <></>
      )}

      <div className="movies-card__description">
        <p className="movies-card__title">{nameRU}</p>
        <span className="movies-card__duration">
          {parseInt(duration / 60) + 'ч ' + (duration % 60) + 'м'}
        </span>
      </div>
    </div>
  );
}

export default MoviesCard;
