import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, RequestStatus } from '../../utils/constants';
import { withRouter, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks-test';
import PrivateRoute from './private-route';
import { render, screen } from '@testing-library/react';

describe ('Component: PrivateRoute', () => {
  it('should render component for public route, when user not authorized', () => {
    const expectedText = 'public route';
    const notExpectedText = 'private route';
    const withRouterComponent = withRouter(
      <Routes>
        <Route path={ AppRoute.Login } element={ <span>{ expectedText }</span> } />
        <Route path={ AppRoute.Favorites } element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <span>{ notExpectedText }</span>
          </PrivateRoute>
        }
        />
      </Routes>
    );

/*     const { withStoreComponent } = withStore(withRouterComponent, makeFakeStore(
      {
        User: {
          user: {email: '', avatarUrl: ''},
          authorizationStatus: AuthorizationStatus.NoAuth,
          loginLoadingStatus: RequestStatus.Idle
        }
      }
    ));
    render(withStoreComponent); */
    render(withRouterComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });
});
