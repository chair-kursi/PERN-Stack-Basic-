import './App.css';
import Table from './components/Table';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Employee from './components/Employee';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header"> 
      <Routes>
        <Route exact path='/' element={<Table/>}/>
        <Route exact path='/addEmployee' element={<AddEmployee/>}/>
        <Route exact path='/updateEmployee/:_id' element={<UpdateEmployee/>}/>
        <Route exact path='/employee/:_id' element={<Employee/>} />
      </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
