import './Profile.css';
import { useState } from 'react';
import Button from '../Button/Button';
import LinkStyled from '../LinkStyled/LinkStyled';
import Header from '../Header/Header';
import useForm from '../../hooks/useForm';

function Profile({
  user,
  onSave,
  submitError,
  isAuthorized,
  onOpenMobileMenu,
}) {
  const [isEditable, setEditable] = useState(false);

  const editDone = (data) => {
    setEditable(false);
    onSave(data);
  };
  const handleClickEdit = () => {
    resetForm();
    setEditable(true);
  };

  const {
    handleInputChange,
    handleSubmit,
    formData,
    errors,
    isValid,
    resetForm,
  } = useForm(user ?? {}, editDone);

  return (
    <>
      <Header
        isAuthorized={isAuthorized}
        onOpenMobileMenu={onOpenMobileMenu}
      ></Header>
      <main className="profile">
        <h1 className="profile__greeting">Привет, {user.name}!</h1>
        <form name="profile" className="profile__form" onSubmit={handleSubmit}>
          <div className="profile__input-wrapper">
            <label className="profile__input-label" htmlFor="name">
              Имя
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Имя"
              className="profile__input"
              disabled={!isEditable}
              required
              minLength={2}
              value={formData.name ?? ''}
              onChange={handleInputChange}
            />
          </div>
          <p
            className={
              'profile__input-error ' +
              (errors.name ? 'profile__input-error_visible' : '')
            }
          >
            {errors.name}
          </p>
          <span className="profile__divider"></span>
          <div className="profile__input-wrapper">
            <label className="profile__input-label" htmlFor="email">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="E-mail"
              className="profile__input"
              disabled={!isEditable}
              required
              minLength={3}
              value={formData.email ?? ''}
              onChange={handleInputChange}
            />
          </div>
          <p
            className={
              'profile__input-error ' +
              (errors.name ? 'profile__input-error_visible' : '')
            }
          >
            {errors.email}
          </p>

          {isEditable && (
            <>
              <p
                className={
                  'profile__submit-error ' +
                  (!submitError && 'profile__submit-error_hidden')
                }
              >
                {submitError}
              </p>
              <Button
                type="submit"
                classList={
                  'profile__submit-button ' +
                  (isValid ? '' : 'profile__submit-button_disabled')
                }
                disabled={!isValid}
              >
                Сохранить
              </Button>
            </>
          )}
        </form>
        {!isEditable && (
          <Button classList="profile__edit-button" onClick={handleClickEdit}>
            Редактировать
          </Button>
        )}
        <LinkStyled className="profile__logout" to="/signin">
          Выйти из аккаунта
        </LinkStyled>
      </main>
    </>
  );
}

export default Profile;
