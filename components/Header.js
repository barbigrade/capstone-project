import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <HeaderWrapper>
      <HeadLine>DAILY BREAD</HeadLine>
      <Link href={'/shoppingcart'}>
        <Anchor>
          <Image
            alt="shopping cart icon"
            src="https://res.cloudinary.com/drthrskm2/image/upload/v1665657772/capstone-project/icons/shoppingbasket_aubvbk.svg"
            layout="fixed"
            width={40}
            height={40}
          />
        </Anchor>
      </Link>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const HeadLine = styled.h1`
  margin: 0.7rem 0 0.7rem;
  font-weight: 300;
`;

const Anchor = styled.a`
  position: absolute;
  top: 0.6rem;
  right: 1.4rem;
`;
