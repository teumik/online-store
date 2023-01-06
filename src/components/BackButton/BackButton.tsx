import './backButton.scss';
import { useNavigate } from 'react-router-dom';
import { BackButtonType } from './types/backButton.interface';

function BackButton({ onClick }: BackButtonType) {
  const navigate = useNavigate();

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
