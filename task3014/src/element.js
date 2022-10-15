import React from 'react';

export const element = (a = '_self') => {
  const link = <a href='google.com' target={a}>Google</a>
  return link;
};
