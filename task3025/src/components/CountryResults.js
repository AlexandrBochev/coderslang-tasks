import React from 'react';

function CountryResults({
    country = 'some string',
    medals = {
      gold: 1,
      silver: 2,
      bronze: 3,
    },
  }) {
    return (
      <div>
        <h2>{country}</h2>
        <ul>
          <li>Gold: {medals.gold}</li>
          <li>Silver: {medals.silver}</li>
          <li>Bronze: {medals.bronze}</li>
          <li>Total: {medals.gold + medals.silver + medals.bronze}</li>
        </ul>
      </div>
  );
}
 
export default CountryResults;