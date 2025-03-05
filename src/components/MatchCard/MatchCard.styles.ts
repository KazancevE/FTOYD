import styled from 'styled-components';
interface StatusProps {
  status: string;
}
export const MatchCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin: 10px 0;
  background-color: #0B0E12;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Team = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: #FFFFFF;
`;

export const Score = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2px;
  font-size: 24px;
  font-weight: bold;
  color: #FFFFFF;
`;

export const Status = styled.div<StatusProps>`
  font-size: 14px;
  border-radius: 4px;
  color: #FFFFFF;
  padding: 2px 6px;
  background-color: ${props => {
    switch (props.status) {
      case 'Finished':
        return '#EB0237';
      case 'Ongoing':
        return '#43AD28';
      case 'Pending':
        return 'blue';
      default:
        return 'grey';
    }
  }};
`;

export const Logo = styled.img`
  height: 50px;
`;