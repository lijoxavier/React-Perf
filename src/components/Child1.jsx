import React from 'react'
import { memo } from 'react';

const Child1 = ({ handleByTen }) => {
  console.log('child rendering');
  return (
    <>
      <div>Child1 comp</div>
      <button onClick={handleByTen}>increase by 10</button>
    </>
  );
};

export default memo(Child1)