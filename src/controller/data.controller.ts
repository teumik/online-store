import { IData } from './types/data.interface';
import productsData from '../lib/data/productsData.json';

interface CartType {
  currency: '$';
  idArray: number[];
}

interface RangeFilters {
  Price: number[];
  Stock: number[];
}

export default class DataController {
  private readonly data;
  public view;
  public cart: CartType;
  rangeFilters: RangeFilters;
  listFilters: string[];
  activeBrandsFilters: string[];
  activeCategoryFilters: string[];
  constructor(data: IData[]) {
    this.data = data;
    this.view = [...this.data];
    this.cart = {
      currency: '$',
      idArray: [],
    };
    this.rangeFilters = {
      Price: [0, 10000],
      Stock: [0, 10000],
    };
    this.listFilters = [];
    this.activeBrandsFilters = [];
    this.activeCategoryFilters = [];
  }

  onChangeFiltersRange(label: string, value: number[]) {
    this.rangeFilters = {
      ...this.rangeFilters,
      [label]: value,
    };
    this.filterAllProducts();
  }

  onChangeFiltersList(label: string, categoryTitle: string) {
    if (categoryTitle === 'Brand') {
      if (!this.activeBrandsFilters.includes(label)) {
        this.activeBrandsFilters.push(label);
      } else {
        this.activeBrandsFilters = this.activeBrandsFilters.filter((i) => i !== label);
      }
      this.filterAllProducts();
    } else {
      if (!this.activeCategoryFilters.includes(label)) {
        this.activeCategoryFilters.push(label);
      } else {
        this.activeCategoryFilters = this.activeCategoryFilters.filter((i) => i !== label);
      }
      this.filterAllProducts();
    }
  }

  filterAllProducts() {
    if (this.activeBrandsFilters.length > 0 && this.activeCategoryFilters.length > 0) {
      this.view = this.data.filter((prod) => {
        if (this.activeBrandsFilters.includes(prod.brand)
          && this.activeCategoryFilters.includes(prod.category)) {
          if (prod.price <= this.rangeFilters.Price[0]) return false;
          if (prod.price >= this.rangeFilters.Price[1]) return false;
          if (prod.stock <= this.rangeFilters.Stock[0]) return false;
          if (prod.stock >= this.rangeFilters.Stock[1]) return false;
          return prod;
        }
        return false;
      });
    } else if (this.activeBrandsFilters.length > 0 || this.activeCategoryFilters.length > 0) {
      this.view = this.data.filter((prod) => {
        if (this.activeBrandsFilters.includes(prod.brand)
          || this.activeCategoryFilters.includes(prod.category)) {
          if (prod.price <= this.rangeFilters.Price[0]) return false;
          if (prod.price >= this.rangeFilters.Price[1]) return false;
          if (prod.stock <= this.rangeFilters.Stock[0]) return false;
          if (prod.stock >= this.rangeFilters.Stock[1]) return false;
          return prod;
        }
        return false;
      });
    } else {
      this.view = this.data.filter((prod) => {
        if (prod.price <= this.rangeFilters.Price[0]) return false;
        if (prod.price >= this.rangeFilters.Price[1]) return false;
        if (prod.stock <= this.rangeFilters.Stock[0]) return false;
        if (prod.stock >= this.rangeFilters.Stock[1]) return false;
        return prod;
      });
    }
  }

  set cartUpdate(cartItems: number[]) {
    this.cart.idArray = cartItems;
  }

  get cartItems() {
    return this.cart.idArray.map((id) => this.data.find((article) => article.id === id));
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

  get getData() {
    return this.view;
  }

  get getCount() {
    return this.view.length;
  }

  sortPriceAscending() {
    this.data.sort((a, b) => a.price - b.price);
    this.view.sort((a, b) => a.price - b.price);
  }

  sortPriceDescending() {
    this.data.sort((a, b) => b.price - a.price);
    this.view.sort((a, b) => b.price - a.price);
  }

  sortStockAscending() {
    this.data.sort((a, b) => a.stock - b.stock);
    this.view.sort((a, b) => a.stock - b.stock);
  }

  sortStockDescending() {
    this.data.sort((a, b) => b.stock - a.stock);
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

  getMaxSense(title: string) {
    return this.data.filter((prod) => prod.brand === title || prod.category === title).length;
  }

  getCurrentSense(title: string) {
    return this.view.filter((prod) => prod.brand === title || prod.category === title).length;
  }
}

export const dataController = new DataController(productsData.products);
