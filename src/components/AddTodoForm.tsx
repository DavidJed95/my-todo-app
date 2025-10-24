import { useState } from "react";
import Button from "./Button";
import { useTodosContext } from "../lib/hooks";

const AddTodoForm = () => {
  const [todoText, setTodoText] = useState("");
  const { handleAddTodo } = useTodosContext();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleAddTodo(todoText);
        setTodoText("");
      }}
    >
      <h2 className="font-medium text-[#231d15]">Add a todo</h2>
      <input
        className="h-[45px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full px-[16px]"
        type="text"
        value={todoText}
        onChange={(event) => {
          setTodoText(event.target.value);
        }}
      />
      <Button>Add to list</Button>
    </form>
  );
};

export default AddTodoForm;
