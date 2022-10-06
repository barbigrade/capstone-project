import Image from 'next/image';
import styled from 'styled-components';
import PrimaryButton from '../components/PrimaryButton';
import ShoppingCartCard from '../components/ShoppingCartCard';

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

const DescriptionWrapper = styled(ButtonWrapper)`
  top: 42%;
`;

const BackgroundImageWrapper = styled.div`
  max-height: 100vh;
`;
