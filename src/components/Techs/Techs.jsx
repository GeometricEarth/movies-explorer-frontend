import './Techs.css';
import SectionTitle from '../SectionTitle/SectionTitle';

export default function Techs() {
  return (
    <section className="tech" id="tech">
      <SectionTitle classList="section-title__underline_color_black">
        Технологии
      </SectionTitle>
      <h3 className="tech__subtitle">7 технологий</h3>
      <p className="tech__text">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="tech__list">
        <li className="tech__list-item">HTML</li>
        <li className="tech__list-item">CSS</li>
        <li className="tech__list-item">JS</li>
        <li className="tech__list-item">React</li>
        <li className="tech__list-item">Git</li>
        <li className="tech__list-item">Express.js</li>
        <li className="tech__list-item">mongoDB</li>
      </ul>
    </section>
  );
}
