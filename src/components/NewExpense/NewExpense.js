import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import React,{useState} from 'react'

function NewExpense(props){

    const[isEditing,setisEditing] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData ={
            ...enteredExpenseData,
            id:Math.random().toString()
        }

        props.onAddExpense(expenseData);
        setisEditing(false)
    }

    const startEditing = () =>{
        setisEditing(true);
    }

    const stopEditing = () =>{
        setisEditing(false);
    }

    return (
    <div className="new-expense">
        {!isEditing && <button onClick={startEditing}>Add new expense</button>}
        {isEditing && <ExpenseForm onCancel={stopEditing} onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>}
    </div>
    );
}

export default NewExpense;