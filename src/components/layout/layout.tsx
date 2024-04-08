import { Outlet, useLocation, Link } from 'react-router-dom';
import { AppRoute } from '../../utils/constants';
import { useAppSelector } from '../../hooks';
import { getFavoriteOffers } from '../../store/selectors';
import UserLoginMenu from '../user-login-menu/user-login-menu';

const getLayoutState = (pathname: AppRoute) => {
  let rootClassName = '';
  let linkClassName = '';

  switch (pathname) {
    case AppRoute.Root:
      rootClassName = 'page--gray page--main';
      linkClassName = 'header__logo-link--active';
      break;
    case AppRoute.Login:
      rootClassName = 'page--gray page--login';
      break;
    case AppRoute.Favorites:
      rootClassName = '';
      break;
    default:
      rootClassName = '';
  }
  return {rootClassName, linkClassName};
};

function Layout(): JSX.Element {
  const offers = useAppSelector(getFavoriteOffers);
  const {pathname} = useLocation();
  let {rootClassName} = getLayoutState(pathname as AppRoute);
  const {linkClassName} = getLayoutState(pathname as AppRoute);
  const isMain = pathname as AppRoute === AppRoute.Root;
  if (pathname as AppRoute === AppRoute.Favorites && offers.length === 0) {
    rootClassName = 'page--favorites-empty';
  }

  return (
    <div className={`page ${rootClassName}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link
                className={`header__logo-link ${linkClassName}`}
                to={AppRoute.Root}
                style={isMain ? {pointerEvents: 'none'} : {pointerEvents: 'auto'}}
              >
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <UserLoginMenu />
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;
