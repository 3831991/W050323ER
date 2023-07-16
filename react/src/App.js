import './App.css';
import Navbar from './components/Navbar';
import Router from './Router';

function App() {  
  return (
    <div>
      <h1>האתר הראשון בריאקט</h1>
      
      <div className="frame">
        <Navbar />
        <Router />
      </div>
    </div>
  );
}

export default App;
