import './App.css';
import { useEffect, useState } from 'react';
import { FcFolder } from 'react-icons/fc';
import { AiFillFolderAdd } from 'react-icons/ai';

function App() {
    const [folders, setFolders] = useState([]);
    const [path, setPath] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8200/folders")
        .then(res => res.json())
        .then(data => setFolders(data));
    }, []);

    useEffect(() => {
        const _path = `/${path.join('/')}`;

        fetch(`http://localhost:8200/folders?path=${_path}`)
        .then(res => res.json())
        .then(data => {
            setFolders(data);
        });
    }, [path])

    const openFolder = folder => {
        setPath([...path, folder]);
    }

    const navigateTo = i => {
        path.splice(i + 1);
        setPath([...path]);
    }

    const createFolder = ev => {
        const val = ev.target.value;
        const key = ev.key;
        const _path = `/${path.join('/')}`;

        if (key === 'Enter' && val) {
            fetch(`http://localhost:8200/folder/${val}?path=${_path}`, {
                method: 'POST',
            })
            .then(() => {
                ev.target.value = '';
                setFolders([val, ...folders]);
            });
        }
    }

    return (
        <>
            <h1>ניהול תיקיות</h1>
            <div className="frame">
                <p dir='ltr'>
                    <span><a className='path' onClick={() => navigateTo(-1)}>home</a></span>
                    {
                        path.map((p, i) =>
                            <span key={p}>/<a className='path' onClick={() => navigateTo(i)}>{p}</a></span>
                        )
                    }
                </p>
                <div className='folder'>
                    <div className='icon'><AiFillFolderAdd /></div>
                    <p><input type="text" onKeyUp={createFolder} /></p>
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
