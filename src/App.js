import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Forgot from './components/Forgot';

function App() {
    return (
    <Router>
        <div className="App">    
            <Navigation />
          
            <div className="auth-wrapper">
                <div className="auth-inner" >
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route exact path="/login">
                                <Login />
                            </Route>
                            <Route exact path="/register">
                                <Register />
                            </Route>
                            <Route exact path="/forgot">
                                <Forgot />
                            </Route>
                            <Route exact path="/reset/:id">
                                <ResetPassword />
                            </Route>
                        </Switch>    
                </div>
            </div>

            </div>
    </Router>
  );
}

export default App;
