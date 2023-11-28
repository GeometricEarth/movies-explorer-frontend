import './AboutProject.css';
import SectionTitle from '../SectionTitle/SectionTitle';

export default function AboutProject() {
  return (
    <section className="about" id="about">
      <SectionTitle>О проекте</SectionTitle>
      <div className="about__description">
        <div>
          <p className="about__caption">Дипломный проект включал 5 этапов</p>
          <p className="about__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div>
          <p className="about__caption">На выполнение диплома ушло 5 недель</p>
          <p className="about__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about__time-line">
        <p className="about__stage-duration about__stage-duration_color_green">
          1 неделя
        </p>
        <p className="about__stage-duration">4 недели</p>
        <p className="about__stage-name">Back-end</p>
        <p className="about__stage-name">Front-end</p>
      </div>
    </section>
  );
}
