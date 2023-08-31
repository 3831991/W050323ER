import './App.css';
// import TextField from '@mui/material/TextField';
import Navbar from './components/Navbar';
import Login from './user/Login';

function App() {
    return (
        <>
            <Navbar />
            <Login />
        </>
        // <div className="App">
        //     <TextField id="outlined-basic" label="משהו אחר" variant="outlined" />
        // </div>
    );
}

export default App;
