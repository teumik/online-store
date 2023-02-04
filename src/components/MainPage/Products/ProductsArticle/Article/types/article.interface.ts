import { IData } from '../../../../../../controller/types/data.interface';

export interface ArticleType extends Omit<IData, 'images'> {
  currency: string;
  isDiscount: boolean;
  discountPrice: string;
  imagesItem: JSX.Element | JSX.Element[];
  alt: string;
  activeLink: string;
  openState: boolean;
  toggleModal: () => void;
}
