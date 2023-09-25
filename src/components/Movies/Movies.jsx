import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import movies from '../../utils/mockData';

export default function Movies() {
  return (<>
    <Header></Header>
    <div className='movies'>
      <SearchForm></SearchForm>
      <MoviesCardList moviesList={movies}></MoviesCardList>
    </div>
    <Footer></Footer>
  </>
  )
}