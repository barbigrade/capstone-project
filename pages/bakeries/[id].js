import styled from 'styled-components';
import BakeryDetails from '../../components/BakeryDetails';
import BakeryMenu from '../../components/BakeryMenu';
import bakeries from '../../data.json';
import BackButton from '../../components/BackButton';
import useLocalStorage from '../../hooks/useLocalStorage';

export function getAllBakeries() {
  const allBakeries = bakeries.bakeries.map((bakeries) => {
    return { ...bakeries };
  });
  return allBakeries;
}

export function getBakeryById(id) {
  return bakeries.bakeries.find((bakery) => bakery.id === id);
}

export function getStaticPaths() {
  const allBakeriesData = getAllBakeries();
  const paths = allBakeriesData.map((bakeries) => {
    return { params: { id: bakeries.id } };
  });

  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps(context) {
  const bakeryId = context.params.id;
  const bakeryData = getBakeryById(bakeryId);

  return {
    props: { bakeryData },
  };
}

export default function BakeryDetailPage({ bakeryData }) {
  const productMenu = bakeryData.productMenu;

  const [cart, setCart] = useLocalStorage('_cart', []);

  function addToCart(item) {
    const existingCartItem = cart.find(
      (cartItem) => cartItem.productId === item.productId
    );
    if (existingCartItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.productId === existingCartItem
            ? { ...existingCartItem }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item }]);
    }
  }

  return (
    <>
      <BakeryContainerTop>
        <BackButton linkTo={'/'} />
        <BakeryDetails
          image={bakeryData.image}
          name={bakeryData.name}
          subtitle={bakeryData.subtitle}
          score={bakeryData.score}
          delivery={bakeryData.delivery}
          about={bakeryData.about}
          key={bakeryData.id}
        />
      </BakeryContainerTop>
      <BakeryContainer>
        {productMenu.map((item) => (
          <BakeryMenu
            image={item.image}
            name={item.name}
            product={item}
            ingredients={item.ingredients.map((ingredient, index) => {
              return <li key={index}>{ingredient}</li>;
            })}
            weight={item.weight}
            cost={item.cost}
            productId={item.productId}
            key={item.productId}
            onAddToCart={addToCart}
          />
        ))}
      </BakeryContainer>
    </>
  );
}

const BakeryContainer = styled.div`
  display: grid;
  gap: 1rem;
  margin: 0 auto;
  padding-bottom: 1rem;
  width: 95vw;
  max-width: 40rem;
`;

const BakeryContainerTop = styled(BakeryContainer)`
  margin-bottom: 1rem;
`;
