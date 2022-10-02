import styled from 'styled-components';
import Image from 'next/image';

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
      <div>
        <Image
          alt=" "
          src={image}
          layout="responsive"
          width={300}
          height={200}
        />
      </div>
      <h2>{name}</h2>
      <Subtitle>{subtitle}</Subtitle>

      <span>{score}</span>
      <span>
        <strong>Delivery</strong> <br />
        {delivery}
      </span>
      <span>
        <strong>About</strong> <br />
        {about}
      </span>
    </BakeryCard>
  );
}

const BakeryCard = styled.div`
  border: 1px dashed #000000;
  display: flex;
  font-weight: 500;
  flex-direction: column;
  padding: 0.7rem;

  h2 {
    margin: 0.7rem 0 0 0;
    font-weight: 500;
  }

  span {
    font-weight: 400;
    margin: 0.5rem 0 0.5rem 0;
  }
`;

const Subtitle = styled.h3`
  color: #5a5a5b;
  margin: 0.2rem 0 0.5rem 0;
  font-weight: 500;
`;
