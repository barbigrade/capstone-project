import styled from 'styled-components';

export default function BakeryDetails({
  image,
  name,
  subtitle,
  score,
  delivery,
  about,
}) {
  return (
    <BakeryCard>
      <div>{/*<Image src={image} layout="intrinsic" /> */}</div>
      <h2>{name}</h2>
      <Subtitle>{subtitle}</Subtitle>
      <div>
        <span>{score}</span>
        <span>
          Delivery <br />
          {delivery}
        </span>
        <span>
          About <br />
          {about}
        </span>
      </div>
    </BakeryCard>
  );
}

const BakeryCard = styled.div`
  border: 1px dashed #000000;
  display: flex;
  font-weight: 500;
  flex-direction: column;
  padding: 0.7rem;
`;

const Subtitle = styled.h3`
  color: #5a5a5b;
`;

const PriceAndScore = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  margin-top: 0.5rem;
`;
