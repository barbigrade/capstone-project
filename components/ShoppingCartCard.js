import styled from 'styled-components';
import Image from 'next/image';

export default function ShoppingCartCard({ heading, description, CTA }) {
  return (
    <ShoppingCartWrapper>
      <Heading>{heading}</Heading>
      <Image
        alt="Shopping cart icon"
        src="/shoppingbasket.svg"
        layout="fixed"
        width={48}
        height={48}
      />
      <Text>{description}</Text>
      <Text>{CTA}</Text>
    </ShoppingCartWrapper>
  );
}

const ShoppingCartWrapper = styled.div`
  border: none;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  padding: 1.3rem;
  background-color: rgba(255, 255, 255, 0.8);
  align-items: center;
  min-width: 300px;
  max-width: 350px;
`;

const Heading = styled.h2`
  font-size: xx-large;
  font-weight: 300;
  margin: 0.5rem 0 0.4rem 0;
`;

const Text = styled.span`
  font-weight: 400;
  margin: 0.5rem 0 0.5rem 0;
  font-size: 1rem;
  text-align: center;
`;
