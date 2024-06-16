import React from 'react';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function Ergebnis({ formData, onRestart }) {
    const { fahrzeug, fahrer, versicherung, fahrstrecke, region } = formData;
    const { wert: fahrzeugWert } = fahrzeug;
    const { alter: fahrerAlter, geschlecht: fahrerGeschlecht, fahrerfahrung: fahrerErfahrung } = fahrer;
    const { versicherung: versicherungsArt } = versicherung;
    const { fahrstrecke: streckenLaenge } = fahrstrecke;
    const { wohnort: regionWohnort } = region;

    let basis = 100;
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

    const generatePDF = () => {
        const input = document.getElementById('pdfContent');
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();

            // Set custom font and size
            pdf.setFont('Helvetica');
            pdf.setFontSize(20);

            // Custom layout
            pdf.text('Versicherungsprämie:', 20, 20);
            pdf.text(`${Versicherungskosten.toFixed(2)} Fr.`, 20, 30);

            pdf.setFontSize(20);
            pdf.text('Zusammenfassung', 20, 50);
            pdf.text('Fahrzeug', 20, 60);
            pdf.setFontSize(12);
            pdf.text(`Wert des Fahrzeuges: ${fahrzeugWert} Fr.`, 20, 70);

            pdf.setFontSize(14);
            pdf.text('Fahrer/in', 20, 90);
            pdf.setFontSize(12);
            pdf.text(`Alter: ${fahrerAlter}`, 20, 100);
            pdf.text(`Geschlecht: ${fahrerGeschlecht}`, 20, 110);
            pdf.text(`Fahrerfahrung: ${fahrerErfahrung} Jahren`, 20, 120);

            pdf.setFontSize(14);
            pdf.text('Versicherung', 20, 140);
            pdf.setFontSize(12);
            pdf.text(`Versicherungsart: ${versicherungsArt}`, 20, 150);

            pdf.setFontSize(14);
            pdf.text('Fahrstrecke', 20, 170);
            pdf.setFontSize(12);
            pdf.text(`Streckenlänge: ${streckenLaenge} km`, 20, 180);

            pdf.setFontSize(14);
            pdf.text('Region', 20, 200);
            pdf.setFontSize(12);
            pdf.text(`Wohnort: ${regionWohnort === "stadt" ? "Städtisches Gebiet" : "Ländliches Gebiet"}`, 20, 210);

            pdf.save('output.pdf');
        });
    };

    return (
        <div>
            <div className="box" id="pdfContent">
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
                    <button className="button-link pdf" onClick={generatePDF}>Download PDF</button>
                </div>
            </div>
            <button className="button-link" onClick={() => navigate('/Region')}>Zurück</button>
            <button className="done button-link" onClick={() => { onRestart(); navigate('/'); }}>Neu Start</button>
        </div>
    );
}

export default Ergebnis;
