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
  color: white;
  border: 1px solid white;
  padding: 10px 15px;
`;
