import { useEffect, useState } from 'react';

// CSS in JavaScript Object
const text = {
  fontFamily: 'Tahoma',
  textAlign: 'center',
  letterSpacing: '0.10rem',
  textTransform: 'uppercase',
  padding: '1rem',
  color: '#3700b3',
};

export default function PrimeChecker() {
  const [num, setNum] = useState('');
  const [message, setMessage] = useState('Checking for prime numbers');

  useEffect(() => {
    setTimeout(() => {
      let isPrime = true;
      if (num <= 1) {
        setMessage('Prime numbers are greater than 1');
      } else if (num > 1) {
        for (let i = 2; i < num; i++) {
          if (num % i === 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime) {
          setMessage(`${num} is a prime number`);
        } else {
          setMessage(`${num} is a not prime number`);
        }
      } else {
        setMessage('The number is not a prime number.');
      }
    }, 1000);
  }, [num]);

  return (
    <section
      style={{
        boxShadow: '5px 5px 15px #cccccc',
        padding: '3.5rem',
        position: 'absolute',
        fontWeight: 'bolder',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'inline-block',
        borderRadius: '10px',
        alignSelf: 'center',
        background: 'white',
      }}
    >
      <h1 style={text}>Prime Number Checker</h1>

      <label htmlFor='prime'>
        <p style={text}>Enter Number</p>
      </label>
      <input
        style={{
          textAlign: 'center',
          fontSize: '2rem',
          background: 'lavender',
          border: 'none',
          borderRadius: '5px',
          borderBottom: '5px #3700b3 solid',
          outline: 'none',
          width: '100%',
        }}
        type='number'
        name='prime'
        id='prime'
        min='0'
        onChange={(e) => setNum(e.target.value)}
      />
      <h2
        style={{
          fontFamily: 'Tahoma',
          textAlign: 'center',
          letterSpacing: '0.10rem',
          textTransform: 'uppercase',
          padding: '1rem',
          color: 'tomato',
        }}
      >
        {message}
      </h2>
    </section>
  );
}
