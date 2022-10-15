import useLocalStorage from '../hooks/useLocalStorage';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

export default function ShoppingCartIcon() {
  const [cart] = useLocalStorage('_cart', []);

  return (
    <IconWrapper>
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
    </IconWrapper>
  );
}

const IconWrapper = styled.div`
  z-index: 11;
  position: fixed;
  top: 0.6rem;
  right: 1.4rem;
`;

const Anchor = styled.a``;

const Counter = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  background-color: rgba(255, 105, 0, 1);
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0.3rem;
  right: 0.3rem;
`;
