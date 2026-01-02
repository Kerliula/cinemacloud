import { TableProps, UsersColumnDef } from "@/types/ui";

const Table = <T extends Record<string, unknown>>({
  columns,
  data,
}: TableProps<T>) => {
  const columnClasses = "padding-lg text-sm font-medium text-white";

  const normalizedColumns: UsersColumnDef<T>[] = columns.map((col) => {
    if (typeof col === "string") {
      return {
        key: col,
        header: col,
      };
    }
    return col;
  });

  return (
    <div className="w-full overflow-x-auto rounded-lg bg-black/40 backdrop-blur-sm">
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/10 text-left">
            {normalizedColumns.map((column) => (
              <th key={column.key} className={columnClasses}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-white/5 transition-colors hover:bg-white/5"
            >
              {normalizedColumns.map((column) => (
                <td
                  key={column.key}
                  className={
                    column.className || "padding-lg text-sm text-white/70"
                  }
                >
                  {column.render
                    ? column.render(row, rowIndex)
                    : (row[column.key] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
