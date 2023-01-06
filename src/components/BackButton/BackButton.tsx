import './backButton.scss';
import { BackButtonType } from './types/backButton.interface';

function BackButton({ onClick }: BackButtonType) {
  return (
    <button
      className="button button_back"
      onClick={onClick}
      type="button"
    >
      Back
    </button>
  );
}

export default BackButton;
