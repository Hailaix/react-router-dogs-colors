import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import './Color.css';

const Color = ({ colors }) => {
    const { colorName } = useParams();
    const color = colors.find(c => (c.name === colorName));
    return color ? (
        <div className="color" style={{ backgroundColor: color.color }}>
            <Link to='/colors'>Back</Link>
        </div>
    )
        : <Navigate to='/colors' replace />
}

export default Color;