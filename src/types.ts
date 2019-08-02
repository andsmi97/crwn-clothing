export interface IMenuItem {
  title: string;
  imageUrl: string;
  size: string;
  linkUrl: string;
  id: number;
}

export interface ICollection {
  id: number;
  title: string;
  routeName: string;
}

export interface ICollectionItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface ICollectionItemWithQuantity extends ICollectionItem {
  quantity: number;
}

export interface IShopData extends ICollection {
  items: ICollectionItem[];
}

export interface IFormInput {
  onChange?: React.Dispatch<React.SetStateAction<string>>;
  label?: string;
  value?: string;
  id?: string;
  type?: string;
  required?: boolean;
  name?: string;
}

export interface ICustomButton {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  value?: string;
  onClick?: any;
  isGoogleSignIn?: boolean;
}
export interface IHeader {
  currentUser?: IUser | null;
}

export interface IUser extends firebase.firestore.DocumentData {
  id?: string;
}

export interface IUserAction {
  type: string;
  payload: IUserActionPayload;
}
export interface IUserActionPayload {
  currentUser?: IUser | null;
}

export interface IUserState {
  currentUser?: IUser | null;
}

export interface IReduxStore {
  user: IUserState;
}

export interface IUserActions {}

export interface IReduxDispatch {}

export interface ICollectionIdMapInterface {
  hats: number;
  sneakers: number;
  jackets: number;
  womens: number;
  mens: number;
}

export type CollectionIdMapKeys = keyof ICollectionIdMapInterface;
