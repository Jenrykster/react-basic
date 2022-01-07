import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import ShowFormButton from './ShowFormButton';

const NewExpense = (props) => {
  const [formVisible, setFormVisible] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const showFormHandler = () => {
    setFormVisible((prev) => !prev);
  };
  return (
    <div className='new-expense'>
      {formVisible === false && (
        <ShowFormButton onAddButtonClick={showFormHandler} />
      )}
      {formVisible && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelButtonClick={showFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
