import { Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout'
import Home from './content/Home/Home'
import About from './content/About/About'
import Register from './content/Accounts/Register/Register'
import Login from './content/Accounts/Login/Login'



function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>

          {/* Content */}
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          {/* Accounts */}
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>

        </Routes>
      </Layout>
    </div>
  );
}

export default App;
