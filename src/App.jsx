import { BrowserRouter as Router } from "react-router-dom"
import {Routes, Route} from 'react-router-dom'
import Signup from "./pages/Signup"
import Login from "./pages/Login"
const App = () => {
  return (
    <Router>
      <div>
        <section>
          <Routes>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </section>
      </div>
    </Router>
  )
}

export default App