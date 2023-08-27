import { BsFillTrash3Fill } from 'react-icons/bs';
import './Grades.css';
import moment from 'moment';
import { useEffect, useState } from 'react';

export default function Grades() {
    const [grades, setGrades] = useState([]);
    const [formData, setFormData] = useState({
        date: moment().format('YYYY-MM-DD'),
        title: '',
        grade: '',
    });

    async function getGrades() {
        const res = await fetch("http://localhost:4000/grades");
        const data = await res.json();
        setGrades(data);
    }

    useEffect(() => {
        getGrades();
    }, []);

    const remove = id => {
        if (!window.confirm("האם למחוק את הציון?")) {
            return;
        }

        fetch(`http://localhost:4000/grades/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            setGrades(grades.filter(x => x.id !== id));
        });
    }

    const handleInput = ev => {
        const { name, value } = ev.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }
    
    const addGrade = () => {
        fetch("http://localhost:4000/grades", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(g => {
            setGrades([...grades, g]);
            setFormData({
                date: moment().format('YYYY-MM-DD'),
                title: '',
                grade: '',
            });
        });
    }

    return (
        <div>
            <h2>ציונים</h2>

            <table>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>תאריך</td>
                        <td>נושא</td>
                        <td>ציון</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td><input type="date" name="date" value={formData.date} onChange={handleInput} /></td>
                        <td><input type="text" name="title" value={formData.title} onChange={handleInput} /></td>
                        <td><input type="number" name="grade" value={formData.grade} onChange={handleInput} /></td>
                        <td><button onClick={addGrade}>הוסף</button></td>
                    </tr>
                {
                    grades.map((g, i) => 
                        <tr key={g.id}>
                            <td>{i + 1}</td>
                            <td>{moment(g.date).format("DD/MM/YY")}</td>
                            <td>{g.title}</td>
                            <td>{g.grade}</td>
                            <td>
                                <button className='red' onClick={() => remove(g.id)}><BsFillTrash3Fill /></button>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}