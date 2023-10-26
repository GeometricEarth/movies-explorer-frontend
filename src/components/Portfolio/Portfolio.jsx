import './Portfolio.css';
import Link from '../LinkStyled/LinkStyled';

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <a
        href="https://github.com/GeometricEarth/how-to-learn"
        target="_blank"
        rel="noopener noreferrer"
        className="portfolio__link"
      >
        Статичный сайт
      </a>
      <a
        href="https://geometricearth.github.io/russian-travel/"
        target="_blank"
        rel="noopener noreferrer"
        className="portfolio__link"
      >
        Адаптивный сайт
      </a>
      <a
        href="https://github.com/GeometricEarth/react-mesto-api-full-gha"
        target="_blank"
        rel="noopener noreferrer"
        className="portfolio__link"
      >
        Одностраничное приложение
      </a>
    </section>
  );
}
