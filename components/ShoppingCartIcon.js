import useLocalStorage from '../hooks/useLocalStorage';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

export default function ShoppingCartIcon() {
  const [cart] = useLocalStorage('_cart', []);

  return (
    <Link href={'/shoppingcart'}>
      <Anchor>
        <Image
          alt="shopping cart icon"
          src="https://res.cloudinary.com/drthrskm2/image/upload/v1665657772/capstone-project/icons/shoppingbasket_aubvbk.svg"
          layout="fixed"
          width={40}
          height={40}
        />
        {cart.length > 0 && <Counter>{cart.length}</Counter>}
      </Anchor>
    </Link>
  );
}

const Anchor = styled.a`
  position: fixed;
  right: 1.4rem;
  top: 0.6rem;
  z-index: 11;
`;

const Counter = styled.div`
  align-items: center;
  background-color: rgba(255, 105, 0, 1);
  border-radius: 50%;
  bottom: 0.3rem;
  color: #ffffff;
  display: flex;
  font-size: smaller;
  height: 1.2rem;
  justify-content: center;
  position: absolute;
  right: 0.3rem;
  width: 1.2rem;
`;
