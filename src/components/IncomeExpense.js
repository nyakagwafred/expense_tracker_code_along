import React from 'react';

export function IncomeExpense() {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +KES0.00
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-plus" className="money minus">
          +KES0.00
        </p>
      </div>
    </div>
  );
}
