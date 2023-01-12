import { PropsWithChildren } from 'react';
import { MainPageType } from './types/mainPage.interface';

function MainPage({ children, className }: PropsWithChildren<MainPageType>) {
  return (
    <main className={className}>
      {children}
    </main>
  );
}

export default MainPage;
