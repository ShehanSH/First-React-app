import React, { useState } from "react";
import "./ExpensesForm.css";
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  //using one useState method for above useState method
// const [userInput, setUserInput] = useState({

//     enteredTitle:'',
//     enteredAmount: '',
//     enteredDate: ''

// });


  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    //multipule useState 1 way
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    // });

    //multipule useState 2 way - updating state that depends on the previous data
    // setUserInput((prevState) => {

    //     return {...prevState, enteredTitle: event.target.value};
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    // });
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onchange = {dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
