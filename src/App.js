import { Container } from 'react-bootstrap';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Water',
      amount: 13.22,
      date: new Date(2021, 6, 11)
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
      date: new Date(2021, 11, 26)
    },
    {
      id: 'e4',
      title: 'New Laptop',
      amount: 1500,
      date: new Date(2021, 10, 31)
    }
  ]
  return (
    <Container className="mt-5">
      <NewExpense />
      <Expenses expenses={expenses} />
    </Container>
  );
}

export default App;
