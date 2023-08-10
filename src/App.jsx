import './App.css'
import { dateFormater } from './tools/dateFormater';
import { fibonacci, memoTable } from './tools/fibonacci';

const date = dateFormater(new Date());
const memoFibonacci = memoTable();

function App() {

  return (
    <div className="full center vertical">
      <h2>Bienvenid@</h2>
      <h3>{date.date}</h3>
      <h3>{date.hour}</h3>
    </div>
  )
}

export default App
