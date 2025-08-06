import Header from './Header.js'
import Footer from './Footer.js'
import AddToDo from './AddToDo.js'
import Showtodo from './Showtodo.js'
import DoneTodopage from './DoneTodopage.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState([]);
  const [doneArr, setDoneArr] = useState([]);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path='/add' element={<AddToDo todo={todo} setTodo={setTodo} />} />
          <Route path='/show' element={<Showtodo todo={todo} setTodo={setTodo} setDone={setDoneArr} />} />
          <Route path='/done' element={<DoneTodopage todo={doneArr} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;