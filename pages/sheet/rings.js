import styles from '../../styles/sheet/Rings.module.css'

let rings = [
    {quantity: 3, inner: 1280, outer: 2816},
    {quantity: 6, inner: 4352, outer: 5888},
    {quantity: 10, inner: 7424, outer: 8960}
]

export default function Rings() {
  return (
    <div className={styles.container}>
      <h1>stronghold rings</h1>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>inner</th>
            <th>outer</th>
          </tr>
        </thead>

        <tbody>
          {rings.map(row => 
            <tr key={row.quantity}>
              <td>{row.quantity}</td>
              <td>{row.inner}</td>
              <td>{row.outer}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
