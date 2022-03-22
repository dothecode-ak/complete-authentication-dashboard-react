
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/pages/Layout';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import LoginRegis from './components/pages/auth/LoginRegis';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />

            <Route path="login" element={<LoginRegis />} />
          </Route>
          {/* <Route path="/home" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>   */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
