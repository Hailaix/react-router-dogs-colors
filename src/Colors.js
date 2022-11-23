import React, { useState } from "react";
import { Link } from "react-router-dom";

const Colors = () => {
    const [colors, setColors] = useState(['red', 'green', 'blue']);
    return (
        <div>
            <p>Please select a color.</p>
            <ul>
                {colors.map((color, idx) => (
                    <Link key={idx} to={`/colors/${color}`}>{color}</Link>
                ))}
            </ul>
        </div>
    )
}

export default Colors;