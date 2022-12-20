import { IData } from './types/data.interface';
import productsData from '../lib/data/productsData.json';

export default class DataController {
  private readonly data;
  public view: IData[];
  constructor(data: IData[]) {
    this.data = data;
    this.view = this.data;
  }

  get getData() {
    return this.view;
  }

  get getCount() {
    return this.view.length;
  }

  sortAscending() {
    this.view.sort((a, b) => a.price - b.price);
  }

  sortDescending() {
    this.view.sort((a, b) => b.price - a.price);
  }

  getUniqBrands(): string[] {
    return Array.from(new Set(
      this.data.map((item: IData) => item.brand)
    ));
  }

  getUniqCategories(): string[] {
    return Array.from(new Set(
      this.data.map((item: IData) => item.category)
    ));
  }

  getLowPrice(): number {
    return Math.min(...this.data.map((item) => item.price));
  }

  getMaxPrice() {
    return Math.max(...this.data.map((item) => item.price));
  }

  getLowStock(): number {
    return Math.min(...this.data.map((item) => item.stock));
  }

  getMaxStock() {
    return Math.max(...this.data.map((item) => item.stock));
  }
}

export const dataController = new DataController(productsData.products);
