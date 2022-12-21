import { IData } from './types/data.interface';
import productsData from '../lib/data/productsData.json';

interface CartType {
  currency: '$';
  idArray: number[];
}

export default class DataController {
  private readonly data;
  public view: Readonly<IData>[];
  public cart: CartType;
  constructor(data: IData[]) {
    this.data = data;
    this.view = [...this.data];
    this.cart = {
      currency: '$',
      idArray: [],
    };
  }

  deleteEl() {
    this.view.shift();
  }

  // CART START

  set cartUpdate(cartItems: number[]) {
    this.cart.idArray = cartItems;
  }

  get cartItems() {
    return this.cart.idArray.map((id) => this.view.find((article) => article.id === id));
  }

  get cartTotalPrice() {
    return this.cartItems.reduce((acc, article) => (acc + (article ? article.price : 0)), 0);
  }

  get cartItemsCount() {
    return this.cartItems.length;
  }

  get cartTotalDiscount() {
    const discountPrice = (article: IData) => (
      article.price * (1 - article.discountPercentage / 100)
    );
    const totalDiscountPrice = this.cartItems
      .reduce((acc, article) => acc + (article ? discountPrice(article) : 0), 0);
    return 100 - (totalDiscountPrice * 100) / this.cartTotalPrice || 0;
  }

  setCartItem(idValue: string) {
    const id = Number(idValue);
    if (this.cart.idArray.includes(id)) {
      this.cartUpdate = this.cart.idArray.filter((cartId) => cartId !== id);
      return;
    }
    this.cart.idArray.push(id);
  }

  // CART END

  get getData() {
    return this.view;
  }

  get getCount() {
    return this.view.length;
  }

  sortPriceAscending() {
    this.view.sort((a, b) => a.price - b.price);
  }

  sortPriceDescending() {
    this.view.sort((a, b) => b.price - a.price);
  }

  sortStockAscending() {
    this.view.sort((a, b) => a.stock - b.stock);
  }

  sortStockDescending() {
    this.view.sort((a, b) => b.stock - a.stock);
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
