import React from 'react';

const MovieTitle = (props) => (
  <div>

<span style="color:#660066;font-weight:bold">{props.item.description}</span>
<span style="color:#3333cc;font-weight:bold">{props.item.quantity}</span>

  </div>);

export default MovieTitle;
