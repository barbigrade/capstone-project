import styled from 'styled-components';

export default function Bakery({ name, subtitle, priceRange, score }) {
  return (
    <BakeryCard>
      <span>{name}</span>
      <Subtitle>{subtitle}</Subtitle>
      <PriceAndScore>
        <span>{priceRange}</span>
        <span>{score}</span>
      </PriceAndScore>
    </BakeryCard>
  );
}

const BakeryCard = styled.li`
  border: 1px dashed #000000;
  display: flex;
  font-weight: 500;
  flex-direction: column;
  padding: 0.7rem;
`;

const Subtitle = styled.span`
  color: #5a5a5b;
`;

const PriceAndScore = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  margin-top: 0.5rem;
`;
