import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSE=[
  {id:Math.random.toString(), title:"Milk",price:"60",date:new Date(2020,3,20)},
  {id:Math.random.toString(), title:"Trump Card",price:"5",date:new Date(2021,4,20)},
  {id:Math.random.toString(), title:"Anda",price:"6",date:new Date(2020,3,18)},
  {id:Math.random.toString(), title:"Maggie",price:"12",date:new Date(2020,2,18)}
]

function App() {
  // const expense=[
  //   {title:"Milk",price:"60",date:new Date(2023,3,20)},
  //   {title:"Trump Card",price:"5",date:new Date(2023,4,20)},
  //   {title:"Anda",price:"6",date:new Date(2023,3,18)}
  // ]

  
  const [expenses,setExpenses] = useState(DUMMY_EXPENSE);

  function addExpenseHandler(expense){
    console.log(expense)
    setExpenses((prevExpenses)=>{

      // console.log(prevExpenses);
      return [expense,...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expense={expenses}></Expenses>
    </div>
  );

  // return React.createElement('div',{},React.createElement(Expenses,{expense:expense}))
  // JSX is converted into above line and then in code which we have watched in console.
  
}

export default App;
