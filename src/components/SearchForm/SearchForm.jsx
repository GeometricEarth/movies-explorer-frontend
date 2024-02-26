import './SearchForm.css';
import findButton from '../../images/find.svg';

function SearchForm({ isShorts, setShorts, onSubmit }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(evt.target.search.value);
  }

  const handleCheckFilter = () => {
    setShorts(!isShorts);
  }

  return (
    <form action="#" name='search' onSubmit={handleSubmit} className="search-form">
      <div className="search-form__wrapper">
        <input
          className="search-form__input"
          type="text"
          name="search"
          id="search"
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
        checked={isShorts}
        onChange={handleCheckFilter}
      />
      <label htmlFor="shortsFilter">Короткометражки</label>
    </form>
  );
}

export default SearchForm;
