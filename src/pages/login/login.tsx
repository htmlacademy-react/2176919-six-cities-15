import { Helmet } from 'react-helmet-async';
import { useRef, FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../../utils/constants';
import { getAuthorizationStatus } from '../../store/selectors';
import { toast } from 'react-toastify';
import { getRandomArrayElement } from '../../utils/random-city';
import { cityArray } from '../../components/cities-list/cities-list';
import { setCity } from '../../store/slices/offers';

function Login (): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const auth = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const validatePassword = (password: string) => password.match(/^(?=.*[A-Za-z])(?=.*\d).+$/);
  const city = getRandomArrayElement(cityArray);

  useEffect(()=> {
    if (auth === AuthorizationStatus.Auth) {
      navigate(AppRoute.Root);
    }
  }, [auth, navigate]);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      if (!validatePassword(passwordRef.current.value)) {
        return toast.warning('Password not valid, should contain at least one digit and one character');
      }
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }));
    }
    if (auth === AuthorizationStatus.Auth) {
      navigate(AppRoute.Root);
    }
  };

  return (
    <main className="page__main page__main--login">
      <Helmet>
        <title>6 cities: authorization</title>
      </Helmet>
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input className="login__input form__input" ref={loginRef} type="email" name="email" id="email" placeholder="Email" required/>
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input className="login__input form__input" ref={passwordRef} type="password" name="password" id="password" placeholder="Password" required/>
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <button type='button' className="locations__item-link" onClick={ () => {
              dispatch(setCity(city));
              navigate(AppRoute.Root);
            }}
            >
              <span>{city}</span>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Login;
