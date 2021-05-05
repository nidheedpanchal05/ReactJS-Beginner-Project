import { useEffect, useState } from 'react';
import './stopWatch.css';

function StopWatch() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [play, setPlay] = useState(false);
  const [active, setActive] = useState(<i className='fas fa-play'></i>);
  const [options, setOptions] = useState(<div></div>);

  useEffect(() => {
    setTimeout(() => {
      var updatedMS = time.ms,
        updatedS = time.s,
        updatedM = time.m,
        updatedH = time.h;
      if (play) {
        if (updatedM === 60) {
          updatedH++;
          updatedM = 0;
        }
        if (updatedS === 60) {
          updatedM++;
          updatedS = 0;
        }
        if (updatedMS === 100) {
          updatedS++;
          updatedMS = 0;
        }
        updatedMS++;
        return setTime({
          ms: updatedMS,
          s: updatedS,
          m: updatedM,
          h: updatedH,
        });
      }
    }, 10);
  });

  const handleClick = () => {
    if (!play) {
      setPlay(true);
      setActive(<i className='fas fa-pause'></i>);
      setOptions(<div></div>);
    } else {
      setPlay(false);
      setActive(<i className='fas fa-play'></i>);
      setOptions(
        <div>
          <button onClick={() => setTime({ ms: 0, s: 0, m: 0, h: 0 })}>
            <i class='fas fa-undo'></i>
          </button>
        </div>
      );
    }
  };

  return (
    <div>
      <link
        rel='stylesheet'
        href='https://use.fontawesome.com/releases/v5.8.1/css/all.css'
        integrity='sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf'
        crossorigin='anonymous'
      />
      <h2>
        <i class='fas fa-stopwatch'></i> Stop Watch
      </h2>
      <table cellPadding='20px' cellSpacing='10px'>
        <thead>
          <tr>
            <td>hours </td>
            <td>minutes </td>
            <td>seconds </td>
            <td>mili sec</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> {time.h} </td>
            <td> {time.m} </td>
            <td> {time.s} </td>
            <td className='ms'>{time.ms}</td>
          </tr>
        </tbody>
      </table>
      <div className='btnDiv'>
        <button className='play' type='button' onClick={handleClick}>
          {active}
        </button>
        {options}
      </div>
    </div>
  );
}

export default StopWatch;
