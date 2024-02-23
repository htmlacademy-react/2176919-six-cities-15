import { Helmet } from 'react-helmet-async';

function NotFound (): JSX.Element {
  return (
    <section className="page__not-found">
      <Helmet>
        <title>6 cities. Not Found.</title>
      </Helmet>
      <div className="page__status-wrapper tabs__content">
        <b className="page__status" style={{ display: 'block', margin: '40px 5px', fontSize: '32px', textAlign: 'center' }}>404 Not Found</b>
        <p className="page__status-description" style={{ display: 'block', fontSize: '20px', textAlign: 'center' }}>The page you are looking for can not be found.</p>
        <a className="page__status-link" href="#" style={{ display: 'block', fontSize: '20px', textAlign: 'center', color: '#3366BB' }}>Go to home page</a>
      </div>
    </section>
  );
}

export default NotFound;
