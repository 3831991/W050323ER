import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Router from './Router';

function App() {  
  return (
    <div>
      <h1>האתר הראשון בריאקט</h1>
      
      <div className="frame">
        <Navbar />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
