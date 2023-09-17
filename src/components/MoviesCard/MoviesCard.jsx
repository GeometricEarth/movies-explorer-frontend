import './MoviesCard.css';
import saveIcon from '../../images/save-button_saved.svg';

function MoviesCard({ movieCard }) {
  const { image, title, duration, isSaved, movieId, onSave } = movieCard;
  return (
    <div className="movies-card">
      <img className="movies-card__image" src={image} alt={title} />
      {isSaved ? (
        <button className="movies-card__save-button movies-card__save-button_saved">
          <img src={saveIcon} alt="Отметка добавленного фильма" />
        </button>
      ) : (
        <button className="movies-card__save-button">Сохранить</button>
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
