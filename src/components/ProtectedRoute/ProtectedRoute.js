import { Navigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserData } from '../../utils/auth';

export default function ProtectedRoute({ renderElement, route }) {
  const { isAuthorized, setAuthorized, setCurrentUser } =
    useContext(CurrentUserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthorized) {
      getUserData()
        .then((user) => {
          setAuthorized(true);
          setCurrentUser(user);
          navigate(route);
        })
        .catch((err) => {
          setAuthorized(false);
          console.log(err);
          navigate('/signin');
        });
    }
    // eslint-disable-next-line
  }, []);
  return isAuthorized ? (
    <>{renderElement()}</>
  ) : (
    <Navigate to="/signin" replace />
  );
}
