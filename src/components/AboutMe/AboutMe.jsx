import './AboutMe.css';
import StudentFoto from '../../images/studentFoto.png'
import SectionTitle from '../SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

export default function AboutMe() {
  return (<section className='about-me'>
    <SectionTitle>Студент</SectionTitle>
    <div className='about-me__wraper'>
      <div>
        <h2 className='about-me__name'>Сергей</h2>
        <p className='about-me__ocupation'>Фронтенд-разработчик, 31 год</p>
        <p className='about-me__about'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
          и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
      </div>
      <img className='about-me_image' src={StudentFoto} alt="Фотография студента" />
    </div>
    <Link to='https://github.com/GeometricEarth' className='about-me__github-link'>Github</Link>
  </section>);
}
