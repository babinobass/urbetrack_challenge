export interface IUserLogin {
  user: string;
  password: string;
}
export interface Image {
  id: string;
  author: string;
  width?: number;
  height?: number;
  url?: string;
  download_url: string;
}

export interface ICard extends Image {
  saved: boolean;
}

export interface IError {
  username?: string;
  password?: string;
}

export interface AuthStore {
  user: string | null;
  isLoggedIn: boolean;
  login: (userId: string) => void;
  logout: () => void;
}

export interface FavoritesStore {
  favorites: { [key: string]: Image[] };
  removeFavorite: (favoriteId: string, userId: string) => void;
  addFavorite: (favorite: Image, userId: string) => void;
}

export interface IpropButton extends React.MouseEvent<HTMLButtonElement> {
  stopPropagation: () => void;
}

export interface IConfirmation {
  text: string;
  yes: (event: IpropButton) => void;
  no: (event: IpropButton) => void;
}
