import styled from 'styled-components';
import Image from 'next/image';

export default function BakeryMenu({ image, name, ingredients, weight, cost }) {
  return (
    <MenuCard>
      <TextWrapper>
        <h4>{name}</h4>
        <IngredientWrapper>{ingredients}</IngredientWrapper>
        <Text>{weight}</Text>
        <Text className="cost">{cost}</Text>
      </TextWrapper>
      <Image src={image} layout="responsive" width={60} height={60} />
    </MenuCard>
  );
}

const MenuCard = styled.div`
  border: 1px dashed #000000;
  display: grid;
  grid-template-columns: 60% 40%;
  font-weight: 500;
  padding: 0.7rem;

  h4 {
    margin: 0.5rem 0 0.7rem 0;
    font-weight: 600;
  }

  .ingredients {
    padding-right: 0.5rem;
  }

  .cost {
    font-weight: 600;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.span`
  font-weight: 400;
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
`;

const IngredientWrapper = styled(Text)`
  list-style-type: none;
  padding: 0;
`;
