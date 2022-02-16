import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { IncompleteTodos } from "./components/incompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");

  const [incompleteToDos, setIncompleteToDos] = useState([]);
  const [completeToDos, setCompleteToDos] = useState([]);

  const onChangeToDoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteToDos, todoText];
    setIncompleteToDos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteToDos];
    newTodos.splice(index, 1);
    setIncompleteToDos(newTodos);
  };

  const onClickComplete = (index) => {
    const newInCompTodos = [...incompleteToDos];
    const newCompTodos = [...completeToDos, newInCompTodos[index]];
    newInCompTodos.splice(index, 1);
    setCompleteToDos(newCompTodos);
    setIncompleteToDos(newInCompTodos);
  };

  const onclickReturn = (index) => {
    const newCompTodos = [...completeToDos];
    const newInCompTodos = [...incompleteToDos, newCompTodos[index]];
    newCompTodos.splice(index, 1);
    setCompleteToDos(newCompTodos);
    setIncompleteToDos(newInCompTodos);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeToDoText}
        onClick={onClickAdd}
        disabled={incompleteToDos.length >= 5}
      />
      {incompleteToDos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodoは五個までです</p>
      )}

      <IncompleteTodos
        todos={incompleteToDos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeToDos} onclickReturn={onclickReturn} />
    </>
  );
};
