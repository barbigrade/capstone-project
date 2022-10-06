import Image from 'next/image';
import styled from 'styled-components';
import BrowseButton from '../components/BrowseButton';

export default function ShoppingCartPage() {
  return (
    <>
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
        <ButtonWrapper>
          <BrowseButton linkTo={'/'} />
        </ButtonWrapper>
      </ShoppingCartWrapper>
    </>
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

const BackgroundImageWrapper = styled.div`
  max-height: 100vh;
`;
