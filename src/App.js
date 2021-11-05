import { BrowserRouter as Router} from 'react-router-dom';
import { HeroeData } from './Contexts/HeroesContext';
import Routes from './Routers/Routes';
import './App.css';

function App() {
  return (

    <HeroeData>
      <Router>
          
              <Routes />
         
      </Router>
     </HeroeData>
  );
}

export default App;
