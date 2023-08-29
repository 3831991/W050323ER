// https://www.chartjs.org
// https://react-chartjs-2.js.org/

import './Dashboard.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
    const [dashboard, setDashboard] = useState();
    const [lastUsers, setLastUsers] = useState([]);
    const [usersAmountByYear, setUsersAmountByYear] = useState();

    const structure = [
        { name: 'averageGrade', title: 'ממוצע ציונים' },
        { name: 'gradesAmount', title: 'כמות ציונים' },
        { name: 'gradesDev', title: 'סטיית התקן', color: 'orange' },
        { name: 'maxGrade', title: 'ציון גבוה', color: 'green' },
        { name: 'minGrade', title: 'ציון נמוך', color: 'red' },
        { name: 'usersAmount', title: 'כמות משתמשים' },
        { name: 'usersAmountCurrentYear', title: 'כמות משתמשים מהשנה הנוכחית' },
    ];

    useEffect(() => {
        const url = 'http://localhost:4000/dashboard';

        Promise.all([
            fetch(`${url}/grades/average`).then(res => res.json()),
            fetch(`${url}/grades/amount`).then(res => res.json()),
            fetch(`${url}/grades/dev`).then(res => res.json()),
            fetch(`${url}/grades/max`).then(res => res.json()),
            fetch(`${url}/grades/min`).then(res => res.json()),
            fetch(`${url}/users/amount`).then(res => res.json()),
            fetch(`${url}/users/amount-year`).then(res => res.json()),
            fetch(`${url}/users/amount-by-year`).then(res => res.json()),
            fetch(`${url}/users/last/10`).then(res => res.json()),
        ]).then(data => {
            const [
                averageGrade,
                gradesAmount,
                gradesDev,
                maxGrade,
                minGrade,
                usersAmount,
                usersAmountCurrentYear,
                usersAmountByYear,
                last10Users
            ] = data;

            setDashboard({
                averageGrade: averageGrade.res,
                gradesAmount: gradesAmount.res,
                gradesDev: gradesDev.res,
                maxGrade: maxGrade.res,
                minGrade: minGrade.res,
                usersAmount: usersAmount.res,
                usersAmountCurrentYear: usersAmountCurrentYear.res,
            });

            setLastUsers(last10Users);
            setUsersAmountByYear(usersAmountByYear);
        });
    }, []);

    return (
        <div className='Dashboard'>
            {
                dashboard &&
                structure.map(s =>
                    <div className='card' key={s.name}>
                        <header>{s.title}</header>
                        <div style={{ color: s.color }}>{dashboard[s.name]}</div>
                    </div>
                )
            }

            <div className='card'>
                <header>10 משתמשים אחרונים</header>
                <p>
                    {
                        lastUsers.map((x, i, arr) =>
                            <Link to={`users/${x.id}`} key={x.id}>{x.firstName} {x.lastName}{i === arr.length - 1 ? '.' : ', '}</Link>
                        )
                    }
                </p>
            </div>

            {
                usersAmountByYear &&
                <div className='card chart'>
                    <header>כמות משתמשים לפי שנים</header>

                    <div>
                    <Doughnut data={{
                        labels: usersAmountByYear.map(x => x.year),
                        datasets: [
                            {
                                data: usersAmountByYear.map(x => x.amount),
                                backgroundColor: usersAmountByYear.map((x, i) => `hsl(${150 + i * 60} 82% 56%)`),
                                // borderColor: usersAmountByYear.map((x, i) => `hsl(${150 + i * 60} 82% 56%)`),
                                // borderWidth: 1,
                            },
                        ],
                    }} />
                    </div>
                </div>
            }
        </div>
    )
}
