import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderWrapper>
      <HeadLine>DAILY BREAD</HeadLine>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  border-bottom: 1px dashed #000000;
  display: flex;
  justify-content: center;
  width: 100%;
`;
const HeadLine = styled.h1`
  margin: 0.7rem 0 0.7rem;
  font-weight: 300;
`;
