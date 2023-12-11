
import './App.css';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import NewNavbar from './components/NewNavbar';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import CodeforInter from './components/CodeforInter';
import EditUser from './components/EditUser';

function App() {
  return (
    <div>
      <Router>
        <NewNavbar />
        <Routes>
          <Route path='/' element={<CodeforInter/>} />
          <Route path='/add' element={<AddUser />} />
          <Route path='/allusers' element={<AllUsers />} />                   
          <Route path='/edituser/:id' element={<EditUser />} />                   
        </Routes>
      </Router>
    </div>
  );
}

export default App;
