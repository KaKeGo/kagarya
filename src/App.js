import { Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout'
import Home from './content/Home/Home'
import About from './content/About/About'
import Register from './content/Accounts/Register/Register'
import Login from './content/Accounts/Login/Login'
import UserStatus from './content/Accounts/UserStatus/UserStatus';
import Settings from './content/Accounts/UserInterface/Settings/Settings';
import ResetPassword from './content/Accounts/ResetPassword/ResetPassword';
import ResetPasswordConfrim from './content/Accounts/ResetPasswordConfirm/ResetPasswordConfrim';




function App() {
  return (
    <div className="App">
      <UserStatus />
      <Layout>
        <Routes>
          

          {/* Content */}
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          {/* Accounts */}
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/reset-password' element={<ResetPassword />}/>
          <Route path='/reset-password-confirm/:token' element={<ResetPasswordConfrim />}/>
          {/* User interface */}
          <Route path='/user/settings' element={<Settings />}/>

        </Routes>
      </Layout>
    </div>
  );
}

export default App;
