import styles from '../styles/Keybind.module.css'

export default function Keybind(props) {
  return (
    <key className={styles.box}>
      {props.content}
    </key>
  );
}
