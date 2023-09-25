import './Footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <h2 className='footer__project-name'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className='footer__wraper'>
        <p className='footer__copyright'>© 2023</p>
        <ul className='footer__links-list'>
          <li className='footer__link'>Яндекс.Практикум</li>
          <li className='footer__link'>Github</li>
        </ul>
      </div>
    </footer>
  )
}