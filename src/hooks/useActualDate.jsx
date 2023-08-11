import { useState } from 'react'
import useInterval from './useInterval'
import { dateFormater } from '../tools/dateFormater';

export default function useActualDate() {
  const [date, setDate] = useState(dateFormater(new Date()));
  const [pause, setPause] = useState(false);

  useInterval(() => {
    const newDateInfo = dateFormater(new Date());
    setDate(newDateInfo)
  }, 1000)
  
  const pauseTime = () => {
    setPause(o => o ? false : { ...date })
  }

  const info = pause || date

  return { ...info, pauseTime, pause: !!pause }
}
