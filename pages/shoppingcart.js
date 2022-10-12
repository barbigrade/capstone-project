import Image from 'next/image';
import styled from 'styled-components';
import PrimaryButton from '../components/PrimaryButton';
import ShoppingCartCard from '../components/ShoppingCartCard';
import useLocalStorage from '../hooks/useLocalStorage';
import CartItem from '../components/CartItem';

export default function ShoppingCartPage() {
  const [cart] = useLocalStorage('_cart', []);
  console.log(cart);
  return (
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
          product={item}
          key={item.productId}
        />
      ))}
    </ShoppingCartWrapper>
  );
}

const ShoppingCartWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
