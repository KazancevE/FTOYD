import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 20px;
  background-color: #000;
`;

export const Logo = styled.img`
  height: 26px;
`;

export const Title = styled.h1`
  font-family: 'TacticSans', sans-serif;
  font-size: 32px;
  color: #FFFFFF;
  font-style: italic;
`;

export const RefreshButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 100%;
  max-height: 56px;
  max-width: 204px;
  gap: 10px;
  border-radius: 4px;
  padding: 16px;
  color: #FFFFFF;
  background-color: #EB0237;
  border: none;
  cursor: pointer;
  font-family: Inter;
  font-weight: 600;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
`;