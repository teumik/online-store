import { IData } from '../../../../../controller/types/data.interface';

export interface PropData {
  article: IData;
  currency: string;
  children: JSX.Element | JSX.Element[];
}
