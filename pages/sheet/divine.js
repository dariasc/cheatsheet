import { useEffect, useState } from 'react';
import Keybind from '../../components/keybind';
import styles from '../../styles/sheet/Divine.module.css'

const divine = {
  'normal': {
    'coordinates': [
      {s1: '251,50', s2: '-169,192', s3: '-82,-242'},
      {s1: '213,142', s2: '-230,113', s3: '17,-255'},
      {s1: '142,213', s2: '113,-230', s3: '-255,17'},
      {s1: '50,251', s2: '192,-169', s3: '-242,-82'},
      {s1: '-50,251', s2: '-113,-230', s3: '242,-82'},
      {s1: '-142,213', s2: '230,113', s3: '255,17'},
      {s1: '-213,142', s2: '-169,192', s3: '-17,-255'},
      {s1: '-251,50', s2: '169,192', s3: '82,-242'},
      {s1: '-251,-50', s2: '169,-192', s3: '82,242'},
      {s1: '-213,-142', s2: '230,-113', s3: '-17,255'},
      {s1: '-142,-213', s2: '-113,230', s3: '255,-17'},
      {s1: '-50,-251', s2: '-192,169', s3: '242,82'},
      {s1: '50,-251', s2: '192,169', s3: '-242,82'},
      {s1: '142,-213', s2: '113,230', s3: '-255,-17'},
      {s1: '213,-142', s2: '-230,-113', s3: '255,17'},
      {s1: '251,-50', s2: '-169,-192', s3: '-82,-242'},
    ]
  },
  'high_roll': {
    'coordinates': [
        {s1: '186,37', s2: '-125,143', s3: '-61,-180'},
        {s1: '158,106', s2: '-170,84', s3: '12,-190'},
        {s1: '186,158', s2: '-190,12', s3: '84,-170'},
        {s1: '37,186', s2: '-180,-61', s3: '143,-125'},
        {s1: '-37,186', s2: '-143,-125', s3: '180,-61'},
        {s1: '-106,158', s2: '-84,-170', s3: '190,12'},
        {s1: '-158,106', s2: '-12,-190', s3: '170,84'},
        {s1: '-186,37', s2: '61,-180', s3: '125,143'},
        {s1: '-183,-37', s2: '125,-143', s3: '61,180'},
        {s1: '-158,-106', s2: '170,-84', s3: '-12,190'},
        {s1: '-106,-158', s2: '190,-12', s3: '-84,170'},
        {s1: '-37,-186', s2: '180,61', s3: '-143,125'},
        {s1: '37,-186', s2: '143,125', s3: '-180,61'},
        {s1: '106,-158', s2: '84,170', s3: '-190,-12'},
        {s1: '158,-106', s2: '12,190', s3: '-170,-84'},
        {s1: '186,-37', s2: '-61,180', s3: '-125,-143'},
    ]
  }
};

export default function Divine() {
  const [type, setType] = useState('normal');

  useEffect(() => {
    const handleSpace = event => {
      const { code } = event;
      if (code === 'Space') {
        setType(type === 'normal' ? 'high_roll' : 'normal');
      }
    }

    document.addEventListener('keydown', handleSpace);
    return () => {
      document.removeEventListener('keydown', handleSpace);
    }
  })

  return (
    <div className={styles.container}>
      <h1>divine | {type}</h1>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>s₁</th>
            <th>s₂</th>
            <th>s₃</th>
          </tr>
        </thead>

        <tbody>
          {divine[type].coordinates.map((row, index) => 
            <tr key={index}>
              <td>{index}</td>
              <td>{row.s1}</td>
              <td>{row.s2}</td>
              <td>{row.s3}</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className={styles.keybind} >
        <Keybind content="space"/> <span>- change roll</span>
      </div>
    </div>
  )
}
