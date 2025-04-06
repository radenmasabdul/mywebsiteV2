import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import workData, { WorkData } from "../utils/workData";
import DetailProject from "../pages/DetailProject";

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<WorkData | null>(null);
  const { t } = useTranslation();

  return (
    <main className="px-4 sm:px-8 md:px-12 lg:px-20 py-12 sm:py-16 dark:bg-gray-800">
      <section className="text-center mb-8 sm:mb-10">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold font-plus-jakarta text-black dark:text-white">
          {t("work.title")}
        </h2>
      </section>

      <div className="flex flex-col gap-10 sm:gap-12 md:gap-16 lg:gap-20">
        {workData.map((project) => (
          <section
            key={project.id}
            className="relative px-4 sm:px-8 md:px-10 pt-8 rounded-2xl shadow-lg overflow-hidden group transition-all duration-500 ease-in-out bg-gray-100 dark:bg-gray-500 cursor-pointer min-[1025px]:min-h-screen min-[1281px]:min-h-screen"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out pointer-events-none"
              style={{
                background: `radial-gradient(circle at 110% -15%, ${
                  project.themeColor
                } 15%, 
                  rgba(${project.themeColor
                    .replace("rgb(", "")
                    .replace(")", "")}, 0.6) 40%, 
                  rgba(${project.themeColor
                    .replace("rgb(", "")
                    .replace(")", "")}, 0.2) 70%, 
                  transparent 90%)`,
                filter: "blur(40px)",
              }}
            ></div>

            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-white dark:bg-gray-700">
                  <img
                    src={project.logo}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                    alt={`${t(project.nameKey)} Logo`}
                  />
                </span>
                <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold font-plus-jakarta text-gray-900 dark:text-white">
                  {t(project.nameKey)}
                </h3>
              </div>

              <button onClick={() => setSelectedProject(project)}>
                <ArrowRight className="text-gray-700 dark:text-gray-300 w-5 h-5 sm:w-7 sm:h-7 cursor-pointer" />
              </button>
            </div>

            <div className="py-3 relative z-10">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-white leading-relaxed font-plus-jakarta">
                {t(project.descriptionKey)}
              </p>
            </div>

            <div className="flex justify-center relative z-10">
              <div className="absolute left-28 mt-10 transform -rotate-6 z-50 transition-all duration-500 ease-in-out group-hover:-translate-x-5 group-hover:-rotate-12 hidden lg:block">
                <figure>
                  <img
                    src={project.mobileImage}
                    alt="logo mobile"
                    className="w-full"
                  />
                </figure>
              </div>

              <div className="block">
                <figure>
                  <img
                    src={project.webImage}
                    alt="logo web"
                    className="w-full"
                  />
                </figure>
              </div>
            </div>
          </section>
        ))}
      </div>

      {selectedProject && (
        <DetailProject
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </main>
  );
}
