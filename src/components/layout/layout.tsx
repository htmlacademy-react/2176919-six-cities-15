import { Outlet, useLocation, Link } from 'react-router-dom';
import { AppRoute } from '../../utils/constants';
import UserLoginMenu from '../user-login-menu/user-login-menu';

const getLayoutState = (pathname: AppRoute) => {
  let rootClassName = '';
  let linkClassName = '';

  if (pathname === AppRoute.Root) {
    rootClassName = 'page--gray page--main';
    linkClassName = 'header__logo-link--active';
  } else if (pathname === AppRoute.Login) {
    rootClassName = 'page--gray page--login';
  }

  return {rootClassName, linkClassName};
};

function Layout(): JSX.Element {
  const {pathname} = useLocation();
  const {rootClassName, linkClassName} = getLayoutState(pathname as AppRoute);
  return (
    <div className={`page ${rootClassName}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className={`header__logo-link ${linkClassName}`} to={AppRoute.Root}>
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
