import styled from 'styled-components';
import Image from 'next/image';

export default function CartItem({
  image,
  name,
  cost,
  ingredients,
  weight,
  // qty,
  productId,
  onRemoveFromCart,
  // count,
}) {
  return (
    <CartItemWrapper>
      <TextWrapper>
        <h4>{name}</h4>
        <IngredientWrapper>{ingredients}</IngredientWrapper>
        <Text>{weight}</Text>
        <Text className="cost">€{cost}</Text>
      </TextWrapper>
      <ImageWrapper>
        <Image src={image} layout="fixed" width={135} height={135} />
      </ImageWrapper>
      <ButtonWrapper>
        <RemoveFromBasketButton onClick={() => onRemoveFromCart(productId)}>
          Remove from Basket
        </RemoveFromBasketButton>
      </ButtonWrapper>
    </CartItemWrapper>
  );
}

const CartItemWrapper = styled.div`
  border: 1px dashed #000000;
  display: grid;
  grid-template-columns: 60% 40%;
  font-weight: 500;
  padding: 0.7rem;

  h4 {
    margin: 0.5rem 0 0.7rem 0;
    font-weight: 600;
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

const IngredientWrapper = styled.ul`
  list-style: none;
  padding: 0;
  font-weight: 400;
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
`;

const ImageWrapper = styled.div`
  display: grid;
  justify-items: right;
`;

const ButtonWrapper = styled.div`
  margin-top: 0.5rem;
`;

const RemoveFromBasketButton = styled.button`
  background-color: #ffffff;
  border: 1px solid #000000;
  color: #000000;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  padding: 10px 15px;
`;
