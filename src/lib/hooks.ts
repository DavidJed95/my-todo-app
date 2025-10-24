import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContextProvider";

export const useTodosContext = () => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("Forgot to add Provider");
  }
  return context;
};
