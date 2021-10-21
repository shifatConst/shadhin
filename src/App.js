import { Route, Switch } from 'react-router';
import './App.css';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import Employee from './components/Employee/Employee';
import AddUser from './components/AddUser/AddUser';
import UserDetails from './components/UserDetails/UserDetails';
import UpdateUser from './components/UpdateUser/UpdateUser.jsx';


function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/employee">
          <Employee />
        </Route>
        <Route exact path="/addUser">
          <AddUser />
        </Route>
        <Route exact path="/userDetails/:id">
          <UserDetails />
        </Route>
        <Route exact path="/updateUser/:id">
          <UpdateUser />
        </Route>
      </Switch>


    </div>
  );
}

export default App;
