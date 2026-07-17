import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navbarBrand}>
        DPS104 - Guía 3
      </Link>
      <div className={styles.navLinks}>
        <Link href="/ejercicio1" className={styles.navLink}>
          Ejercicio 1
        </Link>
        <Link href="/ejercicio2" className={styles.navLink}>
          Ejercicio 2
        </Link>
        <Link href="/ejercicio3" className={styles.navLink}>
          Ejercicio 3
        </Link>
        <Link href="/ejercicio4" className={styles.navLink}>
          Ejercicio 4
        </Link>
        <Link href="/complementario" className={styles.navLink}>
          Complementario
        </Link>
      </div>
    </nav>
  );
}
