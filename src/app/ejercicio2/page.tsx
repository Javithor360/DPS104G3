// src/app/ejercicio2/page.tsx
import ProductList from "../components/ProductList";
import styles from "../page.module.css";

export default function Ejercicio2() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Tienda Online</h1>
        <p className={styles.subtitle}>
          Lista de productos con filtro por categoría
        </p>
        <ProductList />
      </div>
    </main>
  );
}
