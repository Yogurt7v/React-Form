
import  style from './form.module.css';
export default function Form() {
  return (
    <>
    <form>
      <label>
         <input type="text" placeholder="Email" />
      </label>
      <label>
         <input type="password" placeholder="Password" />
      </label>
      <label>
       <input type="password" placeholder="Check password" />
      </label>

      <button class={style.red} type="button">
        Зарегистрироваться
      </button>
    </form>

    </>
  );
}

