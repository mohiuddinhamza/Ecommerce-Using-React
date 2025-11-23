// Root.jsx
import App from './App.jsx';
import { CartContextProvider } from './context/CartContextProvider';
import { DataProvider } from './hooks/dataProvider';
import WishListContextProvider from './context/WishListContextProvider.jsx';

export default function Root() {
  return (
    <WishListContextProvider>
      <CartContextProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </CartContextProvider>
    </WishListContextProvider>
  );
}
