import React from 'react';
import Circle from './Circle';

function Fahrzeug({ data, onDataChange }) {
    // Daten hinzufügem
    const handleChange = (e) => {
        const { name, value } = e.target;
        onDataChange({ ...data, [name]: value });
    };



    return (
        <div>
            <div className="home content">
                <form>
                    <label>
                        Wert des Fahrzeuges: </label>
                        <input className="input" type="number" name="wert" id="wert" value={data.wert || ''} onChange={handleChange} placeholder="0.00" step="0.01" min="0" required />

                </form>
            </div>

        </div>
    );
};

export default Fahrzeug;
