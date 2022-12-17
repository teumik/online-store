import Data from '../../lib/data/data.json';

interface Idate {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

export class DateControl {
  private date;
  constructor(date: Idate[]) {
    this.date = date;
  }

  getUniqBrands(): string[] {
    return Array.from(new Set(
      this.date.map((item: Idate) => item.brand)
    ));
  }

  getUniqCategories(): string[] {
    return Array.from(new Set(
      this.date.map((item: Idate) => item.category)
    ));
  }

  getLowPrice(): number {
    return Math.min(...this.date.map((item) => item.price));
  }

  getMaxPrice() {
    return Math.max(...this.date.map((item) => item.price));
  }

  getLowStock(): number {
    return Math.min(...this.date.map((item) => item.stock));
  }

  getMaxStock() {
    return Math.max(...this.date.map((item) => item.stock));
  }
}

const DateControler = new DateControl(Data.products);
export default DateControler;
