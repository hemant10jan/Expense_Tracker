import "./Expenses.css"
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import React,{useState} from 'react';
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props){

    const [filteredYear,selectFilterYear]=useState('2021')
    const filterChangeHandler = selectedYear => {
        selectFilterYear(selectedYear)
    }

    const filterExpenses = props.expense.filter( value=>{
        return value.date.getFullYear().toString()===filteredYear;
    })

    // let expensesContent = <p>No Expenses Found.</p>

    // if(filterExpenses.length>0){
    //     expensesContent=filterExpenses.map((value) => 
    //     (<ExpenseItem 
    //        key={value.id} 
    //        t={value.title} 
    //        p={value.price} 
    //        d={value.date}>
    //       </ExpenseItem>))
    // }

    return (
        <Card className="expenses">
        <ExpenseFilter selected={filteredYear}   onChangeFilter={filterChangeHandler}></ExpenseFilter>
        <ExpensesChart expenses={filterExpenses}></ExpensesChart>
        <ExpenseList item={filterExpenses}></ExpenseList>
        </Card>
    )
}

export default Expenses;