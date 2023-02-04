import { IData } from '../../../../../controller/types/data.interface';

export interface ProductsArticleType extends Omit<IData, 'rating' | 'images'> {
  isDiscount: boolean;
  discountPrice: string;
  currency: string;
  children: JSX.Element | JSX.Element[];
}
