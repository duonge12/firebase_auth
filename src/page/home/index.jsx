// src/components/Home.jsx
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../services/firebaseConfig";

export const Home=()=>{
  const userDisplayName = localStorage.getItem("displayName");
  const navigate = useNavigate();

  const handleLogout = async() => {
    try {
      await signOut(auth); 
      localStorage.removeItem('displayName')
      navigate("/login"); 
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <div>
      <h2>Welcome, {userDisplayName}!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;