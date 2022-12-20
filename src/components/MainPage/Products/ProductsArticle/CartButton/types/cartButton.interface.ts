export interface CartButtonType {
  isActive: boolean;
  buttonHandler: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  getInnerText: () => string;
}
