import { useState } from 'react'
import useInterval from './useInterval'
import { dateFormater } from '../tools/dateFormater';

export default function useActualDate() {
  const [date, setDate] = useState(dateFormater(new Date()))

  useInterval(() => {
    const newDateInfo = dateFormater(new Date());
    setDate(newDateInfo)
  }, 1000)

  return date
}
