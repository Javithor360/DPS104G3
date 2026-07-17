// src/app/page.tsx
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const exercises = [
    { id: 1, title: "Ejercicio 1", desc: "Directorio de Perfiles" },
    { id: 2, title: "Ejercicio 2", desc: "Tienda Online" },
    { id: 3, title: "Ejercicio 3", desc: "Registro de Usuario" },
    { id: 4, title: "Ejercicio 4", desc: "Mi Tienda Tech" },
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
            <Link
              key={ex.id}
              href={`/ejercicio${ex.id}`}
              className={styles.card}
            >
              <h2>{ex.title}</h2>
              <p>{ex.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
