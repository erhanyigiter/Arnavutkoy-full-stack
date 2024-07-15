import React from 'react';
import { Button } from 'reactstrap';

const MatchButton = ({ onClick }) => {
  return (
    <Button color="primary" onClick={onClick}>Match</Button>
  );
};

export default MatchButton;
