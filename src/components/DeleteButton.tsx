type DeleteButtonProps = {
  id: number;
  onDeleteTodo: (id: number) => void;
};

const DeleteButton = ({ id, onDeleteTodo }: DeleteButtonProps) => {
  return (
    <button
      onClick={(event) => {
        event.stopPropagation();
        onDeleteTodo(id);
      }}
    >
      ❌
    </button>
  );
};

export default DeleteButton;
