import React from "react";

const TodoStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-white rounded-lg p-4 text-center shadow-sm">
        <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
        <div className="text-sm text-gray-600">Total</div>
      </div>
      <div className="bg-white rounded-lg p-4 text-center shadow-sm">
        <div className="text-2xl font-bold text-green-600">
          {stats.completed}
        </div>
        <div className="text-sm text-gray-600">Completed</div>
      </div>
      <div className="bg-white rounded-lg p-4 text-center shadow-sm">
        <div className="text-2xl font-bold text-orange-600">{stats.active}</div>
        <div className="text-sm text-gray-600">Active</div>
      </div>
    </div>
  );
};

export default TodoStats;
