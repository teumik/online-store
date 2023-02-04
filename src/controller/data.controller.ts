import { IData } from './types/data.interface';
import productsData from '../lib/data/productsData.json';
import roundNumber from '../lib/numberHelpers';

interface CartItemType {
  id: number;
  count: number;
}

interface CartType {
  currency: '$';
  idArray: CartItemType[];
  initFlag: boolean;
}

interface RangeFilters {
  Price: number[];
  Stock: number[];
}
export interface PromoCode {
  name: string;
  discount: number;
  description: string;
}

interface Storage {
  products: {
    layout: boolean;
    queries: string;
    init: {
      price: boolean;
      count: boolean;
    };
    sort: {
      price: boolean;
      count: boolean;
    };
  };
  filters: {
    search: string;
  };
}

class DataController {
  private readonly data;
  storage: Storage;
  public view: IData[];
  public searchFlow: IData[];
  public cart: CartType;
  rangeFilters: RangeFilters;
  listFilters: string[];
  activeFiltersList: string[];
  activeBrandsFilters: string[];
  activeCategoryFilters: string[];
  validPromocodes: PromoCode[];
  enteredPromocodes: PromoCode[];
  priceWithPromoCodes: number;
  constructor(data: IData[]) {
    this.data = data;
    this.view = [...this.data];
    this.searchFlow = [];
    this.storage = {
      products: {
        layout: false,
        queries: '',
        init: {
          price: false,
          count: false,
        },
        sort: {
          price: false,
          count: false,
        },
      },
      filters: {
        search: '',
      },
    };
    this.cart = {
      currency: '$',
      idArray: [],
      initFlag: true,
    };
    this.rangeFilters = {
      Price: [this.getLowPrice(), this.getMaxPrice()],
      Stock: [this.getLowStock(), this.getMaxStock()],
    };
    this.listFilters = [];
    this.activeBrandsFilters = [];
    this.activeCategoryFilters = [];
    this.activeFiltersList = [];

    this.validPromocodes = [
      { name: 'RS', discount: 10, description: 'Rolling Scopes School - 10%' },
      { name: 'EPM', discount: 10, description: 'EPAM Systems - 10%' },
      { name: 'QQ', discount: 15, description: '15% discount' },
    ];
    this.enteredPromocodes = [];
    this.priceWithPromoCodes = 0;
  }

  clearFilters = () => {
    this.activeBrandsFilters = [];
    this.activeCategoryFilters = [];
  };

  removeValidPromocode(promo: PromoCode) {
    this.validPromocodes = this.validPromocodes.filter((item) => item !== promo);
  }

