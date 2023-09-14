import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

export default function Movies() {
  // const [isLoaded, setIsLoaded] = useState(true);
  const movies = [];
  return (<>
    <div className='movies'>
      <SearchForm></SearchForm>
      <MoviesCardList moviesList={movies}></MoviesCardList>
    </div>
  </>
  )
}