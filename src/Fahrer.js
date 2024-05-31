import React, {useState} from 'react';
import Circle from './Circle';

function Fahrer({ data, onDataChange }) {

    const handleChange = (e) => {
        const { name, value } = e.target;
        onDataChange({ ...data, [name]: value });
    };

    return (
        <div>
            <div className="circle-container">
                <svg width="1600" height="200" className="circle-container">
                    <Circle cx={100} cy={50} radius={50} color="#2176FF" number={1} />
                    <line x1="150" y1="50" x2="250" y2="50" stroke="black" strokeWidth="2" className="line" />
                    <Circle cx={300} cy={50} radius={50} color="#2176FF" number={2} />
                    <line x1="350" y1="50" x2="450" y2="50" stroke="black" strokeWidth="2" className="line" />
                    <Circle cx={500} cy={50} radius={50} color="#31393C" number={3} />
                    <line x1="550" y1="50" x2="650" y2="50" stroke="black" strokeWidth="2" className="line" />
                    <Circle cx={700} cy={50} radius={50} color="#31393C" number={4} />
                    <line x1="750" y1="50" x2="850" y2="50" stroke="black" strokeWidth="2" className="line" />
                    <Circle cx={900} cy={50} radius={50} color="#31393C" number={5} />

                    <text x={100} y={150} textAnchor="middle" fill="black">Fahrzeug</text>
                    <text x={300} y={150} textAnchor="middle" fill="black">Fahrer/in</text>
                    <text x={500} y={150} textAnchor="middle" fill="black">Versicherung</text>
                    <text x={700} y={150} textAnchor="middle" fill="black">Fahrstrecke</text>
                    <text x={900} y={150} textAnchor="middle" fill="black">Region</text>
                </svg>
            </div>
            <div className="content">
                <form>
                    <label htmlFor="alter">Ihr Alter:</label>
                    <input type="number" id="alter" name="alter" placeholder="0" step="1" min="18" required
                           onChange={handleChange}
                           value={data.alter || ''}
                    />
                    <label htmlFor="Geschlecht">Ihr Geschlecht: </label>
                    <select id="geschlecht" name="geschlecht" value={data.geschlecht || ''} onChange={handleChange}>
                        <option value="" disabled>Bitte wählen</option>
                        <option value="maennlich">Männlich</option>
                        <option value="weiblich">Weiblich</option>
                    </select>
                    <label htmlFor="fahrerfahrung">Fahrerfahrung (in Jahren):</label>
                    <input type="number" id="fahrerfahrung" name="fahrerfahrung" placeholder="0" step="1" required
                           onChange={handleChange}
                           value={data.fahrerfahrung || ''}
                    />
                </form>
            </div>
        </div>
    );
};

export default Fahrer;
