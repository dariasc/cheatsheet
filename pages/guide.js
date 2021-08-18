import Keybind from '../components/keybind';
import styles from '../styles/Guide.module.css'

export default function Guide() {
  return (
    <div className={styles.container}>
      <h1>cheat_sheet</h1>
      
      <div className={styles.keybind}>
        <div>
          <Keybind content="b"/> <span> - blind coordinates</span>
        </div>
        <div>
          <Keybind content="e"/> <span> - distance estimation</span>
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