import React from "react";
import { Trash2, Circle, CheckCircle2 } from "lucide-react";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "border-l-red-500 bg-red-50";
      case "medium":
        return "border-l-yellow-500 bg-yellow-50";
      case "low":
        return "border-l-green-500 bg-green-50";
      default:
        return "border-l-gray-500 bg-gray-50";
    }
  };

  const getPriorityBadgeColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-700";
      case "medium":
        return "bg-yellow-100 text-yellow-700";
      case "low":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-sm border-l-4 ${getPriorityColor(
        todo.priority
      )} transition-all hover:shadow-md`}>
      <div className="p-4 flex items-center gap-3">
        <button
          onClick={() => onToggle(todo.id)}
          className="flex-shrink-0 transition-colors">
          {todo.completed ? (
            <CheckCircle2 className="text-green-600" size={24} />
          ) : (
            <Circle className="text-gray-400 hover:text-gray-600" size={24} />
          )}
        </button>

        <div className="flex-1 min-w-0">
          <p
            className={`text-lg ${
              todo.completed ? "text-gray-500 line-through" : "text-gray-800"
            }`}>
            {todo.text}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <span
              className={`text-xs px-2 py-1 rounded-full ${getPriorityBadgeColor(
                todo.priority
              )}`}>
              {todo.priority} priority
            </span>
          </div>
        </div>

        <button
          onClick={() => onDelete(todo.id)}
          className="flex-shrink-0 p-2 text-gray-400 hover:text-red-600 transition-colors">
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
