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

export default class DateControl {
  private date;
  constructor(date: Idate[]) {
    this.date = date;
  }

  getUniqBrands() {
    return Array.from(new Set(
      this.date.map((item: Idate) => item.brand)
    ));
  }

  getUniqCategories() {
    return Array.from(new Set(
      this.date.map((item: Idate) => item.category)
    ));
  }
}
