import { useEffect, useState } from 'react';
import { JOI_HEBREW } from './joi-hebrew';
import Joi from "joi";

export default function EditProduct({ item, itemChange }) {
    const [formData, setFormData] = useState({
        name: '',
        price: 0,
        discount: 0,
    });
    const [errors, setErrors] = useState({});

    const productSchema = Joi.object({
        name: Joi.string().min(3).required(),
        price: Joi.number().required(),
        discount: Joi.number().required(),
    });

    useEffect(() => {
        if (item) {
            setFormData(item);
        }
    }, [item]);

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

    function save(ev) {
        ev.preventDefault();

        fetch(`https://api.shipap.co.il/products/${item.id}`, {
            credentials: 'include',
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData),
        })
        .then(() => {
            itemChange(formData);
        });
    }

    return (
        <>
            {
                item ?
                <div className="modal-frame">
                    <div className="modal">
                        <header>
                            <button className="close" onClick={() => itemChange()}>x</button>
                            <h2>עריכת מוצר</h2>
                        </header>

                        <form onSubmit={save}>
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

                            <button>שמור</button>
                        </form>
                    </div>
                </div> :
                ''
            }
        </>
    )
}