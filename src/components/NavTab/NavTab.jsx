import './NavTab.css';
import Button from '../Button/Button';

export default function NavTab() {
  return (
    <nav className='navtab'>
      <Button classList='navtab__button'>О проекте</Button>
      <Button classList='navtab__button'>Технологии</Button>
      <Button classList='navtab__button'>Студент</Button>
    </nav>
  );
}
