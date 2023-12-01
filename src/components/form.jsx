// import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import style from "./form.module.css";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    default: {
      email: "",
      password: "",
      checkPassword: false,
    },
  });

  const emailProps = {
    minLength: {
      value: 6,
      message: "Минимальная длина 6 символов",
    },
    maxLength: {
      value: 30,
      message: "Максимальная длина 30 символов",
    },
    pattern: {
      value: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/,
      message: "Некорректная почта",
    },
  };

  const passwordProps = {
    minLength: {
      value: 8,
      message: "Минимальная длина 8 символов",
    },
    maxLength: {
      value: 30,
      message: "Максимальная длина 30 символов",
    },
  };

  const checkPasswordProps = {
    minLenght: {
      value: 8,
      message: "Минимальная длина 8 символов",
    },
    maxLenght: {
      value: 30,
      message: "Максимальная длина 30 символов",
    },
    validate: (value) => {
      let password = document.getElementsByName("password")[0].value;
      if (value !== password) {
        return "Пароли не совпадают";
      } else {
        return true;
      }
    },
  };

  const emailError = errors.email?.message;
  const passwordError = errors.password?.message;
  const checkPasswordError = errors.checkPassword?.message;

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input
          name="email"
          type="email"
          {...register("email", emailProps)}
          placeholder="Email"
        ></input>
        {emailError && <div className={style.errorLabel}>{emailError}</div>}
      </label>
      <label>
        <input
          name="password"
          type="password"
          {...register("password", passwordProps)}
          placeholder="Password"
        ></input>
        {passwordError && (
          <div className={style.errorLabel}>{passwordError}</div>
        )}
      </label>
      <label>
        <input
          name="checkPassword"
          type="password"
          {...register("checkPassword", checkPasswordProps)}
          placeholder="Check password"
        ></input>
        {checkPasswordError && (
          <div className={style.errorLabel}>{checkPasswordError}</div>
        )}
      </label>
      <button type="submit" disabled={!!emailError || !!passwordError}>
        Зарегистрироваться
      </button>
    </form>
  );
}

// import React, { useState, useRef } from "react";
// import style from "./form.module.css";

// const sendFormToConsole = (formData) => {
//   console.log(formData);
// };
// export default function Form() {
//   const [email, setEmail] = useState("");
//   let [emailErorr, setEmailError] = useState(null);

//   const [password, setPassword] = useState("");
//   let [passwordError, setPasswordError] = useState(null);

//   const [checkPassword, setCheckPassword] = useState("");
//   let [checkPasswordError, setCheckPasswordError] = useState(null);

//   const submitButtonRef = useRef(null);

//   const onEmailChange = ({ target }) => {
//     setEmail(target.value);

//     let newError = null;

//     if (
//       !/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g.test(target.value)
//     ) {
//       newError = "Допустимы только латинские буквы, @ и домен.";
//     }
//     setEmailError(newError);
//   };

//   const onEmailBlur = ({ target }) => {
//     if (target.value.length < 5) {
//       setEmailError(null);
//     }
//   };

//   const onPasswordChange = ({ target }) => {
//     setPassword(target.value);
//     let newError = null;

//     if (!/([a-zA-Z0-9._-])/g.test(target.value)) {
//       newError = "Допустимы только латинские буквы и цифры.";
//     } else if (target.value.length >= 30 || target.value.length < 8) {
//       newError = "Пароль должен быть больше 8, но меньше 30 символов";
//     }
//     setPasswordError(newError);
//   };

//   const onPasswordBlur = ({ target }) => {
//     if (target.value.length === 0) {
//       setPasswordError(null);
//     }
//   };

//   const onCheckPasswordChange = ({ target }) => {
//     setCheckPassword(target.value);
//     if (password !== target.value && password !== "" && target.value !== "") {
//       setCheckPasswordError("Пароли не совпадают");
//     } else {
//       setCheckPasswordError(null);
//     }

//     if (target.value === password) {
//       submitButtonRef.current.focus();
//     }
//   };

//   const getState = () => {
//     return {
//       email,
//       password,
//     };
//   };

//   const onSubmit = (event) => {
//     event.preventDefault();
//     sendFormToConsole(getState());
//   };

//   return (
//     <>
//       <form onSubmit={onSubmit}>
//         <label>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={onEmailChange}
//             onBlur={onEmailBlur}
//           />
//           {emailErorr && <div className={style.errorLabel}>{emailErorr}</div>}
//         </label>
//         <label>
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={onPasswordChange}
//             onBlur={onPasswordBlur}
//           />
//           {passwordError && (
//             <div className={style.errorLabel}>{passwordError}</div>
//           )}
//         </label>
//         <label>
//           <input
//             type="password"
//             placeholder="Check password"
//             value={checkPassword}
//             onChange={onCheckPasswordChange}
//           />
//         </label>
//         <div className={style.errorLabel}>{checkPasswordError}</div>

//         <button
//           onClick={onSubmit}
//           ref={submitButtonRef}
//           disabled={
//             !!(
//               emailErorr ||
//               passwordError ||
//               checkPasswordError ||
//               !email ||
//               !password ||
//               !checkPassword
//             )
//           }
//         >
//           Зарегистрироваться
//         </button>
//       </form>
//     </>
//   );
// }
