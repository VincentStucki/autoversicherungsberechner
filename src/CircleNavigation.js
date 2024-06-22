import React from 'react';
import Circle from './Circle';

function CircleNavigation({ currentPageIndex }) {
    const circleColors = ["#1A2130", "#1A2130", "#1A2130", "#1A2130", "#1A2130", "#1A2130"];
    for (let i = 1; i <= currentPageIndex; i++) {
        circleColors[i] = "#7AA2E3";
    }

    return (
        <div className="circle-container">
            <svg width="1600" height="200" className="circle-container">
                <Circle cx={100} cy={50} radius={50} color={circleColors[1]} number={1} />
                <line x1="150" y1="50" x2="250" y2="50" stroke="black" strokeWidth="2" className="line" />
                <Circle cx={300} cy={50} radius={50} color={circleColors[2]} number={2} />
                <line x1="350" y1="50" x2="450" y2="50" stroke="black" strokeWidth="2" className="line" />
                <Circle cx={500} cy={50} radius={50} color={circleColors[3]} number={3} />
                <line x1="550" y1="50" x2="650" y2="50" stroke="black" strokeWidth="2" className="line" />
                <Circle cx={700} cy={50} radius={50} color={circleColors[4]} number={4} />
                <line x1="750" y1="50" x2="850" y2="50" stroke="black" strokeWidth="2" className="line" />
                <Circle cx={900} cy={50} radius={50} color={circleColors[5]} number={5} />

                <text x={100} y={150} textAnchor="middle" fill="black">Fahrzeug</text>
                <text x={300} y={150} textAnchor="middle" fill="black">Fahrer/in</text>
                <text x={500} y={150} textAnchor="middle" fill="black">Versicherung</text>
                <text x={700} y={150} textAnchor="middle" fill="black">Fahrstrecke</text>
                <text x={900} y={150} textAnchor="middle" fill="black">Region</text>
            </svg>
        </div>
    );
}

export default CircleNavigation;
