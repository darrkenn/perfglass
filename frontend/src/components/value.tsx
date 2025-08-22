import { useEffect, useState } from "react"
import { getValue } from "../api/test"

export default function Value() {
  const [state, setState] = useState("?");


  useEffect(() => {
    async function fetchValue() {
      const value = await getValue();
      setState(value)
    }

    const interval = setInterval(() => {
      fetchValue()
    }, 1000)

    return () => clearInterval(interval)

  }, [])


  return (
    <div>
      <h1 className="text-5xl font-extrabold">{state}</h1>
    </div>
  )
}

