"use client";
import { useState } from "react";
import styles from "../page.module.css";
import Modal, { ModalProps } from "../components/Modal";

// Interfaz para las películas
interface Movie {
  id: number;
  title: string;
  year: number;
  image: string;
  director: string;
  rating: number;
  synopsis: string;
}

// Datos de ejemplo
const movies: Movie[] = [
  {
    id: 1,
    title: "Spiderman: Brand New Day",
    year: 2025,
    image:
      "https://m.media-amazon.com/images/M/MV5BOWNjYWM3NWItOGE0ZS00MWRjLThiZWEtYjc4ZmNmMmU5ZTVmXkEyXkFqcGc@._V1_.jpg",
    director: "Jon Watts",
    rating: 8.5,
    synopsis:
      "Peter Parker se enfrenta a nuevos desafíos y villanos en una ciudad que ha olvidado quién es realmente.",
  },
  {
    id: 2,
    title: "The Oddissey",
    year: 2025,
    image:
      "https://m.media-amazon.com/images/M/MV5BZDY2NTkxMWQtMmNkMC00NmNjLWIzMmItNmEyMmRmMDk2YmY2XkEyXkFqcGc@._V1_.jpg",
    director: "Christopher Nolan",
    rating: 7.8,
    synopsis:
      "Una épica adaptación del clásico de Homero, donde Odiseo lucha por regresar a casa después de la guerra de Troya.",
  },
  {
    id: 3,
    title: "Toy Story 5",
    year: 2026,
    image:
      "https://m.media-amazon.com/images/M/MV5BZTI1YTBiNmEtYWUxZi00YzFkLWIzNjMtMmZjMmY2NzM0ZWMzXkEyXkFqcGc@._V1_.jpg",
    director: "Andrew Stanton",
    rating: 8.0,
    synopsis:
      "Woody, Buzz y la pandilla se enfrentan a un nuevo mundo donde la tecnología y los juguetes clásicos colisionan.",
  },
  {
    id: 4,
    title: "Minions & Monsters",
    year: 2025,
    image:
      "https://m.media-amazon.com/images/M/MV5BYzBjMDg4YjctYzg3ZS00ZDFmLWI1YjctM2RkZGVjZWEyYWQ0XkEyXkFqcGc@._V1_.jpg",
    director: "Kyle Balda",
    rating: 7.5,
    synopsis:
      "Los Minions se sumergen en una aventura de rol de fantasía llena de monstruos y magia.",
  },
  {
    id: 5,
    title: "Supergirl",
    year: 2026,
    image:
      "https://m.media-amazon.com/images/M/MV5BMmJkOTE0MWUtY2E5OS00NzEyLWI4NjEtYzQzYzFmMjk5ODE3XkEyXkFqcGc@._V1_.jpg",
    director: "Craig Gillespie",
    rating: 8.1,
    synopsis:
      "Kara Zor-El viaja por la galaxia buscando respuestas sobre su pasado y su destino como heroína.",
  },
  {
    id: 6,
    title: "The Super Mario Galaxy Movie",
    year: 2027,
    image:
      "https://m.media-amazon.com/images/M/MV5BMGIzMGI4OWYtNzdkMy00MjJlLWJiMDMtZjY1Y2UwMzQ0YzY3XkEyXkFqcGc@._V1_.jpg",
    director: "Aaron Horvath",
    rating: 8.9,
    synopsis:
      "Mario viaja por el espacio para rescatar a la Princesa Peach de las garras de Bowser a nivel galáctico.",
  },
  {
    id: 7,
    title: "Obsession",
    year: 2026,
    image:
      "https://m.media-amazon.com/images/M/MV5BYzc1NWUwMDgtNGZlMS00ZmYzLWIzMzktNmMxMmY1MTUzNWExXkEyXkFqcGc@._V1_.jpg",
    director: "Christopher Nolan",
    rating: 7.6,
    synopsis:
      "Un thriller psicológico que explora los límites de la mente humana y la obsesión incontrolable.",
  },
  {
    id: 8,
    title: "Project Hail Mary",
    year: 2026,
    image:
      "https://m.media-amazon.com/images/M/MV5BNTkwNzJiYTctNzI3NC00NjE1LTlhYjktY2Q5MTdmMWFmNzcxXkEyXkFqcGc@._V1_.jpg",
    director: "Phil Lord, Christopher Miller",
    rating: 8.7,
    synopsis:
      "El único superviviente en una nave espacial debe salvar a la humanidad de una extinción inminente.",
  },
  {
    id: 9,
    title: "Backrooms",
    year: 2025,
    image:
      "https://m.media-amazon.com/images/M/MV5BYzQyYjZmMjctMzIyZi00MDI0LWJhNGQtMzQ3MTFlNDgwNGM5XkEyXkFqcGc@._V1_.jpg",
    director: "Kane Parsons",
    rating: 7.9,
    synopsis:
      "Un grupo de adolescentes descubre un portal a una dimensión de habitaciones de oficina amarillas e infinitas llenas de terror.",
  },
  {
    id: 10,
    title: "Michael",
    year: 2025,
    image:
      "https://m.media-amazon.com/images/M/MV5BNzllNmRlN2EtMDQyOC00ODJjLTg4OWQtZDNmNGU3YzlkNjc1XkEyXkFqcGc@._V1_.jpg",
    director: "Antoine Fuqua",
    rating: 8.3,
    synopsis:
      "La vida y carrera del icónico Rey del Pop, Michael Jackson, desde sus inicios hasta el estrellato mundial.",
  },
  {
    id: 11,
    title: "Oppenheimer",
    year: 2023,
    image:
      "https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_.jpg",
    director: "Christopher Nolan",
    rating: 8.5,
    synopsis:
      "La historia del científico estadounidense J. Robert Oppenheimer y su papel en el desarrollo de la bomba atómica.",
  },
  {
    id: 12,
    title: "Barbie",
    year: 2023,
    image:
      "https://m.media-amazon.com/images/M/MV5BYjI3NDU0ZGYtYjA2YS00Y2RlLTgwZDAtYTE2YTM5ZjE1M2JlXkEyXkFqcGc@._V1_.jpg",
    director: "Greta Gerwig",
    rating: 7.9,
    synopsis:
      "Barbie sufre una crisis que la lleva a cuestionar su mundo y su existencia, llevándola al mundo real.",
  },
  {
    id: 13,
    title: "Avatar: Ash and Fire",
    year: 2025,
    image:
      "https://m.media-amazon.com/images/M/MV5BZDYxY2I1OGMtN2Y4MS00ZmU1LTgyNDAtODA0MzAyYjI0N2Y2XkEyXkFqcGc@._V1_.jpg",
    director: "James Cameron",
    rating: 8.2,
    synopsis:
      "Jake Sully y Neytiri se encuentran con el Pueblo de las Cenizas, un clan Na'vi con una cultura más agresiva.",
  },
  {
    id: 14,
    title: "Superman",
    year: 2025,
    image:
      "https://m.media-amazon.com/images/M/MV5BOGMwZGJiM2EtMzEwZC00YTYzLWIxNzYtMmJmZWNlZjgxZTMwXkEyXkFqcGc@._V1_.jpg",
    director: "James Gunn",
    rating: 8.4,
    synopsis:
      "El Hombre de Acero intenta equilibrar su herencia kryptoniana con su educación humana.",
  },
  {
    id: 15,
    title: "Hoppers",
    year: 2026,
    image:
      "https://m.media-amazon.com/images/M/MV5BNzRiMzZlMTMtNmU3OC00MDUwLThmNDUtMTBjZmQ3MWQ4NTljXkEyXkFqcGc@._V1_.jpg",
    director: "Daniel Chong",
    rating: 7.7,
    synopsis:
      "Una científica descubre cómo transferir la mente de un humano al cuerpo de un castor robótico.",
  },
  {
    id: 16,
    title: "Inception",
    year: 2010,
    image:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    director: "Christopher Nolan",
    rating: 8.8,
    synopsis:
      "Un ladrón de mentes intenta plantar una idea en el subconsciente de un heredero millonario.",
  },
  {
    id: 17,
    title: "Interstellar",
    year: 2014,
    image:
      "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
    director: "Christopher Nolan",
    rating: 8.6,
    synopsis:
      "Un equipo de astronautas viaja a través de un agujero de gusano para encontrar un nuevo hogar para la humanidad.",
  },
];

export default function Complementario() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleOpenModal = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Galería de Películas</h1>
        <p className={styles.subtitle}>
          Haz clic en una película para ver más detalles.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
                cursor: "pointer",
                backgroundColor: "white",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                transition: "transform 0.2s",
              }}
              onClick={() => handleOpenModal(movie)}
            >
              <img
                src={movie.image}
                alt={movie.title}
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
              <div style={{ padding: "10px", textAlign: "center" }}>
                <h3
                  style={{
                    margin: "0 0 5px",
                    fontSize: "1.1rem",
                    color: "#001f3f",
                  }}
                >
                  {movie.title}
                </h3>
                <p style={{ margin: 0, color: "#666", fontSize: "0.9rem" }}>
                  {movie.year}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Renderiza el modal pasándole las props si hay una película seleccionada */}
        {selectedMovie && (
          <Modal
            isOpen={!!selectedMovie}
            onClose={handleCloseModal}
            title={selectedMovie.title}
            director={selectedMovie.director}
            rating={selectedMovie.rating}
            synopsis={selectedMovie.synopsis}
          />
        )}
      </div>
    </main>
  );
}
