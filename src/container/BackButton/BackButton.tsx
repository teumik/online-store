import { useNavigate } from 'react-router-dom';
import BackButtonView from '../../components/BackButton/BackButton';

function BackButton() {
  const navigate = useNavigate();

  return (
    <BackButtonView
      onClick={() => navigate(-1)}
    />
  );
}

export default BackButton;
