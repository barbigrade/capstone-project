import styled from 'styled-components';

export default function Bakery({ name, subtitle, priceRange, score }) {
  console.log(priceRange);
  return (
    <BakeryCard>
      <Name>{name}</Name>
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
  font-weight: 400;
  flex-direction: column;
  padding: 0.7rem;
`;

const Name = styled.span`
  font-weight: 500;
`;

const Subtitle = styled.span`
  color: #5a5a5b;
  font-weight: 500;
`;

const PriceAndScore = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`;
