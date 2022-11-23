import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const ColorForm = ({addColor}) => {
    const INIT_STATE = { name : '', color : '#000000'}
    const [formData, setFormData] = useState(INIT_STATE);
    const navigate = useNavigate();

    //handles form changes for all inputs
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        addColor(formData.name, formData.color);
        setFormData(INIT_STATE);
        navigate('/colors');
    }

    return (
        <form className="colorForm" onSubmit={handleSubmit}>
            <label htmlFor='name'>Name:</label>
            <input
                id='name'
                name='name'
                type='text'
                value={formData.name}
                onChange={handleChange}
            />
            <label htmlFor='color'>Color:</label>
            <input
                id='color'
                name='color'
                type='color'
                value={formData.color}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
}

export default ColorForm;