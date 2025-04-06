import { useState } from "react";

export default function ReadMore({ text }: { text: string }) {
  const [showFull, setShowFull] = useState(false);
  const shortText = text.slice(0, 120) + "...";

  const handleToggle = () => setShowFull(!showFull);

  return (
    <p className="text-base text-gray-800 font-plus-jakarta dark:text-white leading-relaxed">
      {showFull ? (
        <>
          {text}
          <span
            onClick={handleToggle}
            className="inline-block w-3 h-5 align-baseline cursor-pointer"
          ></span>
        </>
      ) : (
        <>
          {shortText}
          <span
            onClick={handleToggle}
            className="inline-block w-3 h-5 align-baseline cursor-pointer"
          ></span>
        </>
      )}
    </p>
  );
}
