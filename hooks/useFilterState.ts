import { useState } from "react";

const useFilterState = (defaultFilters = {}) => {
  const [selectedFilters, setSelectedFilters] =
    useState<Record<string, string[]>>(defaultFilters);

  const toggleFilter = (filterId: string, value: string) => {
    setSelectedFilters((prev) => {
      const current = prev[filterId] || [];
      const isSelected = current.includes(value);
      const newValues = isSelected
        ? current.filter((v) => v !== value)
        : [...current, value];

      return { ...prev, [filterId]: newValues };
    });
  };

  const clearFilters = () => setSelectedFilters({});

  const activeFilterCount = Object.values(selectedFilters).reduce(
    (count, arr) => count + arr.length,
    0
  );

  const hasActiveFilters = activeFilterCount > 0;

  return {
    selectedFilters,
    toggleFilter,
    clearFilters,
    activeFilterCount,
    hasActiveFilters,
  };
};

export default useFilterState;
