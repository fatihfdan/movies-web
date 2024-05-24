import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import "./signın.css";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signUp");
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setError(null);
        setIsLoggedIn(true);
        alert("You are logged in!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="sign-in">
      <div className="sign-in-container">
        {isLoggedIn ? (
          <p>You are logged in!</p>
        ) : (
          <form onSubmit={signIn}>
            <h1>Log In to your Account</h1>
            {error && <p className="error-message">{error}</p>}
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Log In</button>
          </form>
        )}
        <p style={{ color: "black" }}>
          Dont have an account?{" "}
          <div
            style={{ cursor: "pointer", color: "red" }}
            onClick={handleClick}
          >
            Sign Up
          </div>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
