import { IData } from './types/data.interface';

export default class DataControl {
  private readonly data;
  constructor(data: IData[]) {
    this.data = data;
  }

  getUniqBrands() {
    return Array.from(new Set(
      this.data.map((item: IData) => item.brand)
    ));
  }

  getUniqCategories() {
    return Array.from(new Set(
      this.data.map((item: IData) => item.category)
    ));
  }

  get getData() {
    return this.data;
  }
}
