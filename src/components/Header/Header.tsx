import React from 'react';
import { HeaderContainer, Logo, RefreshButton, Title } from './Header.styles';
import logo from '../../assets/image/Refresh.png'
import ErrorBanner from '../ErrorBanner/ErrorBanner';
interface HeaderProps {
  onRefresh: () => void;
  error: string | null
}


const Header: React.FC<HeaderProps> = ({ onRefresh, error }) => {
  return (
    <HeaderContainer>
      <Title>Match Tracker</Title>
     {error ? 
      (
        <ErrorBanner message={error} onRefresh={onRefresh} />
      ) : (
        <RefreshButton onClick={onRefresh}>Обновить<Logo src={logo}/></RefreshButton>
      ) }
    </HeaderContainer>
  );
};

export default Header;