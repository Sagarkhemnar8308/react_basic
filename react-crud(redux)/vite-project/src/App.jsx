import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './component/signup';
import Login from './component/login';
import VerifyOtp from './component/verifyotp';
import DashBoard from './component/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/verifyOtp' element={<VerifyOtp />}></Route>
        <Route path='/dashboard' element={<DashBoard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
