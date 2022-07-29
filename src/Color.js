import React from "react";
import { Link } from "react-router-dom";
import "./Color.css";

const Color = ({ hex, color, history }) => {
    if (!hex) {
        history.push("/colors");
    }

    return (
        <div className="Color" style={{ backgroundColor: hex }}>
            <h5>This color is {color}</h5>
            <h5>Do you think {color} is a beautiful color?</h5>
            <Link to="/">Go back</Link>
        </div>
    );
};

export default Color;