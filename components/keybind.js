import styles from '../styles/Keybind.module.css'

export default function Keybind(props) {
  return (
    <kbd className={styles.box}>
      {props.content}
    </kbd>
  );
}
