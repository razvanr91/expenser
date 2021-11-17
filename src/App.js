import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Water',
      amount: 13.22,
      date: new Date(2021,6,11)
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 640.99,
      date: new Date(2020, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 62.44,
      date: new Date(2021, 11,26)
    },
    {
      id: 'e4',
      title: 'New Laptop',
      amount: 1500,
      date: new Date(2021,10,31)
    }
  ]
  return (
    <div className="App">
        <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
        <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
        <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
    </div>
  );
}

export default App;
