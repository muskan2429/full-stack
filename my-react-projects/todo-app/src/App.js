import Header from './Header.js'
import Footer from './Footer.js'
import AddToDo from './AddToDo.js'
import Showtodo from './Showtodo.js'
import DoneTodopage from './DoneTodopage.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
         <Route path='/add' element={<AddToDo />} />
         <Route path='/show' element={<Showtodo />} />
          <Route path='/done' element={<DoneTodopage />} /> 
         
        </Routes>
        
        
        <Footer />
      </div>
      </BrowserRouter>
  
  );
}

export default App;