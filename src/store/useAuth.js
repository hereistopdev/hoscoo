import { useContext } from "react";
import { AuthContext } from "./AuthContext"; // Adjust the import path as needed

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
