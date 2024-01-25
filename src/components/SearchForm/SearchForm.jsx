import './SearchForm.css';
import findButton from '../../images/find.svg';

function SearchForm() {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  }

  return (
    <form action="#" name='search' onSubmit={handleSubmit} className="search-form">
      <div className="search-form__wrapper">
        <input
          className="search-form__input"
          type="text"
          name="search-query"
          id="search-query"
          placeholder="Фильм"
        />
        <button type="submit" className="button search-form__find-button">
          <img src={findButton} alt="Кнопка найти" />
        </button>
      </div>
      <input
        className="search-form__filter"
        type="checkbox"
        name="shortsFilter"
        id="shortsFilter"
      />
      <label htmlFor="shortsFilter">Короткометражки</label>
    </form>
  );
}

export default SearchForm;
