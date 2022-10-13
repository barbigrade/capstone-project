import styled from 'styled-components';
import Head from 'next/head';
import fsPromises from 'fs/promises';
import path from 'path';
import Bakery from '../components/Bakery';
import Link from 'next/link';
import Image from 'next/image';

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
          <ImageWrapper>
            <Image
              alt=" "
              src="https://res.cloudinary.com/drthrskm2/image/upload/c_lfill,g_south,h_900,w_1500/v1665659202/capstone-project/bakery%20overviews/shoppingcartbackground_u1oxmv.jpg"
              layout="responsive"
              width={300}
              height={200}
            />
          </ImageWrapper>
          {bakeries.map((bakery) => (
            <Link
              key={bakery.id}
              href={`/bakeries/${encodeURIComponent(bakery.id)}`}
            >
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
  max-width: 40rem;

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

const ImageWrapper = styled.div`
  border: 1px dashed #000000;
  padding: 0.7rem;
`;

const BakeryList = styled.ul`
  display: grid;
  gap: 1rem;
  margin-top: 0;
  padding: 0;
`;
