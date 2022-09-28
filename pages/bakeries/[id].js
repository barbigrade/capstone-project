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

export function getAllProductMenus() {
  const allProductMenus = bakeries.bakeries.map((bakeries) => {
    return bakeries.productMenu;
  });
  return allProductMenus;
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
  return (
    <>
      <BakeryContainer>
        <BakeryDetails
          image={bakeryData.image}
          name={bakeryData.name}
          subtitle={bakeryData.subtitle}
          score={bakeryData.score}
          delivery={bakeryData.delivery}
          about={bakeryData.about}
          key={bakeryData.id}
        />
      </BakeryContainer>
      <BakeryContainer>
        <BakeryMenu
          name={bakeryData.name}
          ingredients={bakeryData.ingredients}
          weight={bakeryData.weight}
          cost={bakeryData.cost}
          key={bakeryData.productId}
        />
      </BakeryContainer>
    </>
  );
}

const BakeryContainer = styled.div`
  margin: 0 auto;
  width: 95vw;
`;
