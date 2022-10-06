import Image from 'next/image';
import styled from 'styled-components';

export default function ShoppingCartPage() {
  return (
    <>
      <BackgroundImageWrapper>
        <Image
          alt=" "
          src="/shoppingcartbackground2.jpg"
          layout="responsive"
          width={1920}
          height={2880}
        />
      </BackgroundImageWrapper>
    </>
  );
}

const BackgroundImageWrapper = styled.div`
  z-index: 0;
  max-height: 100vh;
`;
