import React from 'react';
import { useNavigate } from 'react-router-dom';

function Ergebnis({ formData, onRestart }) {
    const { fahrzeug, fahrer, versicherung, fahrstrecke, region } = formData;
    const { wert: fahrzeugWert } = fahrzeug;
    const { alter: fahrerAlter, geschlecht: fahrerGeschlecht, fahrerfahrung: fahrerErfahrung } = fahrer;
    const { versicherung: versicherungsArt } = versicherung;
    const { fahrstrecke: streckenLaenge } = fahrstrecke;
    const { wohnort: regionWohnort } = region;

    let basis = 500;
    let alterFaktor = (fahrerAlter < 25) ? 1.2 : 1.0;
    let geschlechtFaktor = (fahrerGeschlecht === "maennlich") ? 1.1 : 1.0;
    let fahrzeugWertFaktor = fahrzeugWert * 0.0001;
    let streckenFaktor = (streckenLaenge < 10000) ? 0.9 : 1.0;
    let fahrErfahrungFaktor = (fahrerErfahrung < 2) ? 1.2 : (fahrerErfahrung > 5 ? 0.9 : 1.0)
    let versicherungFaktor;
    let regionFaktor = (regionWohnort === "stadt") ? 1.2 : 1.0;

    switch (versicherungsArt) {
        case "haftpflichtversicherung":
            versicherungFaktor = 1.0;
            break;
        case "teilkaskoversicherung":
            versicherungFaktor = 1.3;
            break;
        case "vollkaskoversicherung":
            versicherungFaktor = 1.5;
            break;
        default:
            versicherungFaktor = 1.0;
    }

    let Versicherungskosten = basis * alterFaktor * geschlechtFaktor * fahrzeugWertFaktor * streckenFaktor * fahrErfahrungFaktor * versicherungFaktor * regionFaktor;

    const navigate = useNavigate();

    return (
        <div>
            <div className="box">
                <div className="spalte">
                    <section className="ergebnis">
                        <h1>Versicherungsprämie:</h1>
                        <p>{Versicherungskosten.toFixed(2)} Fr.</p>
                    </section>
                </div>

                <div className="spalte summary">
                    <h2>Zusammenfassung</h2>
                    <h3>Fahrzeug</h3>
                    <p>Wert des Fahrzeuges: {fahrzeugWert} Fr.</p>
                    <h3>Fahrer/in</h3>
                    <p>Alter: {fahrerAlter}</p>
                    <p>Geschlecht: {fahrerGeschlecht}</p>
                    <p>Fahrerfahrung: {fahrerErfahrung} Jahren</p>
                    <h3>Versicherung</h3>
                    <p>Versicherungsart: {versicherungsArt}</p>
                    <h3>Fahrstrecke</h3>
                    <p>Streckenlänge: {streckenLaenge} km</p>
                    <h3>Region</h3>
                    <p>Wohnort: {regionWohnort === "stadt" ? "Städtisches Gebiet" : "Ländliches Gebiet"}</p>
                </div>
            </div>
            <button className="button-link" onClick={() => navigate('/Region')}>Zurück</button>
            <button className="done button-link" onClick={() => { onRestart(); navigate('/'); }}>Neu Start</button>
        </div>
    );
}

export default Ergebnis;
