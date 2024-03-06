import PageWithForm from '../PageWithForm/PageWithForm';
import Greeting from '../Greeting/Greeting';
import Form from '../Form/Form';
import { Link } from 'react-router-dom';
import { register } from '../../utils/auth';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useForm from '../../hooks/useForm';

export default function Register() {
  const { setCurrentUser, setAuthorized } = useContext(CurrentUserContext);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // const formData = [
  // { label: 'Имя', type: 'text', name: 'name', pattern: /^[A-Za-zА-Яа-я\s\-]+$/ },
  // { label: 'E-mail', type: 'email', name: 'email', pattern: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/ },
  // { label: 'Пароль', type: 'password', name: 'password', pattern: [] },
  // ];

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

  const { handleInputChange, handleSubmit, formData, errors, isValid } =
    useForm({ name: "", email: "" }, handleRegister);

  return (
    <PageWithForm>
      <section>
        <Greeting>Добро пожаловать!</Greeting>
        {/* <Form
          formFields={formData}
          formType="register"
          name="register"
          submitText="Зарегистрироваться"
          submitError={errorMessage}
          onSubmit={handleRegister}
        ></Form> */}
        <form
          onSubmit={handleSubmit}
          className="form"
          name="register"
        >
          <div className="field">
            <label className="field__label" htmlFor="name">
              Имя
            </label>
            <input
              className={
                'field__input ' + (!errors["name"] ? '' : 'field_input_error')
              }
              required
              type={"text"}
              pattern="^[A-Za-zА-Яа-я\s\-]+$"
              name={"name"}
              id={"name"}
              onChange={handleInputChange}
              value={formData["name"]}
            />
            <span className="field__error">{errors["name"] ? 'Имя может содежать только латиницу, кириллицу, пробел или дефис' : ''}</span>
          </div>
          <div className="field">
            <label className="field__label" htmlFor="email">
              E-mail
            </label>
            <input
              className={
                'field__input ' + (!errors["email"] ? '' : 'field_input_error')
              }
              required
              type={"email"}
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}"
              name={"email"}
              id={"email"}
              onChange={handleInputChange}
              value={formData["email"]}
            />
            <span className="field__error">{errors["email"]}</span>
          </div>

          <span className="form__error">{errorMessage}</span>
          <button
            className={
              "form__submit form__submit_type_register " +
              (isValid ? '' : 'form__submit_disabled')
            }
            type="submit"
            disabled={!isValid}
          >
            Зарегистрироваться
          </button>
        </form>

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
