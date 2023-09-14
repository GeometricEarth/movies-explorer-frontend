function MoviesCard({ image, title, duration, isSaved, movieId, onSave }) {
  return (
    <div className="movies-card">
      <img className="movies-card__image" src={image} alt={title} />
      <div className="movies-card__description">
        <p className="movies-card__title">{title}</p>
        <span className="movies-card__duration">{duration / 60 + 'часов'}</span>
      </div>
    </div>
  );
}

export default MoviesCard;