import './SearchForm.css';
import findButton from '../../images/find.svg';
import { useState } from 'react';

function SearchForm({ isShorts, setShorts, onSubmit, query }) {
  const storedSearchQuery = localStorage.getItem('searchQuery') || '';
  const [searchQuery, setSearchQuery] = useState(storedSearchQuery);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(searchQuery);
    onSubmit(searchQuery);
  };

  const handleCheckFilter = () => {
    setShorts(!isShorts);
  };

  const handleChange = (evt) => {
    setSearchQuery(evt.target.value);
  };

  return (
    <form
      action="#"
      name="search"
      onSubmit={handleSubmit}
      className="search-form"
    >
      <div className="search-form__wrapper">
        <input
          className="search-form__input"
          type="text"
          name="search"
          id="search"
          placeholder="Фильм"
          value={searchQuery}
          onChange={handleChange}
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
