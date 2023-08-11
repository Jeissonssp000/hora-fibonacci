import "../styles/fibonacciList.css"

export default function FibonacciList({ list, seconds }) {
  return (
    <p className="fibonacci_text">
      {seconds ? `${seconds} segundo(s): ${list[seconds - 1]}` : list.join(", ")}
    </p>
  )
}
