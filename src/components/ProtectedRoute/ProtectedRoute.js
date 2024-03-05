import { Navigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext } from 'react';

export default function ProtectedRoute({ renderElement }) {
  const { isAuthorized } = useContext(CurrentUserContext);
  return isAuthorized ? (
    <>{renderElement()}</>
  ) : (
    <Navigate to="/signin" replace />
  );
}
