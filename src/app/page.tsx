// src/app/page.tsx
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const exercises = [
    {
      id: 1,
      path: "/ejercicio1",
      title: "Ejercicio 1",
      desc: "Directorio de Perfiles",
    },
    {
      id: 2,
      path: "/ejercicio2",
      title: "Tienda Online",
      desc: "Lista de productos con filtro por categoría",
    },
    {
      id: 3,
      path: "/ejercicio3",
      title: "Ejercicio 3",
      desc: "Formulario con validación en tiempo real",
    },
    {
      id: 4,
      path: "/ejercicio4",
      title: "Mi Tienda Tech",
      desc: "Carrito de compras con composición de componentes",
    },
    {
      id: 5,
      path: "/complementario",
      title: "Complementario",
      desc: "Galería de Películas con Modal",
    },
  ];

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1
          className={styles.title}
          style={{
            textAlign: "center",
            fontSize: "3rem",
            marginBottom: "2rem",
          }}
        >
          DPS104 - Guía 3
        </h1>

        <div className={styles.homeGrid}>
          {exercises.map((ex) => (
            <Link key={ex.id} href={ex.path} className={styles.card}>
              <h2>{ex.title}</h2>
              <p>{ex.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
