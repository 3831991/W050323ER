import { useState } from 'react';
import { JOI_HEBREW } from './joi-hebrew';
import Joi from "joi";

export default function AddProduct({ addedProduct }) {
    const [formData, setFormData] = useState({
        name: '',
        price: 0,
        discount: null,
    });
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [isModal, setIsModal] = useState(false);

    const productSchema = Joi.object({
        name: Joi.string().min(3).required(),
        price: Joi.number().required(),
        discount: Joi.number().required(),
    });

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

            setIsValid(false);
        } else {
            setIsValid(true);
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
                                <input type="text" id='name' className={errors.name ? 'fieldError' : ''} onChange={handleInputChange} />
                            </label>

                            {errors.name ? <div className='fieldError'>{errors.name}</div> : ''}

                            <label>
                                מחיר:
                                <input type="number" id='price' className={errors.price ? 'fieldError' : ''} onChange={handleInputChange} />
                            </label>

                            {errors.price ? <div className='fieldError'>{errors.price}</div> : ''}

                            <label>
                                הנחה:
                                <input type="number" id='discount' className={errors.discount ? 'fieldError' : ''} onChange={handleInputChange} />
                            </label>

                            {errors.discount ? <div className='fieldError'>{errors.discount}</div> : ''}

                            <button disabled={!isValid}>הוסף</button>
                        </form>
                    </div>
                </div> :
                ''
            }
        </>
    )
}