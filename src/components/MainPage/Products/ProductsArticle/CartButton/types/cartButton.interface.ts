export interface CartButtonType {
  id: number;
  isActive: boolean;
  buttonHandler: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  getInnerText: () => string;
  updateCart: () => void;
}
