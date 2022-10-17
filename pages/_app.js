import GlobalStyle from '../components/GlobalStyles';
import Layout from '../components/Layout';
import useLocalStorage from '../hooks/useLocalStorage';

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useLocalStorage('_cart', []);

  function addToCart(item) {
    const existingCartItem = cart.find(
      (cartItem) => cartItem.productId === item.productId
    );
    if (existingCartItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.productId === existingCartItem
            ? { ...existingCartItem, count: existingCartItem.count + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, count: 1 }]);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          cart={cart}
          setCart={setCart}
          onAddToCart={addToCart}
        />
      </Layout>
    </>
  );
}

export default MyApp;
