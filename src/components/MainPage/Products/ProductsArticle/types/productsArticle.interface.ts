import { IData } from '../../../../../controller/types/data.interface';

export interface ProductsArticleType extends IData {
  isDiscount: boolean;
  discountPrice: string;
  currency: string;
  children: JSX.Element | JSX.Element[];
  isActive: boolean;
}
