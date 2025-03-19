import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../services/firebaseConfig";

export const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null = loading, true/false = auth state
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true); // User is signed in
      } else {
        setIsAuthenticated(false); 
        navigate('/login')
      }
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, []);

  // While auth state is loading (null), show a loading indicator
  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  // Once auth state is determined, render children or redirect
  return isAuthenticated ? children : <span>Loading</span>;
};