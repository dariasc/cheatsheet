import { useEffect, useState } from 'react';
import Keybind from '../../components/keybind';
import Fossil from '../../components/fossil';

import divine from './data/divine.json';
import fossils from './data/fossils.json';

import styles from '../../styles/sheet/Divine.module.css';
import sheets from '../../styles/Sheet.module.css';

const generateTable = (coordinates) => {
  return (
    <table className={`${sheets.table} ${styles.table}`}>
      <thead>
        <tr>
          <th>#</th>
          <th>s₁</th>
          <th>s₂</th>
          <th>s₃</th>
        </tr>
      </thead>
    
      <tbody>
        {coordinates.map((row, index) => 
          <tr key={index}>
            <td>{index}</td>
            <td>{row.s1}</td>
            <td>{row.s2}</td>
            <td>{row.s3}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

const render = {
  fossils: {
    next: 'normal',
    element: (
      // @todo: cache threejs renders as pictures for quick loads
      <div className={styles.fossils}>
        {fossils.map((bones, index) => (
            <Fossil className={styles.fossil} key={index} bones={bones}/>
        ))}
      </div>
    )
  },
  normal: {
    next: 'high_roll',
    element: generateTable(divine.normal)
  },
  high_roll: {
    next: 'fossils',
    element: generateTable(divine.high_roll)
  }
};

export default function Divine() {
  const [active, setActive] = useState('fossils');

  useEffect(() => {
    const handleSpace = event => {
      const { code } = event;
      if (code === 'Space') {
        setActive(render[active].next);
      }
    }

    document.addEventListener('keydown', handleSpace);
    return () => {
      document.removeEventListener('keydown', handleSpace);
    }
  });

  return (
    <div className={sheets.container}>
      <h1 className={sheets.title}>divine</h1>
      <h1>{active}</h1>

      {render[active].element}

      <div className={sheets.keybinds}>
        <Keybind content="space"/> <span>- {render[active].next}</span>
      </div>
    </div>
  )
}
