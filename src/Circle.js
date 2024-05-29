import React from 'react';
import './mvp.css';

const Circle = ({ cx, cy, radius, color, number }) => (
    <>
        <circle cx={cx} cy={cy} r={radius} fill={color} />
        <text x={cx} y={cy} textAnchor="middle" fill="white" dy=".3em" fontSize="20">{number}</text>
    </>
);

export default Circle;
