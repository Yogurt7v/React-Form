import { useRef } from "react";
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
      checkPassword: "",
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
    validate: (value) => {
      if (value === "") {
        return "Поле обязательно для заполнения";
      } else {
        return true;
      }
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
    validate: (value) => {
      if (value === "") {
        return "Поле обязательно для заполнения";
      } else {
        return true;
      }
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
      const password = document.getElementsByName("password")[0].value;
      if (value !== password && password !== "") {
        submitButtonRef.current.focus();
        return "Пароли не совпадают";
      } else {
        return true;
      }
    },
  };

  const submitButtonRef = useRef(null);

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
      <button
        ref={submitButtonRef}
        type="submit"
        disabled={!!emailError || !!passwordError || !!checkPasswordError}
      >
        Зарегистрироваться
      </button>
    </form>
  );
}