  addValidPromocode(promo: PromoCode) {
    this.validPromocodes = [...this.validPromocodes, promo];
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

  filterAllProducts(searchQuery = this.storage.filters.search) {
    if (this.activeBrandsFilters.length > 0 && this.activeCategoryFilters.length > 0) {
      this.view = this.data.filter((prod) => {
        if (this.activeBrandsFilters.includes(prod.brand)
          && this.activeCategoryFilters.includes(prod.category)) {
          if (prod.price < this.rangeFilters.Price[0]) return false;
          if (prod.price > this.rangeFilters.Price[1]) return false;
          if (prod.stock < this.rangeFilters.Stock[0]) return false;
          if (prod.stock > this.rangeFilters.Stock[1]) return false;
          return true;
        }
        return false;
      });
    } else if (this.activeBrandsFilters.length > 0 || this.activeCategoryFilters.length > 0) {
      this.view = this.data.filter((prod) => {
        if (this.activeBrandsFilters.includes(prod.brand)
          || this.activeCategoryFilters.includes(prod.category)) {
          if (prod.price < this.rangeFilters.Price[0]) return false;
          if (prod.price > this.rangeFilters.Price[1]) return false;
          if (prod.stock < this.rangeFilters.Stock[0]) return false;
          if (prod.stock > this.rangeFilters.Stock[1]) return false;
          return true;
        }
        return false;
      });
    } else {
      this.view = this.data.filter((prod) => {
        if (prod.price < this.rangeFilters.Price[0]) return false;
        if (prod.price > this.rangeFilters.Price[1]) return false;
        if (prod.stock < this.rangeFilters.Stock[0]) return false;
        if (prod.stock > this.rangeFilters.Stock[1]) return false;
        return prod;
      });
    }
    const toLower = (value: string) => value.toLocaleLowerCase();
    this.view = this.view.filter((product) => {
      const entries = Object.entries(product);
      return entries.some((map) => {
        const [name, value] = map;
        if (name !== 'thumbnail' && name !== 'images' && name !== 'id') {
          return toLower(String(value)).includes(toLower(searchQuery));
        }
        return false;
      });
    });
  }

  search(searchQuery: string) {
    if (searchQuery !== '') this.storage.filters.search = searchQuery;
    this.filterAllProducts(searchQuery);
  }

  set cartUpdate(cartItems: CartItemType[]) {
    this.cart.idArray = cartItems;
  }

  get cartItems() {
    return this.cart.idArray.map((el) => this.data.find((article) => article.id === el.id));
  }

  isInCart(id: number) {
    return this.cart.idArray.findIndex((el) => el.id === id) !== -1;
  }

  get cartTotalPrice() {
    const result = this.cart.idArray.reduce((acc, el) => {
      const item = this.getItemByID(el.id);
      if (!item) return 0;
      return (acc + item.price * el.count);
    }, 0);
    return roundNumber(result);
  }

  get cartTotalDiscountPrice() {
    const result = this.cart.idArray.reduce((acc, el) => {
      const item = this.getItemByID(el.id);
      if (!item) return 0;
      return acc + item.price * el.count * (1 - item.discountPercentage / 100);
    }, 0);
    return roundNumber(result);
  }

  get cartTotalPriceWithPromoCodes() {
    const price = this.cartTotalPrice;
    const discount = this.enteredPromocodes.reduce((acc, item) => acc + item.discount, 0);

    return price - ((price / 100) * discount);
  }

  get cartItemsCount() {
    return this.cart.idArray.reduce((acc, el) => acc + el.count, 0);
  }

  getItemByID(id: number) {
    return this.data.find((article) => article.id === id);
  }

  getDiscountPriceByID(id: number) {
    const item = this.getItemByID(id);
    if (!item) return null;
    const discountPrice = item.discountPercentage;
    if (!discountPrice) return item.price;
    const result = item.price * (1 - discountPrice / 100);
    return roundNumber(result);
  }

  get cartTotalDiscount() {
    const result = 100 - (this.cartTotalDiscountPrice * 100) / this.cartTotalPrice || 0;
    return roundNumber(result);
  }

  setCartItem(idValue: string) {
    const id = Number(idValue);
    if (this.cart.idArray.find((el) => el.id === id)) {
      this.cartUpdate = this.cart.idArray.filter((el) => el.id !== id);
      return;
    }
    this.cart.idArray.push({ id, count: 1 });
  }

  findCartItem(idValue: number) {
    return this.cart.idArray.find((el) => el.id === idValue);
  }

  increaseItemCount(idValue: number) {
    const item = this.findCartItem(idValue);
    if (item?.count) {
      const article = this.getItemByID(idValue);
      if (!article) return;
      if (item.count >= article.stock) return;
      item.count += 1;
    }
  }

  decreaseItemCount(idValue: number) {
    const item = this.findCartItem(idValue);
    if (item?.count) {
      if (item.count === 1) {
        this.setCartItem(String(idValue));
        return;
      }
      item.count -= 1;
    }
  }

  getItemCount(idValue: number) {
    const item = this.findCartItem(idValue);
    return item?.count;
  }

  get getData() {
    return this.view;
  }

  get getCount() {
    return this.view.length;
  }

  sortDefault() {
    this.view.sort((a, b) => a.id - b.id);
    this.data.sort((a, b) => a.id - b.id);
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

  getLowPriceView(): number {
    return Math.min(...this.view.map((item) => item.price));
  }

  getMaxPriceView() {
    return Math.max(...this.view.map((item) => item.price));
  }

  getLowStockView(): number {
    return Math.min(...this.view.map((item) => item.stock));
  }

  getMaxStockView() {
    return Math.max(...this.view.map((item) => item.stock));
  }

  getMaxSense(title: string) {
    return this.data.filter((prod) => prod.brand === title || prod.category === title).length;
  }

  getCurrentSense(title: string) {
    return this.view.filter((prod) => prod.brand === title || prod.category === title).length;
  }
}

export const dataController = new DataController(productsData.products);
