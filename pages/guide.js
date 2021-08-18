import Keybind from '../components/keybind';
import styles from '../styles/Guide.module.css'

export default function Guide() {
  return (
    <div>
      <h1 className={styles.title}>cheat_sheet</h1>
      
      <div className={styles.keybind}>
        <div>
          <Keybind content="b"/> <span> - blind coordinates</span>
        </div>
        <div>
          <Keybind content="t"/> <span> - triangulation</span>
        </div>
        <div>
          <Keybind content="r"/> <span> - ring sizes</span>
        </div>
        <div>
          <Keybind content="d"/> <span> - divine travel</span>
        </div>
      </div>
    </div>
  )
}
