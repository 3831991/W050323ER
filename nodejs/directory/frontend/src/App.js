import './App.css';
import { useEffect, useState } from 'react';
import { FcFolder } from 'react-icons/fc';
import { AiFillFolderAdd } from 'react-icons/ai';

function App() {
    const [folders, setFolders] = useState([]);
    const [path, setPath] = useState('');

    useEffect(() => {
        fetch("http://localhost:8200/folders")
        .then(res => res.json())
        .then(data => setFolders(data));
    }, []);

    const openFolder = folder => {
        const _path = `${path}/${folder}`;

        fetch(`http://localhost:8200/folders?path=${_path}`)
        .then(res => res.json())
        .then(data => {
            setPath(_path);
            setFolders(data);
        });
    }

    return (
        <>
            <h1>ניהול תיקיות</h1>
            <div className="frame">
                <p dir='ltr'>{path}</p>
                <div className='folder'>
                    <div className='icon'><AiFillFolderAdd /></div>
                    <p><input type="text" /></p>
                </div>
                {
                    folders.map(f =>
                        <div className='folder' key={f} onClick={() => openFolder(f)}>
                            <div className='icon'><FcFolder /></div>
                            <p>{f}</p>
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default App;
