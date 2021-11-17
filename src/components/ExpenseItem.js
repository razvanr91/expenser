import './ExpenseItem.css';

export default function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>November 26th 2021</div>
            <div className="expense-item__description">
                <h2>This is an expense item!</h2>
                <div className="expense-item__price">£65</div>
            </div>
        </div>
    );
}