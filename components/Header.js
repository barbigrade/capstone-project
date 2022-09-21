import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderWrapper>
      <h1>DAILY BREAD</h1>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;

  h1 {
    font-weight: 300;
  }
`;
