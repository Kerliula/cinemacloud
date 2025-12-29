"use client";

import {
  MoviesFilterProps,
  FilterMenuProps,
  FilterOptionItemProps,
} from "@/types/ui";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";
import { Menu } from "lucide-react";
import useFilterState from "@/hooks/useFilterState";
import useToggle from "@/hooks/useToggle";
import { X } from "lucide-react";
import { filterOptions } from "@/lib/filterOptions";

const FilterOptionItem = ({
  filter,
  selectedValues,
  onToggle,
}: FilterOptionItemProps) => {
  const { id, icon, label, options = [] } = filter;

  const isSelected = (option: string) => selectedValues.includes(option);

  const buttonClass = (option: string) =>
    cn(
      "rounded-full border px-3 py-1 text-xs transition-colors",
      isSelected(option)
        ? "border-purple-400 bg-primary text-primary"
        : "border-white/10 text-primary hover:border-white/20 hover:bg-white/5"
    );

  return (
    <div className="gap-vertical-md flex flex-col">
      <div className="gap-horizontal-sm flex items-center">
        {icon}
        <span className="text-primary text-sm font-medium uppercase">
          {label}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onToggle(id, option)}
            className={buttonClass(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

const FilterMenu = ({
  isOpen,
  selectedFilters,
  onToggleFilter,
  onClose,
  onApply,
  onClear,
}: FilterMenuProps) => {
  if (!isOpen) return null;

  const menuClasses = cn(
    "absolute top-full left-0 z-20 w-80",
    "glass-dark rounded-lg border border-white/10 shadow-xl backdrop-blur-md",
    "padding-lg gap-vertical-md flex flex-col"
  );

  const hasActiveFilters = Object.values(selectedFilters).some(
    (arr) => arr.length > 0
  );

  return (
    <div className={menuClasses}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-primary text-lg font-semibold uppercase">
          Filters
        </h3>
        <button onClick={onClose} className="text-secondary">
          <X size={15} />
        </button>
      </div>
      {/* Filter Options */}
      <div className="gap-vertical-md flex flex-col overflow-y-auto">
        {filterOptions.map((filter) => (
          <FilterOptionItem
            key={filter.id}
            filter={filter}
            selectedValues={selectedFilters[filter.id] || []}
            onToggle={onToggleFilter}
          />
        ))}
      </div>
      {/* Actions */}
      <div className="border-t border-white/30" />
      <div className="gap-horizontal-lg flex justify-around">
        <Button
          onClick={onClear}
          variant="secondary"
          size="sm"
          className="flex-1"
          disabled={!hasActiveFilters}
        >
          Clear All
        </Button>
        <Button
          onClick={onApply}
          variant="primary"
          size="sm"
          className="flex-1"
        >
          Apply
        </Button>
      </div>
    </div>
  );
};

const MoviesFilter = ({
  onFilterChange,
  defaultFilters = {},
  className,
}: MoviesFilterProps) => {
  const { selectedFilters, toggleFilter, clearFilters } =
    useFilterState(defaultFilters);
  const [isMenuOpen, toggleMenu, closeMenu] = useToggle(false);

  const applyFilters = () => {
    onFilterChange?.(selectedFilters);
    closeMenu();
  };

  return (
    <div className={cn("relative", className)}>
      <Button
        icon={<Menu size={15} />}
        onClick={toggleMenu}
        variant="secondary"
        size="sm"
      >
        Filters
      </Button>

      <FilterMenu
        isOpen={isMenuOpen}
        selectedFilters={selectedFilters}
        onToggleFilter={toggleFilter}
        onClose={closeMenu}
        onApply={applyFilters}
        onClear={clearFilters}
      />
    </div>
  );
};

export default MoviesFilter;
