import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderWrapper>
      <h1>Daily Bread</h1>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  font-weight: bold;
  width: 100%;
`;
