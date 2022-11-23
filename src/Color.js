import React from "react";
import { Link, useParams } from "react-router-dom";
import './Color.css';

const Color = () => {
    const { color } = useParams();
    return (
        <div className="color" style={{backgroundColor : color}}>
            <Link to='/colors'>Back</Link>
        </div>
    )
}

export default Color;