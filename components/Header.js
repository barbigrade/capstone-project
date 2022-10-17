import styled from 'styled-components';
import Link from 'next/link';
import useLocalStorage from '../hooks/useLocalStorage';

export default function Header() {
  return (
    <HeaderWrapper>
      <Link href={'/'}>
        <Anchor>
          <HeadLine>DAILY BREAD</HeadLine>
        </Anchor>
      </Link>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 3.899rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;
const HeadLine = styled.h1`
  margin: 0.7rem 0 0.7rem;
  font-weight: 300;
`;

const Anchor = styled.a`
  text-decoration: none;
`;
