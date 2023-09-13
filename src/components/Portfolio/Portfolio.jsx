import './Portfolio.css';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <Link className='portfolio__link'>Статичный сайт</Link>
      <Link className='portfolio__link'>Адаптивный сайт</Link>
      <Link className='portfolio__link'>Одностраничное приложение</Link>
    </section>
  )
}