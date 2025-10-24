import { useTodosContext } from "../lib/hooks";

const Counter = () => {
  const { totalAmountOfTodos, numberOfCompletedTodos } = useTodosContext();
  return (
    <p>
      <b>{numberOfCompletedTodos}</b> / {totalAmountOfTodos} todos completed
    </p>
  );
};

export default Counter;
