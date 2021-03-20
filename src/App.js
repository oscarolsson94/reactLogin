import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  return (
      <div className="App">    

          <div className="auth-wrapper">
              <div className="auth-inner" >
                    <Home />
              </div>
          </div>

    </div>
  );
}

export default App;
