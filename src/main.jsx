import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import Root from './Root.jsx';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import SingleProductpage from './components/SingleProductpage.jsx';
import FOFError from './components/FOFError.jsx';
import CategoryProduct from './pages/CategoryProduct';
import WishList  from './pages/WishList.jsx';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Clerk Publishable Key');
}

const allRoute = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <Product /> },
      { path: 'category/:category', element: <CategoryProduct /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'cart', element: <Cart /> },
      { path: 'product/:id', element: <SingleProductpage /> },
      {path: 'wishList', element: <WishList/>},
      { path: '*', element: <FOFError /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={allRoute} />
    </ClerkProvider>
  </StrictMode>
);
