import { useState } from "react";
import { Header1 } from "./Header1";
import { HomePage } from "./HomePage";
import { Footer } from "./Footer";
import { CreateAccountPage } from "./CreateAccountPage";
import { LoginPage } from "./LoginPage";
import { Header2 } from "./Header2";
import { BankDetailPage } from "./BankDetailPage";
import { TransferPage } from "./TransferPage";
import { TransactionPage } from "./TransactionPage";
import { LogoutPage } from "./LogoutPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      {isLoggedIn ? <Header2 /> : <Header1 />}

      {/* Routes component used to group route */}
      <Routes>
        {/* Route component defines path with our page component */}
        <Route path="/" element={<HomePage/>} />
        <Route path="/create account" element={<CreateAccountPage/>} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/bank detail" element={<BankDetailPage/>} />
        <Route path="/transfer" element={<TransferPage/>} />
        <Route path="/transaction" element={<TransactionPage/>} />
        <Route path="/logout" element={<LogoutPage/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App;