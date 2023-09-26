import './Register.css';
import Greeting from '../Greeting/Greeting';
import Form from '../Form/Form';
import { Link } from 'react-router-dom';

export default function Register() {
  const formData = [
    { label: 'Имя', type: 'text', name: 'name' },
    { label: 'E-mail', type: 'email', name: 'email' },
    { label: 'Пароль', type: 'password', name: 'password' },
  ]
  return (
    <section className='register'>
      <Greeting>Добро пожаловать!</Greeting>
      <Form formData={formData} name='register'></Form>
      <div className='redirect'>
        <p className="redirect__text">Уже зарегистрированы?</p>
        <Link className="redirect__link" to="/signin">
          Войти
        </Link>
      </div>
    </section>
  )
}
