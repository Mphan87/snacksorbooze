
import React from "react";
import { useState } from "react";


const FoodForm = ({addItem}) => {

    const [formData, setFormData] = useState({
        snack: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(data => ({
            ...data, [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(formData.snack)
        setFormData({snack: ""})

    }
    return (

        <form onSubmit={handleSubmit}>
            <label htmlFor="snack">Snack</label>
            <input
                id="snack"
                type="text"
                name="snack"
                placeholder="snack"
                value={formData.snack}
                onChange={handleChange} />
            <button> Add me to List! </button>
            <p>{formData.snack}</p>
        </form>
    )
}

export default FoodForm
