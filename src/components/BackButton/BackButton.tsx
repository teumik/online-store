import './backButton.scss';
import { useNavigate } from 'react-router';
import { BackButton } from './types/backButton.interface';

function BackButton(props: BackButton) {
  const { preventNavigate = true } = props;
  const navigate = useNavigate();

  return (
    <button
      className="button button_back"
      onClick={() => (preventNavigate ? null : navigate(-1))}
      type="button"
    >
      Back
    </button>
  );
}

export default BackButton;
