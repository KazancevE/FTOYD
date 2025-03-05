import React from 'react';
import { HeaderContainer, Logo, RefreshButton, Title } from './Header.styles';
import logo from '../../assets/image/Refresh.png'
interface HeaderProps {
  onRefresh: () => void;
}


const Header: React.FC<HeaderProps> = ({ onRefresh }) => {
  return (
    <HeaderContainer>
      <Title>Match Tracker</Title>
      <RefreshButton onClick={onRefresh}>Обновить<Logo src={logo}/></RefreshButton>
    </HeaderContainer>
  );
};

export default Header;