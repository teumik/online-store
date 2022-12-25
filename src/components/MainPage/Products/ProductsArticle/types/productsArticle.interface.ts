import { IData } from '../../../../../controller/types/data.interface';

export interface ProductsArticleType extends Omit<IData, (
  'discountPercentage' | 'images' | 'rating')> {
  discountPercentage: string;
  isDiscount: boolean;
  discountPrice: string;
  currency: string;
  children: JSX.Element | JSX.Element[];
}
