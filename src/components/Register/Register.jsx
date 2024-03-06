import PageWithForm from '../PageWithForm/PageWithForm';
import Greeting from '../Greeting/Greeting';
import Form from '../Form/Form';
import { Link } from 'react-router-dom';
import { register } from '../../utils/auth';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function Register() {
  const { setCurrentUser, setAuthorized } = useContext(CurrentUserContext);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const formData = [
    { label: 'Имя', type: 'text', name: 'name', pattern: /^[A-Za-zА-Яа-я\s\-]+$/ },
    { label: 'E-mail', type: 'email', name: 'email', pattern: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/ },
    { label: 'Пароль', type: 'password', name: 'password', pattern: [] },
  ];

  const handleRegister = (userData) => {
    register(userData).then((user) => {
      const { name, email } = userData;
      setCurrentUser({ name, email });
      setAuthorized(true);
      navigate('/movies');
    }).catch((err) => {
      setErrorMessage(err);
      setAuthorized(false);
    })
  }
  return (
    <PageWithForm>
      <section>
        <Greeting>Добро пожаловать!</Greeting>
        <Form
          formFields={formData}
          formType="register"
          name="register"
          submitText="Зарегистрироваться"
          submitError={errorMessage}
          onSubmit={handleRegister}
        ></Form>
        <div className="redirect">
          <p className="redirect__text">Уже зарегистрированы?</p>
          <Link className="redirect__link" to="/signin">
            Войти
          </Link>
        </div>
      </section>
    </PageWithForm>
  );
}
