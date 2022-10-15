import styled from 'styled-components';
// import Image from 'next/image';
import Link from 'next/link';
import useLocalStorage from '../hooks/useLocalStorage';

export default function Header() {
  const [cart] = useLocalStorage('_cart', []);

  return (
    <HeaderWrapper>
      <Link href={'/'}>
        <Anchor>
          <HeadLine>DAILY BREAD</HeadLine>
        </Anchor>
      </Link>
      {/* <Link href={'/shoppingcart'}>
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
      </Link> */}
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 3.899rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;
const HeadLine = styled.h1`
  margin: 0.7rem 0 0.7rem;
  font-weight: 300;
`;

const Anchor = styled.a`
  text-decoration: none;
`;

// const Counter = styled.div`
//   width: 1.2rem;
//   height: 1.2rem;
//   background-color: rgba(255, 105, 0, 1);
//   color: #ffffff;
//   border-radius: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   bottom: 0.3rem;
//   right: 0.3rem;
// `;
