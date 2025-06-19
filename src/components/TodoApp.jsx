import React, { useState } from "react";
import TodoHeader from "./TodoHeader";
import TodoStats from "./TodoStats";
import AddTodoForm from "./AddTodoForm";
import FilterButtons from "./FilterButtons";
import TodoList from "./TodoList.jsx";
import TodoFooter from "./TodoFooter";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [newTodo, setNewTodo] = useState("");
  const [newPriority, setNewPriority] = useState("medium");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: newTodo.trim(),
          completed: false,
          priority: newPriority,
        },
      ]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const stats = {
    total: todos.length,
    completed: todos.filter((t) => t.completed).length,
    active: todos.filter((t) => !t.completed).length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-2xl mx-auto">
        <TodoHeader />

        <TodoStats stats={stats} />

        <AddTodoForm
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          newPriority={newPriority}
          setNewPriority={setNewPriority}
          onAddTodo={addTodo}
        />

        <FilterButtons currentFilter={filter} onFilterChange={setFilter} />

        <TodoList
          todos={todos}
          filter={filter}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />

        <TodoFooter completedCount={stats.completed} />
      </div>
    </div>
  );
};

export default TodoApp;
