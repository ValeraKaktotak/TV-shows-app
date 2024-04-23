import { useState } from 'react'
import { Icons } from './assets/icons'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={Icons.Close} alt='' />
    </>
  )
}
