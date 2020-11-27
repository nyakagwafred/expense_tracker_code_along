//rac
import React from 'react';

export const AddTransaction = () => {
  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div class="form-control">
          <label>Text</label>
          <input type="text" placeholder="Enter text..." />
        </div>
        <div class="form-control">
          <label>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" placeholder="Enter amount..." />
        </div>
        <button class="btn">Add transaction</button>
      </form>
    </>
  );
};
