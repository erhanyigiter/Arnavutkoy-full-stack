import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const MatchList = ({ matches }) => {
  return (
    <div>
      <h2>Matches:</h2>
      <ListGroup>
        {matches.map((match, index) => (
          <ListGroupItem key={index} className="match-item">{match}</ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default MatchList;
