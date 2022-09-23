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
    <div>
      <div>
        <Image src={image} layout="responsive" />
      </div>
      <h2>{name}</h2>
      <h3>{subtitle}</h3>
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
    </div>
  );
}
