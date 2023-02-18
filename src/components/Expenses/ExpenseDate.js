import "./ExpenseDate.css"

function ExpenseDate(props){
    const month=props.d.toLocaleString('en-US',{month:'long'});
    const date=props.d.toLocaleString('en-US',{day:'2-digit'});
    const year=props.d.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{date}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
}

export default ExpenseDate;