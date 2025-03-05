import React from 'react';
import { ErrorBannerContainer, RefreshButton } from './ErrorBanner.styles';

interface ErrorBannerProps {
  message: string;
  onRefresh: () => void;
}

const ErrorBanner: React.FC<ErrorBannerProps> = ({ message, onRefresh }) => {
  return (
    <ErrorBannerContainer>
      <p>{message}</p>
      <RefreshButton onClick={onRefresh}>Обновить</RefreshButton>
    </ErrorBannerContainer>
  );
};

export default ErrorBanner;