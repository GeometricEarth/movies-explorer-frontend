import './PageNotFound.css';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (

    <div className='page-not-found'>
      <div>
        <h1 className='page-not-found__code'>404</h1>
        <p className='page-not-found__description'>Страница не найдена</p>
      </div>
      <Link className='page-not-found__link'>Назад</Link>
    </div>
  )
}