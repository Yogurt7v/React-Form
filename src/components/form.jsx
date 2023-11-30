import React, { useState, useRef } from "react";
import style from "./form.module.css";

const sendFormToConsole = (formData) => {
  console.log(formData);
};
export default function Form() {
  const [email, setEmail] = useState("");
  let [emailErorr, setEmailError] = useState(null);

  const [password, setPassword] = useState("");
  let [passwordError, setPasswordError] = useState(null);

  const [checkPassword, setCheckPassword] = useState("");
  let [checkPasswordError, setCheckPasswordError] = useState(null);

  const submitButtonRef = useRef(null);

  const onEmailChange = ({ target }) => {
    setEmail(target.value);

    let newError = null;

    if (
      !/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g.test(target.value)
    ) {
      newError = "Допустимы только латинские буквы, @ и домен.";
    }
    setEmailError(newError);
  };

  const onEmailBlur = ({ target }) => {
    if (target.value.length < 5) {
      setEmailError(null);
    }
  };

  const onPasswordChange = ({ target }) => {
    setPassword(target.value);
    let newError = null;

    if (!/([a-zA-Z0-9._-])/g.test(target.value)) {
      newError = "Допустимы только латинские буквы и цифры.";
    } else if (target.value.length >= 30 || target.value.length < 8) {
      newError = "Пароль должен быть больше 8, но меньше 30 символов";
    }
    setPasswordError(newError);
  };

  const onPasswordBlur = ({ target }) => {
    if (target.value.length === 0) {
      setPasswordError(null);
    }
  };

  const onCheckPasswordChange = ({ target }) => {
    setCheckPassword(target.value);
    if (password !== target.value && password !== "" && target.value !== "") {
      setCheckPasswordError("Пароли не совпадают");
    } else {
      setCheckPasswordError(null);
    }

    if (target.value === password) {
      submitButtonRef.current.focus();
    }
  };

  const getState = () => {
    return {
      email,
      password,
    };
  };

  const onSubmit = (event) => {
    event.preventDefault();
    sendFormToConsole(getState());
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={onEmailChange}
            onBlur={onEmailBlur}
          />
          {emailErorr && <div className={style.errorLabel}>{emailErorr}</div>}
        </label>
        <label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={onPasswordChange}
            onBlur={onPasswordBlur}
          />
          {passwordError && (
            <div className={style.errorLabel}>{passwordError}</div>
          )}
        </label>
        <label>
          <input
            type="password"
            placeholder="Check password"
            value={checkPassword}
            onChange={onCheckPasswordChange}
          />
        </label>
        <div className={style.errorLabel}>{checkPasswordError}</div>

        <button
          onClick={onSubmit}
          ref={submitButtonRef}
          disabled={
            !!(
              emailErorr ||
              passwordError ||
              checkPasswordError ||
              !email ||
              !password ||
              !checkPassword
            )
          }
        >
          Зарегистрироваться
        </button>
      </form>
    </>
  );
}
