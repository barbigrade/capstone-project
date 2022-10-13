import styled from 'styled-components';
import Image from 'next/image';

export default function Bakery({ name, subtitle, priceRange, score }) {
  return (
    <BakeryCard>
      <span>{name}</span>
      <Subtitle>{subtitle}</Subtitle>
      <PriceAndScore>
        <span>{priceRange}</span>
        <div>
          <Image
            alt="score icon"
            src="https://res.cloudinary.com/drthrskm2/image/upload/v1665692973/capstone-project/icons/star_FILL0_wght300_GRAD0_opsz48_xeafty.svg"
            layout="fixed"
            width={20}
            height={20}
          />
          <span>{score}</span>
        </div>
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

  div {
    display: flex;
  }
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
