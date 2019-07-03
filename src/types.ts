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
