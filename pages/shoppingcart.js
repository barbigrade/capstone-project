import Image from 'next/image';
import styled from 'styled-components';
import PrimaryButton from '../components/PrimaryButton';
import ShoppingCartCard from '../components/ShoppingCartCard';
import useLocalStorage from '../hooks/useLocalStorage';
import CartItem from '../components/CartItem';

export default function ShoppingCartPage() {
  const [cart, setCart] = useLocalStorage('_cart', []);

  function removeFromCart(productId) {
    setCart(cart.filter((cartItem) => cartItem.productId !== productId));
  }

  return (
    <>
      {cart.length > 0 && (
        <ShoppingCartWrapper>
          {cart.map((item) => (
            <CartItem
              image={item.image}
              name={item.name}
              ingredients={item.ingredients.map((ingredient, index) => {
                return <li key={index}>{ingredient}</li>;
              })}
              weight={item.weight}
              cost={item.cost}
              productId={item.productId}
              key={item.productId}
              onRemoveFromCart={removeFromCart}
            />
          ))}
        </ShoppingCartWrapper>
      )}

      {cart.length === 0 && (
        <ShoppingCartWrapper>
          <BackgroundImageWrapper>
            <Image
              alt=" "
              src="/shoppingcartbackground2.jpg"
              layout="responsive"
              width={1920}
              height={2880}
            />
          </BackgroundImageWrapper>
          <DescriptionWrapper>
            <ShoppingCartCard
              heading={'OH NO!'}
              description={'Your basket is bread-less :('}
              CTA={
                'Channel your inner Parisian with a crisp baguette or a flaky croissant, browse our bakeries below!'
              }
            />
          </DescriptionWrapper>
          <ButtonWrapper>
            <PrimaryButton linkTo={'/'} text={'Browse Bread'} />
          </ButtonWrapper>
        </ShoppingCartWrapper>
      )}
    </>
  );
}

const ShoppingCartWrapper = styled.div`
  display: grid;
  gap: 1rem;
  margin: 0 auto;
  padding-bottom: 1rem;
  width: 95vw;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const DescriptionWrapper = styled(ButtonWrapper)`
  top: 42%;
`;

const BackgroundImageWrapper = styled.div`
  max-height: 100vh;
`;
