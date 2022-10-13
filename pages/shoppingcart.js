import Image from 'next/image';
import styled from 'styled-components';
import PrimaryButton from '../components/PrimaryButton';
import ShoppingCartCard from '../components/ShoppingCartCard';
import useLocalStorage from '../hooks/useLocalStorage';
import CartItem from '../components/CartItem';
import BackButton from '../components/BackButton';

export default function ShoppingCartPage() {
  const [cart, setCart] = useLocalStorage('_cart', []);

  function removeFromCart(productId) {
    setCart(cart.filter((cartItem) => cartItem.productId !== productId));
  }

  return (
    <>
      {cart.length > 0 && (
        <ShoppingCartWrapper>
          <ShoppingCartHeader>Bread Basket</ShoppingCartHeader>
          <BackButton linkTo={'/'} />
          {cart.map((item) => (
            <CartItem
              image={item.image}
              name={item.name}
              ingredients={item.ingredients.map((ingredient, index) => {
                return <li key={index}>{ingredient}</li>;
              })}
              weight={item.weight !== '0' ? `${item.weight} ` : ''}
              cost={item.cost}
              productId={item.productId}
              key={item.productId}
              onRemoveFromCart={removeFromCart}
            />
          ))}
        </ShoppingCartWrapper>
      )}

      {cart.length === 0 && (
        <EmptyShoppingCartWrapper>
          <BackgroundImageWrapper>
            <Image
              alt=" "
              src="https://res.cloudinary.com/drthrskm2/image/upload/c_limit,h_1792,w_828/v1665659203/capstone-project/bakery%20overviews/shoppingcartbackground2_vxwbau.jpg"
              layout="responsive"
              width={828}
              height={1792}
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
        </EmptyShoppingCartWrapper>
      )}
    </>
  );
}

const ShoppingCartHeader = styled.h2`
  font-weight: 400;
  margin: 2rem 0 0 0;
`;

const ShoppingCartWrapper = styled.div`
  display: grid;
  gap: 1rem;
  margin: 0 auto;
  padding-bottom: 1rem;
  width: 95vw;
  max-width: 40rem;
`;

const EmptyShoppingCartWrapper = styled(ShoppingCartWrapper)`
  width: 100vw;
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
