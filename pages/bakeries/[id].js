import styled from 'styled-components';
import BakeryDetails from '../../components/BakeryDetails';
import BakeryMenu from '../../components/BakeryMenu';
import bakeries from '../../data.json';

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
  return (
    <>
      <BakeryContainerTop>
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
            ingredients={item.ingredients.map((ingredient, index) => {
              return <li key={index}>{ingredient}</li>;
            })}
            weight={item.weight}
            cost={item.cost}
            key={item.productId}
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
`;

const BakeryContainerTop = styled(BakeryContainer)`
  margin-bottom: 1rem;
`;
