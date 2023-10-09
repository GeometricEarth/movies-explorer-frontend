import PageWithForm from '../PageWithForm/PageWithForm';
import Greeting from '../Greeting/Greeting';
import Form from '../Form/Form';
import { Link } from 'react-router-dom';

export default function Login() {
  const formData = [
    { label: 'E-mail', type: 'email', name: 'email' },
    { label: 'Пароль', type: 'password', name: 'password' },
  ];
  return (
    <PageWithForm>
      <Greeting>Рады видеть!</Greeting>
      <Form
        formData={formData}
        formType="login"
        name="login"
        submitText="Войти"
      ></Form>
      <div className="redirect">
        <p className="redirect__text">Ещё не зарегистрированы?</p>
        <Link className="redirect__link" to="/signup">
          Регистрация
        </Link>
      </div>
    </PageWithForm>
  );
}
