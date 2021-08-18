import { useEffect, useState } from 'react';
import Keybind from '../../components/keybind';
import styles from '../../styles/sheet/DistanceEstimation.module.css'

let distance = [
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
]

let overworld = <h1 className={styles.overworld}>overworld</h1>
let nether = <h1 className={styles.nether}>nether</h1>

let flipType = (type) => {
  switch (type) {
    case "overworld":
      return "nether";
    case "nether":
      return "overworld";
    default:
      throw 'Invalid type'
  }
}

export default function DistanceEstimation() {
  const [type, setType] = useState("overworld");

  useEffect(() => {
    const handleSpace = event => {
      const { code } = event;
      if (code === "Space") {
        setType(flipType(type));
      }
    }

    document.addEventListener("keydown", handleSpace);
    return () => {
      document.removeEventListener("keydown", handleSpace);
    }
  })

  return (
    <div className={styles.container}>
      <div className={styles.headers}>
        <span className={styles.active}>
            {type === "overworld" ? overworld : nether}
        </span>
        <span className={styles.inactive}>
            {type === "overworld" ? nether : overworld}
        </span>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>ϑ</th>
            <th>Δ</th>
          </tr>
        </thead>

        <tbody>
          {distance.map(row => 
            <tr key={row.angle}>
              <td>{row.angle.toFixed(1)}</td>
              <td>
                {type === "overworld" ? row.dist : Math.floor(row.dist/8)}
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className={styles.keybind} >
        <Keybind content="space"/> <span>- change dimension</span>
      </div>
    </div>
  )
}
