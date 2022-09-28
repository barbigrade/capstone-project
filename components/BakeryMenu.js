import styled from 'styled-components';
import Image from 'next/image';

export default function BakeryMenu({ image, name, ingredients, weight, cost }) {
  return (
    <MenuCard>
      <div>
        <Image src={image} layout="responsive" width={100} height={100} />
      </div>
      <h5>{name}</h5>
      <span>{ingredients}</span>
      <span>{weight}</span>
      <span>{cost}</span>
    </MenuCard>
  );
}

const MenuCard = styled.div`
  border: 1px dashed #000000;
  display: flex;
  font-weight: 500;
  flex-direction: column;
  padding: 0.7rem;

  h5 {
    margin: 0.7rem 0 0 0;
    font-weight: 500;
  }

  span {
    font-weight: 400;
    margin: 0.5rem 0 0.5rem 0;
  }
`;
