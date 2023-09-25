import './Register.css';
import Greeting from '../Greeting/Greeting';
import Form from '../Form/Form';
import { Link } from 'react-router-dom';

export default function Register() {
  const formData = [
    { lable: 'Имя', type: 'text' },
    { lable: 'E-mail', type: 'email' },
    { lable: 'Пароль', type: 'password' },
  ]
  return (
    <>
      <Greeting>Добро пожаловать!</Greeting>
      <Form formData={formData} name='regiser'></Form>
      <div className='redirect'>
        <p className="redirect__text">Уже зарегистрированы?</p>
        <Link className="redirect__link" to="/signin">
          Войти
        </Link>
      </div>
    </>
  )
}
