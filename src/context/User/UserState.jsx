import { useReducer } from "react";
import UserReducer from "./UserReducer";
import UserContext from "./UserContext";
import { any } from "prop-types";

const UserState = ({ children }) => {
  // 1. Estado Inicial
  const initialState = {
    user: {
      firstName: "Valor",
      lastName: "Por defecto",
    },
  };

  // 2. Activación y manejo de cambios
  const [globalState, dispatch] = useReducer(UserReducer, initialState);

  // 3. Funciones para ejecutar cambios
  const getUser = () => {
    const firstName = "Mike";
    const lastName = "Nieva";

    return dispatch({
      type: "GET_USER",
      payload: {
        firstName,
        lastName,
      },
    });
  };

  const getUserFromAPI = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "GET",
        }
      );

      const data = await response.json();

      dispatch({
        type: "GET_USER",
        payload: {
          firstName: data[0].name,
          lastName: data[0].username,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  // 4. Retorno y proveeduría
  return (
    <UserContext.Provider
      value={{
        user: globalState.user,
        getUser,
        getUserFromAPI,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;

UserState.propTypes = {
  children: any,
};
