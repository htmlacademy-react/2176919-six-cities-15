import { Link, useLocation } from 'react-router-dom';
import { useEffect, useCallback } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { fetchFavoriteOffers } from '../../store/api-actions';
import { getAuthorizationStatus, getFavoritesQuantity, getUser } from '../../store/selectors';
import { AppRoute, AuthorizationStatus } from '../../utils/constants';
import { logoutAction } from '../../store/api-actions';
import { dropFavorite } from '../../store/slices/favorites';

function UserLoginMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorized = useAppSelector(getAuthorizationStatus);
  const favoritesQuantity = useAppSelector(getFavoritesQuantity);
  const user = useAppSelector(getUser);
  const {pathname} = useLocation();

  useEffect(() => {
    if (authorized === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteOffers());
    }
  }, [dispatch, authorized]);

  const handleClick = useCallback((): void => {
    dispatch(logoutAction())
      .then(() => dispatch(dropFavorite()));
  }, [dispatch]);

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
                <img src={user?.avatarUrl} alt="User avatar" width={'20'} height={'20'}/>
              </div>
              <span className="header__user-name user__name">{user?.email}</span>
              <span className="header__favorite-count">{favoritesQuantity}</span>
            </Link>
          </li>
          <li className="header__nav-item">
            <span className="header__signout" style={{cursor: 'pointer'}} onClick={handleClick}
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
