import PageWithForm from '../PageWithForm/PageWithForm';
import Greeting from '../Greeting/Greeting';
import Form from '../Form/Form';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { authorize } from '../../utils/auth';

export default function Login() {
  const { setCurrentUser, setAuthorized } = useContext(CurrentUserContext);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const formData = [
    { label: 'E-mail', type: 'email', name: 'email' },
    { label: 'Пароль', type: 'password', name: 'password' },
  ];

  const handleLogIn = (userData) => {
    authorize(userData)
      .then(() => {
        setCurrentUser(userData);
        setAuthorized(true);
        navigate('/movies');
      })
      .catch((err) => {
        setErrorMessage(err);
        setAuthorized(false);
      });
  };

  return (
    <PageWithForm>
      <section>
        <Greeting>Рады видеть!</Greeting>
        <Form
          formFields={formData}
          formType="login"
          name="login"
          submitText="Войти"
          submitError={errorMessage}
          onSubmit={handleLogIn}
        ></Form>
        <div className="redirect">
          <p className="redirect__text">Ещё не зарегистрированы?</p>
          <Link className="redirect__link" to="/signup">
            Регистрация
          </Link>
        </div>
      </section>
    </PageWithForm>
  );
}
