import { Outlet, useLocation, Link } from 'react-router-dom';
import { AppRoute } from '../../utils/constants';

const getLayoutState = (pathname: AppRoute) => {
  let rootClassName = '';
  let linkClassName = '';
  let shouldRenderUser = true;

  if (pathname === AppRoute.Root) {
    rootClassName = 'page--gray page--main';
    linkClassName = 'header__logo-link--active';
  } else if (pathname === AppRoute.Login) {
    rootClassName = 'page--gray page--login';
    shouldRenderUser = false;
  }

  return {rootClassName, linkClassName, shouldRenderUser};
};

function Layout(): JSX.Element {
  const {pathname} = useLocation();
  const {rootClassName, linkClassName, shouldRenderUser} = getLayoutState(pathname as AppRoute);
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
            {
              shouldRenderUser ? (
                <nav className="header__nav">
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
                      <Link className="header__nav-link" to={AppRoute.Login}>
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              ) : null
            }
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;