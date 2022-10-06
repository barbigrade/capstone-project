import Link from 'next/link';
import styled from 'styled-components';

export default function PrimaryButton({ linkTo, text }) {
  return (
    <Link href={linkTo}>
      <StyledAnchor>{text}</StyledAnchor>
    </Link>
  );
}

const StyledAnchor = styled.a`
  background-color: rgba(255, 105, 0, 0.99);
  color: #ffffff;
  padding: 10px 15px;

  :hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.8);
    color: rgba(255, 105, 0, 1);
  }
`;
