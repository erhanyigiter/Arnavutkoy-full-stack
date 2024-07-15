import React, { useState } from 'react';
import InputList from './InputList';
import MatchButton from './MatchButton';
import MatchList from './MatchList';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import { Container, Row, Col } from 'reactstrap';

const RandomMatcher = () => {
  const [list1, setList1] = useState('');
  const [list2, setList2] = useState('');
  const [matches, setMatches] = useState([]);

  const handleList1Change = (e) => setList1(e.target.value);
  const handleList2Change = (e) => setList2(e.target.value);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleMatch = () => {
    const arr1 = list1.split(',').map(item => item.trim());
    const arr2 = list2.split(',').map(item => item.trim());

    if (arr1.length !== arr2.length) {
      alertify.error('Both lists must have the same number of values.', 5);
      return;
    }

    const shuffledArr1 = shuffleArray(arr1);
    const shuffledArr2 = shuffleArray(arr2);

    const newMatches = shuffledArr1.map((item, index) => `${item} - ${shuffledArr2[index]}`);
    setMatches(newMatches);
  };

  return (
    <Container className="container-custom">
      <h1 className="text-center mb-4">Random Matcher</h1>
      <Row>
        <Col md={6}>
          <InputList label="List 1:" value={list1} onChange={handleList1Change} />
        </Col>
        <Col md={6}>
          <InputList label="List 2:" value={list2} onChange={handleList2Change} />
        </Col>
      </Row>
      <Row className="text-center mt-3">
        <Col>
          <MatchButton onClick={handleMatch} />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <MatchList matches={matches} />
        </Col>
      </Row>
    </Container>
  );
};

export default RandomMatcher;
