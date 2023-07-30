import { useEffect, useState } from 'react';
import { JOI_HEBREW } from './joi-hebrew';
import Joi from "joi";

export default function AddProduct({ addedProduct, duplicateItem }) {
    const [formData, setFormData] = useState({
        name: '',
        price: 0,
        discount: 0,
    });
    const [errors, setErrors] = useState({});
    const [isModal, setIsModal] = useState(false);

    const productSchema = Joi.object({
        name: Joi.string().min(3).required(),
        price: Joi.number().required(),
        discount: Joi.number().required(),
    });

    useEffect(() => {
        if (duplicateItem) {
            setFormData(duplicateItem);
            setIsModal(true);
        } else {
            setFormData({
                name: '',
                price: 0,
                discount: 0,
            });
        }
    }, [duplicateItem]);

    const handleInputChange = (ev) => {
        const { id, value } = ev.target;

        const obj = {
            ...formData,
            [id]: value,
        };

        const schema = productSchema.validate(obj, { abortEarly: false, messages: { he: JOI_HEBREW }, errors: { language: 'he' } });
        const err = { ...errors, [id]: undefined };

        if (schema.error) {
            const error = schema.error.details.find(e => e.context.key === id);

            if (error) {
                err[id] = error.message;
            }
        }

        setFormData(obj);
        setErrors(err);
    };

    function add(ev) {
        ev.preventDefault();

        fetch("https://api.shipap.co.il/products", {
            credentials: 'include',
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData),
        })
        .then(res => res.json())
        .then(item => {
            addedProduct(item);
            setIsModal(false);
        });
    }
    
    return (
        <>
            <button style={{ width: 'initial' }} onClick={() => setIsModal(true)}>+ מוצר חדש</button>

            {
                isModal ?
                <div className="modal-frame">
                    <div className="modal">
                        <header>
                            <button className="close" onClick={() => setIsModal(false)}>x</button>
                            <h2>מוצר חדש</h2>
                        </header>

                        <form onSubmit={add}>
                            <label>
                                שם המוצר:
                                <input type="text" value={formData.name} id='name' className={errors.name ? 'fieldError' : ''} onChange={handleInputChange} />
                            </label>

                            {errors.name ? <div className='fieldError'>{errors.name}</div> : ''}

                            <label>
                                מחיר:
                                <input type="number" value={formData.price} id='price' className={errors.price ? 'fieldError' : ''} onChange={handleInputChange} />
                            </label>

                            {errors.price ? <div className='fieldError'>{errors.price}</div> : ''}

                            <label>
                                הנחה:
                                <input type="number" value={formData.discount} id='discount' className={errors.discount ? 'fieldError' : ''} onChange={handleInputChange} />
                            </label>

                            {errors.discount ? <div className='fieldError'>{errors.discount}</div> : ''}

                            <button>הוסף</button>
                        </form>
                    </div>
                </div> :
                ''
            }
        </>
    )
}