import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({
  element: Component,
  isLoggedIn: isAuthorized,
  children,
  ...props
}) {
  return isAuthorized ? (
    <Component {...props} />
  ) : (
    <Navigate to="/signin" replace />
  );
}
