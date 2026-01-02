import { Edit2, Trash2 } from "lucide-react";
import Image from "next/image";
import { MovieTableProps } from "@/types/ui";

const MovieTable = ({ movies, onEdit, onDelete }: MovieTableProps) => {
  const columnClasses = "padding-lg text-sm font-medium text-white";

  return (
    <div className="w-full overflow-x-auto rounded-lg bg-black/40 backdrop-blur-sm">
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/10 text-left">
            <th className={columnClasses}>Poster</th>
            <th className={columnClasses}>Title</th>
            <th className={columnClasses}>Release Date</th>
            <th className={columnClasses}>Rating</th>
            <th className={columnClasses}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr
              key={movie.id}
              className="border-b border-white/5 transition-colors hover:bg-white/5"
            >
              <td className="padding-lg">
                {movie.poster_path ? (
                  <div className="relative h-16 w-11 overflow-hidden rounded">
                    <Image
                      src={movie.poster_path}
                      alt={movie.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-16 w-11 items-center justify-center rounded bg-white/10 text-xs text-white/40">
                    No Image
                  </div>
                )}
              </td>
              <td className="padding-lg text-sm font-medium text-white">
                {movie.title}
              </td>
              <td className="padding-lg text-sm text-white/70">
                {movie.release_date || "N/A"}
              </td>
              <td className="padding-lg">
                <div className="flex items-center gap-1">
                  <span className="text-sm font-semibold text-yellow-500">
                    {movie.vote_average.toFixed(1)}
                  </span>
                  <span className="text-xs text-white/40">/10</span>
                </div>
              </td>
              <td className="padding-lg">
                <ActionButtons
                  onEdit={() => onEdit(movie)}
                  onDelete={() => onDelete(movie)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {movies.length === 0 && (
        <div className="text-secondary flex h-40 items-center justify-center">
          No movies found
        </div>
      )}
    </div>
  );
};

const ActionButtons = ({
  onEdit,
  onDelete,
}: {
  onEdit: () => void;
  onDelete: () => void;
}) => {
  return (
    <div className="flex gap-2">
      <button
        onClick={onEdit}
        className="padding-md rounded text-white/60 transition-colors hover:bg-green-600/20 hover:text-green-400"
        title="Edit"
      >
        <Edit2 size={16} />
      </button>
      <button
        onClick={onDelete}
        className="padding-md rounded text-white/60 transition-colors hover:bg-red-600/20 hover:text-red-400"
        title="Delete"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
};

export default MovieTable;
