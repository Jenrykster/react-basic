import './NewExpense.css';

const ShowFormButton = (props) => {
  return (
    <button onClick={props.onAddButtonClick} className='new-expense__actions'>
      Add expense
    </button>
  );
};

export default ShowFormButton;
