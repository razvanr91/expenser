import './ExpenseItem.css';

export default function ExpenseItem(props) {

    return (
        <div className="expense-item">
            <div>{props.date.toUTCString()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">£{props.amount}</div>
            </div>
        </div>
    );
}