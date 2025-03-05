import React from 'react';
import { BannerBody, ErrorBannerContainer, RefreshButton } from './ErrorBanner.styles';
import logo from '../../assets/image/Refresh.png'
import { Logo } from '../Header/Header.styles';
import attention from '../../assets/image/alert-triangle.png'

interface ErrorBannerProps {
  message: string;
  onRefresh: () => void;
}

const ErrorBanner: React.FC<ErrorBannerProps> = ({ message, onRefresh }) => {
  return (
    <ErrorBannerContainer>
      <BannerBody>
        <Logo src={attention} alt="Refresh" />
        <p>{message}</p>
      </BannerBody>
      <RefreshButton onClick={onRefresh}>Обновить<Logo src={logo}/></RefreshButton>
    </ErrorBannerContainer>
  );
};

export default ErrorBanner;