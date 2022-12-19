export interface filterRangeProps {
  title: string;
  min: number;
  max: number;
}

export interface filterItemProps {
  title: string;
}

export interface filterListProps {
  filterTitle: string;
  values: string[];
}

export interface filtersProps {
  categories: string[];
  brands: string[];
  minPrice: number;
  maxPrice: number;
  minStock: number;
  maxStock: number;
}

// interface cartListProps {
//     items: CartListItem[]
// }

// interface CartListItem {
//     phoneName: string,
//     description: string,
//     thumbnail: string,
//     rating: number,
//     discount: number,
//     stock: number,
//     price: number
// }
