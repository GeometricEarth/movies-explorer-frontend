import './NavTab.css';
import Button from '../Button/Button';

export default function NavTab() {
  return (
    <nav className="navtab">
      <a href="#about">
        <Button classList="navtab__button">О проекте</Button>
      </a>
      <a href="#tech">
        <Button classList="navtab__button">Технологии</Button>
      </a>
      <a href="#student">
        <Button classList="navtab__button">Студент</Button>
      </a>
    </nav>
  );
}
