import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import ExerciseContext from "./components/ExerciseContext";

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "GET",
          }
        );

        const data = await response.json();

        const dataWithAuthor = data.map((e) => {
          return {
            ...e,
            author: "Mike",
          };
        });

        setPosts(dataWithAuthor);
      } catch (error) {
        console.log(error);
        setError("Hubo un error en la llamada...");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <p>Está cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h1>Blog</h1>

      <ExerciseContext />

      <section>
        <h2>Publicaciones</h2>
        {posts.map(({ userId, id, title, body, author }) => (
          <article key={id}>
            <h3>{title}</h3>
            <span>
              {author} - {userId}
            </span>
            <p>{body}</p>
          </article>
        ))}
      </section>
    </>
  );
}

export default App;
