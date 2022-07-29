import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./NewColorForm.css";

const NewColorForm = ({ addColor }) => {

    const [form, updateForm] = useState({ name: "", hex: "#ffffff" });
    const history = useHistory();

    const { hex, name } = form;

    const handleChange = (evt) => {
        evt.persist();
        updateForm(f => ({ ...f, [evt.target.name]: evt.target.value }));
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addColor({ [form.name]: form.hex });
        history.push("/colors");
    }

    return (
        <div className="NewColor">
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label className="form-label fw-bold">Color Name</label>
                    <input
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Enter color name"
                        onChange={handleChange}
                        value={name}
                    />
                </div>
                <div className="form-control">
                    <label className="form-label fw-bold">Color Value</label>
                    <input
                        className="form-control form-control-color"
                        type="color"
                        name="hex"
                        id="hex"
                        onChange={handleChange}
                        value={hex}
                    />
                </div>
                <input className="btn btn-success my-2" type="Submit" value="Add this color" readOnly />
            </form>
        </div>
    );

}

export default NewColorForm;