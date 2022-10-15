import React from 'react';

export const element = (num1, num2) => {
  const sum = num1 + num2;
  const res = <h4>The sum is: {sum}</h4>;
  return res;
};
