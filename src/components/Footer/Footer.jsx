import './Footer.css';
import LinkStyled from '../LinkStyled/LinkStyled'

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__project-name">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__wraper">
        <p className="footer__copyright">© 2023</p>
        <ul className="footer__links-list">
          <li>
            <LinkStyled className="footer__link" to="https://practicum.yandex.ru/" target="_blank">Яндекс.Практикум</LinkStyled>
          </li>
          <li>
            <LinkStyled className="footer__link" to="https://github.com/GeometricEarth" target="_blank">Github</LinkStyled>
          </li>
        </ul>
      </div>
    </footer>
  );
}
