"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { sortOptions } from "@/lib/sortOptions";
import { MoviesSorterProps, SortOptionItemProps } from "@/types/ui";

const SortOptionItem: React.FC<SortOptionItemProps> = ({
  option,
  isSelected,
  onSelect,
}) => (
  <li>
    <button
      onClick={() => onSelect(option.value)}
      role="option"
      aria-selected={isSelected}
      className={cn(
        "text-primary flex w-full items-center gap-3 px-4 py-2 text-left text-sm",
        "transition-colors hover:bg-white/10 focus:bg-white/10 focus:outline-none",
        isSelected &&
          "border border-purple-400 bg-purple-800 hover:bg-purple-800"
      )}
    >
      {option.icon}
      <span>{option.label}</span>
    </button>
  </li>
);

const SortMenu: React.FC<{
  isOpen: boolean;
  selectedSort: string;
  onSelect: (value: string) => void;
  onClose: () => void;
}> = ({ isOpen, selectedSort, onSelect, onClose }) => {
  if (!isOpen) return null;

  const menuClasses = cn(
    "absolute top-full left-0 z-20 mt-1 min-w-[200px]",
    "glass-dark rounded-lg border border-white/10 shadow-xl backdrop-blur-md"
  );

  return (
    <>
      <div className={menuClasses}>
        <ul className="py-1" role="listbox" aria-label="Sort movies by">
          {sortOptions.map((option) => (
            <SortOptionItem
              key={option.value}
              option={option}
              isSelected={selectedSort === option.value}
              onSelect={onSelect}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

const MoviesSorter: React.FC<MoviesSorterProps> = ({
  onSortChange,
  defaultValue = "popularity.desc",
  className,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState(defaultValue);

  const selectedOption =
    sortOptions.find((o) => o.value === selectedSort) ?? sortOptions[0];

  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const closeMenu = () => setIsMenuOpen(false);

  const selectOption = (value: string) => {
    setSelectedSort(value);
    closeMenu();
    onSortChange?.(value);
  };

  const triggerClasses = cn(
    "glass-medium flex items-center gap-2 rounded-full",
    "border border-white/10 px-4 py-2 text-sm font-medium text-primary",
    "transition-all hover:border-white/20 hover:bg-white/5",
    "focus:outline-none focus:ring-2 focus:ring-purple-400/20 focus:ring-offset-2",
    isMenuOpen && "border-white/20 bg-white/10"
  );

  return (
    <div className={cn("relative", className)}>
      <button
        onClick={toggleMenu}
        className={triggerClasses}
        aria-haspopup="listbox"
        aria-expanded={isMenuOpen}
      >
        {selectedOption.icon}
        <span>{selectedOption.label}</span>
        <ChevronDown
          size={16}
          className={cn(
            "transition-transform duration-200",
            isMenuOpen && "rotate-180"
          )}
        />
      </button>

      <SortMenu
        isOpen={isMenuOpen}
        selectedSort={selectedSort}
        onSelect={selectOption}
        onClose={closeMenu}
      />
    </div>
  );
};

export default MoviesSorter;
