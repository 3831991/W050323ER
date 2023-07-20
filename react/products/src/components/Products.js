import React, { useEffect, useState } from 'react';

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://api.shipap.co.il/products", {
            credentials: 'include',
        })
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        });
    }, [])

    const remove = (id) => {
        if (!window.confirm('האם אתה בטוח כי ברצונך למחוק את הפריט המדובר?')) {
            return;
        }
    
        fetch(`https://api.shipap.co.il/products/${id}`, {
            method: 'DELETE',
            credentials: 'include',
        })
        .then(() => {
            setProducts(products.filter(p => p.id !== id));
        });
    }

    return (
        <div className="Products">
            <h2>מוצרים</h2>
            
            <div className='grid'>
                <div>#</div>
                <div>שם המוצר</div>
                <div>מחיר</div>
                <div>הנחה</div>
                <div></div>
            {
                products.map((p, i) => {
                    return (
                        <React.Fragment key={p.id}>
                            <div>{i + 1}</div>
                            <div>{p.name}</div>
                            <div>{p.price}</div>
                            <div>{p.discount}</div>
                            <div><button className="remove" onClick={() => remove(p.id)}>❌</button></div>
                        </React.Fragment>
                    )
                })
            }
            </div>
        </div>
    )
}