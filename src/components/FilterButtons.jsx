import React from "react";

const FilterButtons = ({ currentFilter, onFilterChange }) => {
  const filters = ["all", "active", "completed"];

  return (
    <div className="flex justify-center mb-6">
      <div className="bg-white rounded-lg p-1 shadow-sm">
        {filters.map((filterType) => (
          <button
            key={filterType}
            onClick={() => onFilterChange(filterType)}
            className={`px-4 py-2 rounded-md capitalize transition-colors ${
              currentFilter === filterType
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}>
            {filterType}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterButtons;
