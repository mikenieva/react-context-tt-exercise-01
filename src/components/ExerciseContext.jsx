import { useContext } from "react";
import UserContext from "../context/User/UserContext";

function ExerciseContext() {
  const userCtx = useContext(UserContext);

  const handleData = () => {
    return userCtx.getUserFromAPI();
  };

  return (
    <section>
      <h2>Datos vía context</h2>
      <p>
        <b>Nombre:</b> {userCtx.user.firstName}
      </p>
      <p>
        <b>Apellido: </b>
        {userCtx.user.lastName}
      </p>

      <button onClick={handleData}>Traer nuevos datos</button>
    </section>
  );
}

export default ExerciseContext;
