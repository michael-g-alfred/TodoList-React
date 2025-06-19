import React from "react";

const TodoFooter = ({ completedCount }) => {
  if (completedCount === 0) return null;

  return (
    <div className="text-center mt-8 text-gray-500 text-sm">
      <p>
        🎉 Great job! You've completed {completedCount} task
        {completedCount !== 1 ? "s" : ""}.
      </p>
    </div>
  );
};

export default TodoFooter;
