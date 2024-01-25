import './Portfolio.css';

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links-list">
        <li className='portfolio__link-wrapper'>
          <a
            href="https://github.com/GeometricEarth/how-to-learn"
            target="_blank"
            rel="noopener noreferrer"
            className="link portfolio__link"
          >
            Статичный сайт
          </a>
        </li>
        <li className='portfolio__link-wrapper'>
          <a
            href="https://geometricearth.github.io/russian-travel/"
            target="_blank"
            rel="noopener noreferrer"
            className="link portfolio__link"
          >
            Адаптивный сайт
          </a>
        </li>
        <li className='portfolio__link-wrapper'>
          <a
            href="https://github.com/GeometricEarth/react-mesto-api-full-gha"
            target="_blank"
            rel="noopener noreferrer"
            className="link portfolio__link"
          >
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
}
