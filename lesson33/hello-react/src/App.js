import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {  
  return (
    <div>
      <h1>האתר הראשון בריאקט</h1>
      
      <div className="frame">
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
