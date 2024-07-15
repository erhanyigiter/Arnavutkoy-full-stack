
import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const CategoryList = ({ kategoriler, secilikategori, kategoridegister }) => {
  return (
    <ListGroup>
      {kategoriler.map((kategori) => (
        <ListGroupItem
          active={kategori.categoryName === secilikategori}
          key={kategori.id}
          onClick={() => kategoridegister(kategori)}
        >
          {kategori.categoryName}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default CategoryList;
