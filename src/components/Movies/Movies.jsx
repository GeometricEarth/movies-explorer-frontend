import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import movies from '../../utils/mockData';

export default function Movies() {
  return (<>
    <div className='movies'>
      <SearchForm></SearchForm>
      <MoviesCardList moviesList={movies}></MoviesCardList>
    </div>
  </>
  )
}