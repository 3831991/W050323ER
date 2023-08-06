import './App.css';
import Articles from './articles/Articles';

export const TOKEN = "d2960d76-3431-11ee-b3e9-14dda9d4a5f0";

function App() {
    return (
        <div className="App">
            <h1>אתר חדשות שלי</h1>

            <Articles />
        </div>
    );
}

export default App;
