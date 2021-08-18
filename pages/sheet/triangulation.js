import { useEffect, useState } from 'react';
import Keybind from '../../components/keybind';
import styles from '../../styles/sheet/Triangulation.module.css';
import sheets from '../../styles/Sheet.module.css';

const distance = [
  {angle: 0.5, dist: 2000},
  {angle: 1.0, dist: 1000},
  {angle: 1.5, dist: 665},
  {angle: 2.0, dist: 500},
  {angle: 2.5, dist: 400},
  {angle: 3.0, dist: 335},
  {angle: 3.5, dist: 285},
  {angle: 4.0, dist: 250},
  {angle: 4.5, dist: 220},
  {angle: 5.0, dist: 200}
];

const dimensions = {
  overworld: {
    factor: 1,
    next: 'nether'
  },
  nether: {
    factor: 8,
    next: 'overworld'
  }
};

export default function Triangulation() {
  const [active, setActive] = useState('overworld');

  useEffect(() => {
    const handleSpace = event => {
      const { code } = event;
      if (code === 'Space') {
        setActive(dimensions[active].next);
      }
    }

    document.addEventListener('keydown', handleSpace);
    return () => {
      document.removeEventListener('keydown', handleSpace);
    }
  });

  const { factor } = dimensions[active];
  return (
    <div className={sheets.container}>
      <h1 className={sheets.title}>triangulation</h1>
      <h1>{active}</h1>

      <table className={`${sheets.table} ${styles.table}`}>
        <thead>
          <tr>
            <th>ϑ</th>
            <th>Δ</th>
          </tr>
        </thead>

        <tbody>
          {distance.map((row, index) => 
            <tr key={index}>
              <td>{row.angle.toFixed(1)}</td>
              <td>{Math.floor(row.dist / factor)}</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className={sheets.keybinds}>
        <Keybind content="space"/> <span>- {dimensions[active].next}</span>
      </div>
    </div>
  )
}
