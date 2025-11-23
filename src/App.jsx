import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import useGeolocation from './hooks/useGeolocation';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from 'react-scroll-to-top';
import { useCartContext } from './context/CartContext';
import { useEffect, useRef } from 'react';

export default function App() {
  const { location, detectLocation } = useGeolocation();
  const { cartItems, setCartItems } = useCartContext();
  const hasHydrated = useRef(false);

  // Load cart from localStorage
useEffect(() => {
  const storedCart = localStorage.getItem('cartItems');
  console.log("Stored cart raw:", storedCart); 
  if (storedCart) {
    try {
      const parsed = JSON.parse(storedCart);
      console.log("Parsed cart:", parsed); 
      if (Array.isArray(parsed)) {
        setCartItems(parsed);
      }
    } catch (err) {
      console.error('Error parsing cartItems:', err);
    }
  }
  hasHydrated.current = true;
}, [setCartItems]);

  // Save cart to localStorage only after hydration
 useEffect(() => {
  if (!hasHydrated.current) return; 
  if (Array.isArray(cartItems)) {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
}, [cartItems]);

  // Detect location
  useEffect(() => {
    detectLocation();
  }, [detectLocation]);

  return (
    <>
      <Navbar location={location} detectLocation={detectLocation} />
      <Outlet context={{ location, detectLocation }} />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Footer />
      <ScrollToTop
        smooth
        top={200}
        style={{
          backgroundColor: 'red',
          color: 'white',
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        }}
      />
    </>
  );
}
