import React from "react";
// import SignUp from './SignUp';
import "../src/App.css";
const SignUp = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handlesubmit = () => {
    console.warn(name, email, password);
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="button" onClick={handlesubmit} placeholder="Password">
        SignUp
      </button>
    </div>
  );
};

export default SignUp;
