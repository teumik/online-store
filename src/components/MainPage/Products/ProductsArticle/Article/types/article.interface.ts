import { IData } from '../../../../../../controller/types/data.interface';

export interface ArticleType extends Omit<IData, 'images'> {
  currency: string;
  isDiscount: boolean;
  discountPrice: string;
  children: (JSX.Element | JSX.Element[])[];
  imagesItem: JSX.Element | JSX.Element[];
  alt: string;
}
