import './App.css'
import { InfoContext } from './context/InfoContext';

function App() {
  const { date, memoFibonacci } = InfoContext()

  return (
    <div className="full vertical">
      <h2>Bienvenid@</h2>
      <h3>{date.date}</h3>
      <h3>{date.hour}</h3>
      <h4>Descripción</h4>
      <p>
        La serie de Fibonacci es una secuencia matemática en la que cada
        número es la suma de los dos números anteriores. La serie comienza
        con 0 y 1, y luego cada número siguiente es la suma de los dos números
        anteriores. Así que la serie comienza: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
      </p>
      <p>{memoFibonacci[date.seed].slice(0, date.seconds).join(", ")}</p>
    </div>
  )
}

export default App
