import React, { useState } from 'react';

const paragraph =
  'Consectetur culpa laborum exercitation officia incididunt do culpa minim consequat ea. Voluptate pariatur do dolore nostrud occaecat magna est dolor excepteur nulla qui nostrud commodo laboris. Cillum ut pariatur irure voluptate id proident ullamco. Veniam et aute do minim eu quis ut labore. Deserunt et sunt labore minim. Amet sunt in do dolor excepteur cupidatat anim excepteur cillum reprehenderit. Mollit enim nisi laborum eiusmod ea incididunt laborum laboris dolor mollit elit id non.';

function SearchBox() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = document.getElementById('sstring').value;
    if (paragraph.includes(searchValue)) {
      console.log(searchValue);
      setMessage('String Found');
    } else {
      setMessage('String Not Found');
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' name='sstring' id='sstring' />
        <button type='submit'>Search</button>
        <h2>{message}</h2>
      </form>
    </div>
  );
}

export default function String() {
  return (
    <div>
      <h1>Search For String</h1>
      <SearchBox />
      <p id='text'>{paragraph}</p>
    </div>
  );
}
