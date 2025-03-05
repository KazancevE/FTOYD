import React from 'react';
import { MatchCardContainer, Team, Score, Status, Logo } from './MatchCard.styles';
import { Match } from '../../api/api';
import logo from '../../assets/image/icon.png';

interface MatchCardProps {
  match: Match;
}



const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  return (
    <MatchCardContainer>
      <Team><Logo src={logo}/> {match.homeTeam.name}</Team>
      <Score>
        {match.homeScore} : {match.awayScore}
        <Status status={match.status}>{match.status}</Status>
      </Score>
      <Team>{match.awayTeam.name} <Logo src={logo}/></Team>
    </MatchCardContainer>
  );
};

export default MatchCard;