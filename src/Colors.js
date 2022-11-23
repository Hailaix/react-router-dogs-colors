import React, { useState } from "react";
import { Link } from "react-router-dom";

const Colors = ({ colors }) => {
    return (
        <div>
            <p><b>Welcome to the color factory.</b></p>
            <Link to='new'>Add a color</Link>
            <p>Please select a color.</p>
            {colors.map((color, idx) => (
                <p key={idx}><Link to={`${color.name}`}>{color.name}</Link></p>
            ))}
        </div>
    )
}

export default Colors;