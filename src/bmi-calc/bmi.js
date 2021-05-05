import React, { useEffect, useState } from 'react';
import './bmi.css';

export default function BmiApp() {
  return (
    <section>
      <Calculator />
      <Chart />
    </section>
  );
}

const Calculator = () => {
  const [mass, setMass] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setTimeout(() => {
      const calucualted_bmi = (mass / (height * height)).toFixed(2);
      setBmi(calucualted_bmi);
      if (calucualted_bmi < 18.5) {
        setMessage('Underweight');
      } else if (calucualted_bmi <= 24.9 && calucualted_bmi >= 18.5) {
        setMessage('Normal Weight');
      } else if (calucualted_bmi <= 29.9 && calucualted_bmi >= 25.0) {
        setMessage('Pre obesity');
      } else if (calucualted_bmi <= 300.0 && calucualted_bmi >= 30.0) {
        setMessage('Obesity');
      } else {
        setMessage('Enter Appropriate values');
      }
    }, 1000);
  }, [mass, height]);

  return (
    <>
      <form className='form'>
        <h1>BMI Calculator</h1>
        <hr />
        <div>
          <label htmlFor='Mass'>Mass : </label>
          <input
            type='number'
            placeholder='in Kilograms'
            autoComplete='off'
            onChange={(e) => setMass(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor='height'>Height : </label>
          <input
            type='number'
            placeholder='in Meters'
            autoComplete='off'
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div style={{ padding: '0px', border: '1px solid #e42a5b' }}>
          <h2>
            <span style={{ color: '#5eb670' }}>Calculated BMI -</span> {bmi}
          </h2>
          <h2>{message}</h2>
        </div>
      </form>
    </>
  );
};

const Chart = () => {
  const bmiData = [
    { id: 1, bmiRange: 'Below 18.5', status: 'Underweight' },
    { id: 2, bmiRange: '18.5 - 24.9', status: 'Normal Weight' },
    { id: 3, bmiRange: '25.0 - 29.9', status: 'Pre-obesity' },
    { id: 4, bmiRange: '30.0 - 34.9', status: 'Obesity class I' },
    { id: 5, bmiRange: '35.0 - 39.9', status: 'Obesity class II' },
    { id: 6, bmiRange: 'Above 40', status: 'Obesity class III' },
  ];

  return (
    <div>
      <table cellSpacing='1px'>
        <caption>
          <h1>BMI Chart</h1>
        </caption>
        <thead>
          <tr>
            <td>BMI</td>
            <td>Nutritional Status</td>
          </tr>
        </thead>
        <tbody>
          {bmiData.map((row) => {
            return (
              <tr key={row.id}>
                <td>{row.bmiRange}</td>
                <td>{row.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
