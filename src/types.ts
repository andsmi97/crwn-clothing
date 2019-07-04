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
  currentUser?: firebase.User | null;
}
