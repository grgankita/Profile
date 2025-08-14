import React from "react";
import { workData, assets } from "../assets/assets.js";

const Work = () => {
  return (
    <section id="experience" className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2" />
          <div className="block md:hidden absolute left-4 top-0 bottom-0 w-px bg-gray-300" />

          <div className="space-y-12">
            {workData.map((work) => (
              <div
                key={work.id}
                className="relative md:grid md:grid-cols-9 items-start gap-4"
              >
                {/* Mobile dot */}
                <div className="absolute -left-[6px] md:static md:col-span-1 flex justify-center">
                  {/* <span className="w-4 h-4 bg-blue-500 rounded-full mt-3" /> */}
                  <span
                    className="absolute w-4 h-4 bg-blue-500 rounded-full
                         left-4 md:left-1/2 transform md:-translate-x-1/2
                         top-6 z-10"
                  />
                </div>

                {/* Work Card */}
                <div className="md:col-span-4 md:col-start-1">
                  <article className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow ml-8 md:ml-0">
                    <p className="text-sm text-gray-500">
                      {work.company} • {work.location}
                    </p>

                    <h3 className="text-xl font-bold mt-1">{work.position}</h3>

                    <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
                      <span>{work.date}</span>
                      <span className="ml-2 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                        {work.type}
                      </span>
                    </div>

                    <p className="mt-3 text-gray-700 dark:text-gray-300">
                      {work.summary}
                    </p>

                    <ul className="list-disc list-inside mt-3 text-gray-600 dark:text-gray-300 space-y-1">
                      <h6>Key Achievements</h6>
                      {work.achievements.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-3 mt-4">
                      {work.tech.map((tech) => {
                        const Icon = assets[tech];
                        return Icon ? (
                          <div
                            key={tech}
                            className="flex items-center gap-2 text-sm"
                          >
                            <Icon
                              className="w-5 h-5 text-gray-700 dark:text-gray-200"
                              title={tech}
                            />
                            <span className="hidden sm:inline text-xs text-gray-600">
                              {tech}
                            </span>
                          </div>
                        ) : (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 bg-gray-200 rounded"
                          >
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
