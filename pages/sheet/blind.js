import { useEffect, useState } from 'react';
import Keybind from '../../components/keybind';

import styles from '../../styles/sheet/Blind.module.css';
import sheets from '../../styles/Sheet.module.css';

const rings = {
  first: {
    code: 'Digit1',
    coordinates: [
      {x: 0, y: 220},
      {x: 50, y: 210},
      {x: 75, y: 200},
      {x: 100, y: 190},
      {x: 125, y: 175},
      {x: 155, y: 155}
    ]
  },
  second: {
    code: 'Digit2',
    coordinates: [
      {x: 0, y: 620},
      {x: 100, y: 610},
      {x: 150, y: 600},
      {x: 200, y: 585},
      {x: 250, y: 565},
      {x: 300, y: 540},
      {x: 350, y: 510},
      {x: 435, y: 435}
    ]
  },
  third: {
    code: 'Digit3',
    coordinates: [
      {x: 0, y: 1010},
      {x: 200, y: 990},
      {x: 300, y: 965},
      {x: 400, y: 930},
      {x: 500, y: 880},
      {x: 600, y: 815},
      {x: 715, y: 715}
    ]
  }
};

export default function Blind() {
  const [ring, setRing] = useState('first');

  useEffect(() => {
    const handleKeybind = event => {
      const { code } = event;
      const key = Object.keys(rings).find(key => rings[key].code === code);
      if (key) {
        setRing(key);
      }
    }

    document.addEventListener('keydown', handleKeybind);
    return () => {
      document.removeEventListener('keydown', handleKeybind);
    }
  });

  return (
    <div className={sheets.container}>
      <h1 className={sheets.title}>blind</h1>
      <h1>{ring} ring</h1>

      <table className={`${sheets.table} ${styles.table}`}>
        <thead>
          <tr>
            <th>x</th>
            <th>y</th>
          </tr>
        </thead>

        <tbody>
          {rings[ring].coordinates.map((row, index) => 
            <tr key={index}>
              <td>{row.x}</td>
              <td>{row.y}</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className={sheets.keybinds}>
        <div>
          <Keybind content="1"/> <span>- first ring</span>
        </div>
        <div>
          <Keybind content="2"/> <span>- second ring</span>      
        </div>
        <div>
          <Keybind content="3"/> <span>- third ring</span>
        </div>
      </div>
    </div>
  )
}
