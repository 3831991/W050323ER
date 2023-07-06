import './App.css';
import Counter from './components/Counter'
import Navbar from './components/Navbar';

function App() {  
  return (
    <div>
      <h1>האתר הראשון בריאקט</h1>
      
      <div className="frame">
        <Navbar />
        <Counter />
      </div>
    </div>
  );
}

export default App;
