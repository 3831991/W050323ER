import React, { useContext, useEffect, useState } from 'react';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import { UserContext } from '../App';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [editedItem, setEditedItem] = useState();
    const { user } = useContext(UserContext);

    useEffect(() => {
        fetch("https://api.shipap.co.il/products", {
            credentials: 'include',
        })
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        });
    }, []);

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

    const update = (product) => {
        if (product) {
            const arr = [...products];
            const i = arr.findIndex(p => p.id === product.id);
            arr.splice(i, 1, product);
            setProducts(arr);
        }

        setEditedItem();
    }

    return (
        <div className="Products">
            <AddProduct addedProduct={item => setProducts([...products, item])} />
            <EditProduct item={editedItem} itemChange={update} />

            <h2>המוצרים של {user.fullName}</h2>
            
            {
                products.length ?
                (
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
                                    <div onDoubleClick={() => setEditedItem(p)}>{i + 1}</div>
                                    <div onDoubleClick={() => setEditedItem(p)}>{p.name}</div>
                                    <div onDoubleClick={() => setEditedItem(p)}>{p.price}</div>
                                    <div onDoubleClick={() => setEditedItem(p)}>{p.discount}</div>
                                    <div>
                                        <button className="remove" onClick={() => setEditedItem(p)}>✏️</button>
                                        <button className="remove" onClick={() => remove(p.id)}>❌</button>
                                    </div>
                                </React.Fragment>
                            )
                        })
                    }
                    </div>
                ) : 
                <h3 className='noData'>אין נתונים</h3>
            }
        </div>
    )
}