import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, AuthorizationStatus, RequestStatus } from '../../utils/constants';
import { UserSlice } from '../../types/state';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';

const initialState: UserSlice = {
  user: {email: '', avatarUrl: ''},
  authorizationStatus: AuthorizationStatus.Unknown,
  loginLoadingStatus: RequestStatus.Idle,
};

export const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.pending, (state) => {
        state.loginLoadingStatus = RequestStatus.Loading;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.loginLoadingStatus = RequestStatus.Success;
        state.user = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.loginLoadingStatus = RequestStatus.Error;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});
