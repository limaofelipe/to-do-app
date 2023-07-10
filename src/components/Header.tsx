import IconLogo from '../assets/icon-logo.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={IconLogo} alt="Logotipo do Ignite: Triangulo Verde" />
    </header>
  );
}