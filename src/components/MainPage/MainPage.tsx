import { MainPageType } from './types/mainPage.interface';

function MainPage({ children, className }: MainPageType) {
  return (
    <main className={className}>
      {children}
    </main>
  );
}

export default MainPage;
