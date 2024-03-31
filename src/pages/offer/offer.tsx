import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchSelectOffer, fetchOffersNearby, fetchReviews, favoriteAction } from '../../store/api-actions';
import { getFavoritesAll, getAuthorizationStatus } from '../../store/selectors';
import { dropOffer } from '../../store/slices/offer';
import { selectedOffer, getOffersNearby, statusOffer } from '../../store/selectors';
import { RequestStatus, FavoriteStatus, AuthorizationStatus, AppRoute } from '../../utils/constants';
import { FavoriteOffer } from '../../types/favorite-offer';
import classNames from 'classnames';
import OfferGoods from './components/offer-goods';
import ReviewsList from './components/reviews-list';
import Map from '../../components/map';
import OffersList from '../../components/offers-list/offers-list';
import NotFound from '../not-found/not-found';
import Loader from '../../components/loader/loader';

function Offer (): JSX.Element {
  const { id: offerId } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const favoritesOffers = useAppSelector(getFavoritesAll);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const initialFavoriteStatus = (idOffer: string, offers: FavoriteOffer[]) => {
      const selectedOffers = offers.filter((item) => item.id === idOffer);
      if(selectedOffers.length !== 0) {
        setIsFavorite(true);
      }
    };

    if (favoritesOffers && offerId) {
      initialFavoriteStatus(offerId, favoritesOffers);
    }
  }, [favoritesOffers, offerId]);

  useEffect(() => {
    if (offerId) {
      dispatch(fetchSelectOffer({offerId: `${offerId}`}));
      dispatch(fetchOffersNearby({offerId: `${offerId}`}));
      dispatch(fetchReviews({offerId: `${offerId}`}));
    }

    return () => {
      dispatch(dropOffer());
    };
  }, [offerId, dispatch]);

  const handleFavorite = useCallback(() => {
    const checkingFavorites = (idOffer: string, offers: FavoriteOffer[]) => {
      const selectedOffers = offers.filter((item) => item.id === idOffer);
      if(selectedOffers.length !== 0) {
        setIsFavorite(false);
        return FavoriteStatus.Extract;
      }
      setIsFavorite(true);
      return FavoriteStatus.Add;
    };
    if (authorizationStatus === AuthorizationStatus.Auth && offerId) {
      dispatch(favoriteAction({offerId: offerId, isFavorite: checkingFavorites(offerId, favoritesOffers)}));
    } else {
      navigate(AppRoute.Login);
    }
  }, [dispatch, offerId, authorizationStatus, navigate, favoritesOffers]);

  const offerById = useAppSelector(selectedOffer);
  const offersNearby = useAppSelector(getOffersNearby);
  const statusLoading = useAppSelector(statusOffer);

  if (offerById === null) {
    if(statusLoading === RequestStatus.Loading) {
      return <Loader />;
    }
    return <NotFound />;
  }

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <Helmet>
          <title>6 cities: offer</title>
        </Helmet>
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {offerById?.images.map((image) => (
              <div className="offer__image-wrapper" key={image}>
                <img className="offer__image" src={image} alt={`Photo ${offerById?.type}`}/>
              </div>)
            )}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {
              offerById?.isPremium ? (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              ) : null
            }
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {offerById?.title}
              </h1>
              <button className={classNames(
                'offer__bookmark-button button',
                {'offer__bookmark-button--active' : isFavorite}
              )} type="button" onClick={handleFavorite}
              >
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
              <span className="offer__rating-value rating__value">{offerById?.rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {offerById?.type ? offerById?.type.charAt(0).toUpperCase() + offerById?.type.slice(1) : null}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {offerById?.bedrooms} Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                Max {offerById?.maxAdults} adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{offerById?.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {offerById?.goods.map((good) => <OfferGoods good={good} key={good}/>)}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="offer__avatar user__avatar" src={offerById?.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                </div>
                <span className="offer__user-name">
                  {offerById?.host.name}
                </span>
                {
                  offerById?.host.isPro ? (
                    <span className="offer__user-status">
                      Pro
                    </span>
                  ) : null
                }
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  {offerById?.description}
                </p>
              </div>
            </div>
            <ReviewsList />
          </div>
        </div>
        <Map isMain={false}/>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <OffersList offers={offersNearby} variant={'vertical'}/>
        </section>
      </div>
    </main>
  );
}

export default Offer;
