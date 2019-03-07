import React from 'react';
import Wrapper from './styled/List';

const List = ({ items = [] }) => (
  <Wrapper>
    {
      items.map(({ name, description }) => {
        return (
          <li>
            <h4>{name}</h4>
            <p>{description}</p>
          </li>
        );
      })
    }
  </Wrapper>
);

export default List;