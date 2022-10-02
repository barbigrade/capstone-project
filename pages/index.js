import styled from 'styled-components';
import Head from 'next/head';
import fsPromises from 'fs/promises';
import path from 'path';
import Bakery from '../components/Bakery';
import Link from 'next/link';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const bakeryData = JSON.parse(jsonData);

  return {
    props: bakeryData,
  };
}

export default function Home(props) {
  const bakeries = props.bakeries;
  return (
    <>
      <Head>
        <title>DAILY BREAD</title>
      </Head>

      <BakeryListContainer>
        <h2>All Bakeries</h2>
        <BakeryList>
          {bakeries.map((bakery) => (
            <Link href={`/bakeries/${encodeURIComponent(bakery.id)}`} passHref>
              <a>
                <Bakery
                  name={bakery.name}
                  subtitle={bakery.subtitle}
                  priceRange={bakery.priceRange}
                  score={bakery.score}
                  key={bakery.id}
                />
              </a>
            </Link>
          ))}
        </BakeryList>
      </BakeryListContainer>
    </>
  );
}

const BakeryListContainer = styled.div`
  margin: 0 auto;
  width: 85vw;

  h2 {
    font-weight: 400;
    margin: 1rem 0 0.7rem 0;
  }

  a {
    text-decoration: none;
    outline: none;
  }

  a:link {
    color: #000000;
  }

  a:visited {
    text-decoration: none;
    color: #000000;
  }

  a:active {
    cursor: pointer;
  }
`;

const BakeryList = styled.ul`
  display: grid;
  gap: 1rem;
  margin-top: 0;
  padding: 0;
`;
