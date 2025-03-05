import styled from 'styled-components';

export const ErrorBannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  padding: 10px;
  background-color: #ff6b6b;
  color: white;
  border-radius: 8px;
  margin: 10px 0;
`;

export const BannerBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 60%;
`

export const RefreshButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
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