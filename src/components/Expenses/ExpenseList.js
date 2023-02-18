import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'
const ExpenseList = (props) =>{

    if(props.item.length===0){
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }

    return (
       <ul className='expenses-list'>
        {props.item.map((value) => 
            (< ExpenseItem 
               key={value.id} 
               t={value.title} 
               p={value.price} 
               d={value.date}>
              </ExpenseItem>))}
       </ul>

    );
}

export default ExpenseList;