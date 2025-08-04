import { Header } from './Header'
import { HomePage } from './HomePage'
import { Footer } from './Footer'
import { ProfilePage } from './ProfilePage';
import { FriendPage } from './FriendPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // BrowserRouter component used to define routing
    <BrowserRouter>
      <Header />

      {/* Routes component used to group route */}
      <Routes>
        {/* Route component defines path with our page component */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/friends" element={<FriendPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export { App };
