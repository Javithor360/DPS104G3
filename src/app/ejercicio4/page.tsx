// src/app/ejercicio4/page.tsx
import ShoppingCart from "../components/ShoppingCart";
import styles from "../page.module.css";

export default function Ejercicio4() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Mi Tienda Tech</h1>
        <p className={styles.subtitle}>
          Carrito de compras con composición de componentes
        </p>
        <ShoppingCart />
      </div>
    </main>
  );
}
