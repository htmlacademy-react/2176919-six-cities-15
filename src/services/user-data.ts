import { User } from '../types/user-data';

const USER_DATA_KEY_NAME = 'six-cities/user-data';

export const getUserData = (): User | undefined => {
  const data = localStorage.getItem(USER_DATA_KEY_NAME);
  return data ? JSON.parse(data) as User : undefined;
};

export const saveUserData = (data: User): void => {
  localStorage.setItem(USER_DATA_KEY_NAME, JSON.stringify(data));
};

export const dropUserData = (): void => {
  localStorage.removeItem(USER_DATA_KEY_NAME);
};
