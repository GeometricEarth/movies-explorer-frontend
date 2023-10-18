import Button from '../Button/Button';
import LinkStyled from '../LinkStyled/LinkStyled';
import './Profile.css';
import { useState } from 'react';

function Profile({ user, onSave }) {
  const [isEditable, setEditable] = useState(false);
  const handleClickEdit = () => {
    setEditable(true);
    console.log('edit');
  };
  const handleClickSave = (evt, data) => {
    evt.preventDefault();
    setEditable(false);
    onSave(evt);
  };
  return (
    <div className="profile">
      <h1 className="profile__greeting">Привет, {user.name}</h1>
      <form name="profile" className="profile__form" onSubmit={handleClickSave}>
        <div className="profile__input-wrapper">
          <label className="profile__input-label" htmlFor="name">
            Имя
          </label>
          <input
            className="profile__input"
            placeholder="Имя"
            disabled={!isEditable}
            required
            name="name"
            value={user.name}
          />
        </div>
        <span className="profile__divider"></span>
        <div className="profile__input-wrapper">
          <label className="profile__input-label" htmlFor="name">
            Почта
          </label>
          <input
            className="profile__input"
            placeholder="E-mail"
            disabled={!isEditable}
            required
            type="email"
            value={user.email}
          />
        </div>
        {isEditable && (
          <Button type="submit" classList="profile__submit-button">
            Сохранить
          </Button>
        )}
      </form>
      {!isEditable && (
        <Button classList="profile__edit-button" onClick={handleClickEdit}>
          Редактировать
        </Button>
      )}
      <LinkStyled className="profile__logout">Выйти из аккаунта</LinkStyled>
    </div>
  );
}

export default Profile;
