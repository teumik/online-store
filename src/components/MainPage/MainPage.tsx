import { MainPageType } from './types/mainPage.interface';

function MainPage({ children }: MainPageType) {
  return (
    <main className="main">
      {children}
    </main>
  );
}

export default MainPage;
