import React, {useState} from 'react';
import Circle from './Circle';

function Fahrer({ data, onDataChange }) {
    // Daten hinzufügem
    const handleChange = (e) => {
        const { name, value } = e.target;
        onDataChange({ ...data, [name]: value });
    };

    return (
        <div>
            <div className="home content">
                <form>
                    <label htmlFor="alter">Ihr Alter:</label>
                    <input className="input" type="number" id="alter" name="alter" placeholder="0" step="1" min="18" required
                           onChange={handleChange}
                           value={data.alter || ''}
                    />
                    <label htmlFor="Geschlecht">Ihr Geschlecht: </label>
                    <select className="input" id="geschlecht" name="geschlecht" value={data.geschlecht || ''} onChange={handleChange}>
                        <option value="" disabled>Bitte wählen</option>
                        <option value="maennlich">Männlich</option>
                        <option value="weiblich">Weiblich</option>
                    </select>
                    <label htmlFor="fahrerfahrung">Fahrerfahrung (in Jahren):</label>
                    <input className="input" type="number" id="fahrerfahrung" name="fahrerfahrung" placeholder="0" step="1" required
                           onChange={handleChange}
                           value={data.fahrerfahrung || ''}
                    />
                </form>
            </div>
        </div>
    );
};

export default Fahrer;
