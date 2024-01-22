
import './App.scss'
import { CheckBox } from './components/checkbox/checkbox'
import { Input } from './components/input/input'



function App() {


  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "20px" }}>
      <h1>Hello</h1>

      <CheckBox label='Hello' />

      <Input placeholder='Поиск стран' label='Country' />


    </div>
  )
}

export default App
