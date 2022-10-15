import React, { createElement } from 'react';
import ReactDOM from 'react-dom';

// const heading = <h2>Wow, I did it!</h2>;
const heading = createElement(
  "h2",
  null,
  "Wow, I did it!",
);

ReactDOM.render(heading, document.getElementById('root'));
