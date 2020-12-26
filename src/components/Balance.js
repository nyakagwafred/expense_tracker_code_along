import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function formatKES(num) {
  let p = num.toFixed(2).split('.');
  return (
    'KES ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0);
  return (
    <>
      <h4>Your balance</h4>
      <h1>{formatKES(total)}</h1>
    </>
  );
}
