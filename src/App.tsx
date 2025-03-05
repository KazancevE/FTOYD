import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import MatchCard from './components/MatchCard/MatchCard';
import ErrorBanner from './components/ErrorBanner/ErrorBanner';
import { DefaultApi, Match } from './api/api';
import { Configuration } from './api/configuration';
import { GlobalStyles } from './styles';

const config = new Configuration({
  basePath: 'https://app.ftoyd.com/fronttemp-service',
});

const api = new DefaultApi(config);

const AppContainer = styled.div`
  padding: 20px;
`;

const MatchesList = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

const App: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMatches = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.fetch();
      console.log(response);
      if (response.data.ok) {
        setMatches(response.data.data.matches);
      } else {
        setError('Ошибка: не удалось загрузить информацию');
      }
    } catch (error) {
      setError('Ошибка: не удалось загрузить информацию');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMatches();
  }, []);

  return (
    <AppContainer>
      <GlobalStyles />
      <Header onRefresh={fetchMatches} error={error}/>
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <MatchesList>
          {matches.map((match) => (
            <MatchCard key={match.title} match={match} />
          ))}
        </MatchesList>
      )}
    </AppContainer>
  );
};

export default App;