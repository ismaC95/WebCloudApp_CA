import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function RedirectIfAuth({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? <Navigate to="/" replace /> : children;
}
