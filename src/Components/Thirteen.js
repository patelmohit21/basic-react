import React, { useState } from "react";

export default function Thirteen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);

  const handleAuthentication = () => {
    if (isRegistered) {
      // Login
      if (isLoggedIn) {
        const user = users.find(
          (u) => u.email === email && u.password === password
        );
        if (user) {
          setIsLoggedIn(true);
        } else {
          alert("Login Failed Check your id&password");
        }
      }
    } else {
      // Register
      const newUsers = { email, password };
      setUsers([...users, newUsers]);
      localStorage.setItem("users", JSON.stringify([...users, newUsers]));
      setIsLoggedIn(true);
    }
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {email}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          {isRegistered ? "Login" : "Register"}
          <form>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleAuthentication}>
              {isRegistered ? "Register" : "Login"}
            </button>
          </form>
          <p>
            {isRegistered
              ? "Don't have an account? Register Now"
              : "Already have an account? Login Now"}
          </p>
          <button onClick={() => setIsRegistered(!isRegistered)}>
            {isRegistered ? "Register" : "Login"}
          </button>
        </div>
      )}
    </div>
  );
}
