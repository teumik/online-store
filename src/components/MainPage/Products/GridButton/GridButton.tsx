import './gridButton.scss';
import { GridButtonType } from './types/gridButton.interface';

function GridButton({
  viewState, toggleView,
}: GridButtonType) {
  return (
    <button
      onClick={() => {
        toggleView();
      }}
      className={`products__buttons views__buttons ${viewState ? 'views__buttons_active' : ''}`}
      type="button"
    >
      {viewState ? 'L' : 'G'}
    </button>
  );
}

export default GridButton;
