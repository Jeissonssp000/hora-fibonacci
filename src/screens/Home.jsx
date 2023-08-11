import "../styles/home.css"
import { InfoContext } from '../context/InfoContext';
import FibonacciList from "../components/FibonacciList";

export default function Home() {
  const { date, memoFibonacci } = InfoContext()

  const min1 = parseInt(date.minutes[0])
  const min2 = parseInt(date.minutes[1])

  const list = memoFibonacci[date.minutes].slice(0, date.seconds)

  return (
    <div className="home_container full vertical">
      <h2>Bienvenid@</h2>
      <h3>{date.date}</h3>
      <h3>- {date.hour} -</h3>
      <h4>Descripción</h4>
      <p className="home_description">
        La serie de Fibonacci es una secuencia matemática en la que cada
        número es la suma de los dos números anteriores. La serie comienza
        con 0 y 1, y luego cada número siguiente es la suma de los dos números
        anteriores. Así que la serie comienza: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
      </p>
      <p className="home_description">
        Esta aplicación genera una serie fibonacci a partir de los minutos
        ({date.minutes}) y segundos actuales ({date.seconds}), usando el primer
        y segundo digito de los minutos como los primeros valores de la serie:
        {` ${min1} + ${min2} = ${min1 + min2}`}
        , los segundos representan la cantidad de operaciones que se realizan
      </p>
      <FibonacciList list={list} seconds={date.seconds} />
      <div className="flex">
        <button onClick={date.pauseSeconds}>{date.pause ? "Continuar" : "Pausar"} serie</button>
      </div>
      <FibonacciList list={list} />
    </div>
  )
}
