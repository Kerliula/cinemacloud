import { useState } from "react";
import { X } from "lucide-react";

const InfoMessage = ({
  message,
  type,
}: {
  message: string;
  type: "success" | "error";
}) => {
  const [visible, setVisible] = useState(true);
  const sharedClasses =
    "padding-lg rounded-md text-sm flex items-center justify-between";

  if (!visible) return null;

  if (type === "success") {
    return (
      <div className={`${sharedClasses} bg-green-100 text-green-800`}>
        {message}
        <XButton onClick={() => setVisible(false)} />
      </div>
    );
  }

  return (
    <div className={`${sharedClasses} bg-red-200 text-red-800`}>
      {message}
      <XButton onClick={() => setVisible(false)} />
    </div>
  );
};

const XButton = ({ onClick }: { onClick: () => void }) => (
  <button onClick={onClick} aria-label="Close">
    <X className="inline-block h-4 w-4 cursor-pointer" />
  </button>
);

export default InfoMessage;
