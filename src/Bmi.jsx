import React, { useState } from 'react';
import './Bmi.css';

function Bmi() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState("");
    const [message, setMessage] = useState("");

    const calculateBmi = () => {
        const bmiHeight = parseFloat(height) / 100;
        const bmiWeight = parseFloat(weight);

        if (!(bmiHeight > 0 && bmiWeight > 0)) {
            setBmi("");
            setMessage("");
            alert('Please enter valid values for weight and height');
            return;
        }

        const bmiValue = (bmiWeight / (bmiHeight * bmiHeight)).toFixed(2);
        setBmi(bmiValue);

        let text = '';
        if (bmiValue < 18.5) {
            text = 'Underweight';
        } else if (bmiValue >= 18.5 && bmiValue < 25) {
            text = 'Normal';
        } else if (bmiValue >= 25 && bmiValue < 30) {
            text = 'Overweight';
        } else {
            text = 'Obese';
        }
        setMessage(text);
    }

    return (
        <>
            <div className='card'>
                <h3>BMI Calculator</h3>
                <label htmlFor="weight">Weight (kg):</label>
                <input
                    type="number"
                    id='weight'
                    placeholder='Enter your weight'
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
                <label htmlFor="height">Height (cm):</label>
                <input
                    type="number"
                    id='height'
                    placeholder='Enter your height'
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
                <button onClick={calculateBmi}>Calculate BMI</button>
                {bmi && message && (
                    <div className='result'>
                        Your BMI is : {bmi} - {message}
                    </div>
                )}
            </div>
        </>
    );
}

export default Bmi;
