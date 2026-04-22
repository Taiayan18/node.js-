import { useState } from 'react'
import './App.css'
import { EmployeeList } from './component/EmployeeList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <EmployeeList/>
    </>
  )
}

export default App