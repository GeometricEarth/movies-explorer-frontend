import './PageNotFound.css';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <main className='page-not-found'>
      <section>
        <h1 className='page-not-found__code'>404</h1>
        <p className='page-not-found__description'>Страница не найдена</p>
      </section>
      <Link className='page-not-found__link' to={-1}>Назад</Link>
    </main>
  )
}