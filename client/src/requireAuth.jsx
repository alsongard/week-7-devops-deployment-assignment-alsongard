// requireAuth.js
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function requireAuth(ComposedComponent) {
  return function AuthenticatedRoute(props) {
    const isAuthenticated = useSelector(state => state.isLoggedIn);
    const navigate = useNavigate();

    useEffect(() => {
      if (!isAuthenticated) {
        navigate('/'); // Redirect to home if not authenticated
      }
    }, [isAuthenticated, navigate]);

    return isAuthenticated ? <ComposedComponent {...props} /> : null;
  };
}