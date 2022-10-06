import Link from 'next/link';
import styled from 'styled-components';

export default function BrowseButton({ linkTo }) {
  return (
    <Link href={linkTo}>
      <StyledAnchor>Browse Bread</StyledAnchor>
    </Link>
  );
}

const StyledAnchor = styled.a`
  color: white;
  border: 1px solid white;
  padding: 10px 15px;
`;
