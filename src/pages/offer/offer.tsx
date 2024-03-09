import { Helmet } from 'react-helmet-async';
import { ReviewData } from '../../mocks/reviews';
import { OfferDetailed } from '../../mocks/offer';
import { OfferNearby } from '../../mocks/offers-nearby';
import { CityLocation } from '../../mocks/offers';
import OfferGoods from './components/offer-goods';
import ReviewsList from './components/reviews-list';
import Map from '../../components/map';
import OffersList from '../../components/offers-list/offers-list';

type OfferProps = {
  offer: OfferDetailed;
  reviews: ReviewData[];
  offersNearby: OfferNearby[];
}

function Offer ({offer, reviews, offersNearby}: OfferProps): JSX.Element {
  const {title, isPremium, rating, price, type, bedrooms, maxAdults, goods, host, description, city} = offer;
  const points = offersNearby.map((item) => ({id: item.id, latitude: item.location.latitude, longitude: item.location.longitude, zoom: item.location.zoom}));
  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <Helmet>
          <title>6 cities: offer</title>
        </Helmet>
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            <div className="offer__image-wrapper">
              <img className="offer__image" src="img/room.jpg" alt="Photo studio"/>
            </div>
            <div className="offer__image-wrapper">
              <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio"/>
            </div>
            <div className="offer__image-wrapper">
              <img className="offer__image" src="img/apartment-02.jpg" alt="Photo studio"/>
            </div>
            <div className="offer__image-wrapper">
              <img className="offer__image" src="img/apartment-03.jpg" alt="Photo studio"/>
            </div>
            <div className="offer__image-wrapper">
              <img className="offer__image" src="img/studio-01.jpg" alt="Photo studio"/>
            </div>
            <div className="offer__image-wrapper">
              <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio"/>
            </div>
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {
              isPremium ? (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              ) : null
            }
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {title}
              </h1>
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{width: '80%'}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {bedrooms} Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                Max {maxAdults} adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {goods.map((good) => <OfferGoods good={good} key={good}/>)}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                </div>
                <span className="offer__user-name">
                  {host.name}
                </span>
                {
                  host.isPro ? (
                    <span className="offer__user-status">
                      Pro
                    </span>
                  ) : null
                }
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  {description}
                </p>
              </div>
            </div>
            <ReviewsList reviews={reviews} />
          </div>
        </div>
        <Map city={city as CityLocation} points={points} isMain={false}/>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <OffersList variant={'vertical'} selectedOffers={offersNearby}/>
        </section>
      </div>
    </main>
  );
}

export default Offer;
