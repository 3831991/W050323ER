import './Talkbacks.css';
import { useState, useEffect } from 'react';
import TalkbacksForm from './TalkbacksForm';

export default function Talkbacks({ articleId }) {
    const [data, setData] = useState([]);


    return (
        <div className='Talkbacks'>
            <h3>תגובות</h3>

            {
                !data.length ?
                <>
                    <p>היה הראשון להגיב..</p>
                    <TalkbacksForm articleId={articleId} />
                </> :
                data.map(t => 
                    <div className='talkbackContainer'>
                        <div className='grid'>
                            <div>1</div>
                            <div>אלישיב לרנר <span>(06/08/2023 15:37)</span></div>
                            <div className='btnFrame'>
                                <button>הגב</button>
                            </div>
                            <div className='content'>כתבה מטופשת.. צריך להחליף עורך לאתר...</div>
                        </div>

                        <TalkbacksForm articleId={articleId} parent={t.id} />
                    </div>    
                )
            }
            
        </div>
    )
}