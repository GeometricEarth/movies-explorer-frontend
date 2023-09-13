import './SearchForm.css';
import findButton from '../../images/find.svg';
import { useState } from 'react';

function SearchForm() {
  return (
    <div className="search-form">
      <div className="search-form__wrapper">
        <input
          className="search-form__input"
          type="text"
          name="search-query"
          id="search-query"
          placeholder="Фильм"
        />
        <button type="submit" className="search-form__find-button">
          <img src={findButton} alt="Кнопка найти" />
        </button>
      </div>
      <button type="button" className="search-form__thumb"></button>
      <label htmlFor="">Короткометражки</label>
    </div>
  );
}

export default SearchForm;
