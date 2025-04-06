import { useState } from "react";

export default function ReadMore({ text }: { text: string }) {
  const [showFull, setShowFull] = useState(false);
  const shortText = text.slice(0, 120) + "...";

  const handleToggle = () => setShowFull(!showFull);

  return (
    <p className="text-base text-gray-800 font-plus-jakarta dark:text-white leading-relaxed">
      {showFull ? (
        <>
          {text}{" "}
          <button
            onClick={handleToggle}
            className="text-blue-600 hover:underline ml-1"
          >
            Read Less
          </button>
        </>
      ) : (
        <>
          {shortText}{" "}
          <button
            onClick={handleToggle}
            className="text-blue-600 hover:underline ml-1"
          >
            Read More
          </button>
        </>
      )}
    </p>
  );
}
