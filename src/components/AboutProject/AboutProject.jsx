import './AboutProject.css';

export default function AboutProject() {
  return (
    <section className="about">
      <h2 className="about__title">О проекте</h2>
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
        <div className="about__stage-duration about__stage-duration_color_green">
          1 неделя
        </div>
        <div className="about__stage-duration">4 недели</div>
        <div className="about__stage-name">Back-end</div>
        <div className="about__stage-name">Front-end</div>
      </div>
    </section>
  );
}