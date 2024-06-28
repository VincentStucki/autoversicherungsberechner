import React, {useState} from 'react';
import Circle from './Circle';

function Fahrstrecke({ data, onDataChange }) {
    // Daten hinzufügem
    const handleChange = (e) => {
        const { name, value } = e.target;
        onDataChange({ ...data, [name]: value });
    };


    return (
        <div>

            <div className="home content">
                <form>
                    <label htmlFor="fahrstrecke">Fahrstrecke pro Jahr (in km):</label>
                    <input className="input" type="number" id="fahrstrecke" name="fahrstrecke" placeholder="0"  required
                           onChange={handleChange}
                           value={data.fahrstrecke || ''}
                    />
                </form>
            </div>
        </div>
    );
};

export default Fahrstrecke;
