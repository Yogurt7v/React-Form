import React, { useState } from "react";
import style from "./form.module.css";

const sendFormToConsole = (formData) => {
  console.log(formData);
};
export default function Form() {
  const [email, setEmail] = useState("");
  const [emailErorr, setEmailError] = useState(null);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);

  const [checkPassword, setCheckPassword] = useState("");

  const getState = () => {
    return {
      email,
      password,
      checkPassword,
    };
  };

  const onSubmit = (event) => {
    event.preventDefault();
    sendFormToConsole(getState());
  };

  return (
    <>
      <form>
        <label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="Check password"
            value={checkPassword}
            onChange={({ target }) => setCheckPassword(target.value)}
          />
        </label>

        <button onClick={onSubmit}>Зарегистрироваться</button>
      </form>
    </>
  );
}
