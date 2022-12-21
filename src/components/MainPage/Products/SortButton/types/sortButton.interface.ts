export interface SortButtonsType {
  content: string;
  isActive: boolean;
  reverseSort: () => void;
  toggleClassState?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isSort?: boolean;
}
