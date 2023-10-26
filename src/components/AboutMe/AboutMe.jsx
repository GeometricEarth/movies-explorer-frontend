import './AboutMe.css';
import StudentFoto from '../../images/studentFoto.png';
import SectionTitle from '../SectionTitle/SectionTitle';
import Link from '../LinkStyled/LinkStyled';

export default function AboutMe() {
  return (
    <section className="about-me" id='student'>
      <SectionTitle>Студент</SectionTitle>
      <div className="about-me__wraper">
        <div className="about-me__column">
          <h2 className="about-me__name">Сергей</h2>
          <p className="about-me__ocupation">Фронтенд-разработчик, 31 год</p>
          <p className="about-me__about">
            Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет
            экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю
            слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить.
            С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;.
            После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься
            фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
          </p>
          <Link
            to="https://github.com/GeometricEarth"
            className="about-me__github-link"
          >
            Github
          </Link>
        </div>
        <img
          className="about-me_image"
          src={StudentFoto}
          alt="Фотография студента"
        />
      </div>
    </section>
  );
}
