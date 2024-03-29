import { Link, useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getAuthorizationStatus } from '../../store/selectors';
import { AppRoute, AuthorizationStatus } from '../../utils/constants';
import { logoutAction } from '../../store/api-actions';


function UserLoginMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorized = useAppSelector(getAuthorizationStatus);
  const {pathname} = useLocation();
  if (pathname as AppRoute === AppRoute.Login) {
    return (
      <>
      </>
    );
  }
  return (
    <nav className="header__nav">
      {authorized === AuthorizationStatus.Auth ? (
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
              <span className="header__favorite-count">3</span>
            </Link>
          </li>
          <li className="header__nav-item">
            <span className="header__signout" style={{cursor: 'pointer'}} onClick={() => {
              dispatch(logoutAction());
            }}
            >Sign out
            </span>
          </li>
        </ul>
      ) :
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        </ul>}
    </nav>
  );
}

export default UserLoginMenu;
