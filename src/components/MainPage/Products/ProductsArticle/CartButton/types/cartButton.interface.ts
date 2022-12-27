export interface CartButtonType {
  id: number;
  isActive: boolean;
  buttonHandler: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    isInCart?: boolean) => void;
  innerText: string;
  updateCart: () => void;
  isInCart: boolean;
}
