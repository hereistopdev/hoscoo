import React, { createContext, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { auth } from "../firebaseConfig"; // Import your Firebase auth instance
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// Create a Context
const AuthContext = createContext();

// Create a Provider component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const signIn = async (provider) => {
    setLoading(true);
    try {
      const result = await provider(auth);
      console.log(result);
      setUser(result.user);
      navigate("/dashboard");
    } catch (error) {
      console.error("Sign-in error:", error);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Sign-out error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Define PropTypes for the AuthProvider
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };
