import './NavTab.css';
import Button from '../Button/Button';

export default function NavTab() {
  return (
    <nav>
      <ul className="navtab">
        <li>
          <Button
            classList="navtab__button"
            onClick={() => (window.location.href = '#about')}
          >
            О проекте
          </Button>
        </li>
        <li>
          <Button
            classList="navtab__button"
            onClick={() => (window.location.href = '#tech')}
          >
            Технологии
          </Button>
        </li>
        <li>
          <Button
            classList="navtab__button"
            onClick={() => (window.location.href = '#student')}
          >
            Студент
          </Button>
        </li>
      </ul>
    </nav>
  );
}
