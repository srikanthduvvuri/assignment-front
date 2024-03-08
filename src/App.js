
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddCustomer from './customers/AddCustomer';
import EditCustomer from './customers/EditCustomer';
import ViewCustomer from './customers/ViewCustomer';

function App() {
  return (<div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/addcustomer' element={<AddCustomer/>} />
        <Route exact path='/viewcustomer/:custId?' element={<ViewCustomer/>} />
        <Route exact path='/editcustomer/:custId?' element={<EditCustomer/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
