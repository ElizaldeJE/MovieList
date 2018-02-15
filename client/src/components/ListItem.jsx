import React from 'react';

const MovieTitle = (props) => (<div>
  <span>{props.item.description}</span>

  <span>{props.item.quantity}</span>

  </div>);

export default MovieTitle;
