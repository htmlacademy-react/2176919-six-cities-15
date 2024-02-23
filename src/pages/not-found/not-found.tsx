import { Helmet } from 'react-helmet-async';

function NotFound (): JSX.Element {
  return (
    <section className="page__not-found">
      <Helmet>
        <title>6 cities. Not Found.</title>
      </Helmet>
      <div className="page__status-wrapper tabs__content">
        <b className="page__status">404 Not Found</b>
        <p className="page__status-description">The page you are looking for can not be found.</p>
        <a className="page__status-link" href="#">Go to home page</a>
      </div>
    </section>
  );
}

export default NotFound;
