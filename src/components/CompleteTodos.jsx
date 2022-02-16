import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onclickReturn } = props;
  return (
    <div className="complete-area">
      <div>
        <p className="title">完了のTODO</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onclickReturn(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
