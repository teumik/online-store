import { useState } from 'react';

function useClassRemove(...classes: string[]) {
  const [hasClass, setClassState] = useState(false);

  const toggleClassState = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const target = (event.target as HTMLElement);
    if (target) {
      const childrens = target.parentElement?.children;
      if (childrens) {
        Array.from(childrens).map((button) => button.classList.remove(...classes));
      }
    }
    setClassState(true);
  };

  return {
    hasClass,
    toggleClassState,
  };
}

export default useClassRemove;
