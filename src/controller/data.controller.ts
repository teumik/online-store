import { IData } from './types/data.interface';
import DATA from '../lib/data/productsData.json';

class DataController {
  private readonly data;
  constructor(data: IData[]) {
    this.data = data;
  }

  get getData() {
    return this.data;
  }

  get getUniqBrands(): string[] {
    return Array.from(new Set(
      this.data.map((item: IData) => item.brand)
    ));
  }

  get getUniqCategories(): string[] {
    return Array.from(new Set(
      this.data.map((item: IData) => item.category)
    ));
  }

  get getLowPrice(): number {
    return Math.min(...this.data.map((item) => item.price));
  }

  get getMaxPrice() {
    return Math.max(...this.data.map((item) => item.price));
  }

  get getLowStock(): number {
    return Math.min(...this.data.map((item) => item.stock));
  }

  get getMaxStock() {
    return Math.max(...this.data.map((item) => item.stock));
  }
}

const DC = new DataController(DATA.products);

export default DC;
