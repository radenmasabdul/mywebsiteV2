import { X } from "lucide-react";

interface DetailProjectProps {
  project: {
    id: number;
    name: string;
    description: string;
    webImage: string;
    responsibilities: string;
  };
  onClose: () => void;
}

export default function DetailProject({
  project,
  onClose,
}: DetailProjectProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 cursor-pointer">
      <div className="bg-white dark:bg-gray-800 p-6 pt-12 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 cursor-pointer"
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          {project.name}
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mt-4">
          {project.description}
        </p>

        <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
          Responsibilities
        </h3>

        <ul className="mt-3 list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          {project.responsibilities.split(", ").map((task, index) => (
            <li key={index} className="text-base">
              {task}
            </li>
          ))}
        </ul>

        <img
          src={project.webImage}
          alt={project.name}
          className="mt-6 w-full rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
