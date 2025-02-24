import React from "react";

const ProjectResume = ({ dates, type, position, bullets }) => {
  // Ensure bullets is always an array
  const bulletsArray = Array.isArray(bullets) ? bullets : [bullets];

  return (
    <div className="mt-5 w-full flex mob:flex-col desktop:flex-row justify-between">
      <div className="text-lg w-2/5">
        <h2>{dates}</h2>
        <h3 className="text-sm opacity-50">{type}</h3>
      </div>
      <div className="w-3/5">
        <h2 className="text-lg font-bold">{position}</h2>
        {bulletsArray.length > 0 && (
          <ul className="list-disc">
            {bulletsArray.map((bullet, index) => (
              <li key={index} className="text-sm my-1 opacity-70 text-justify">
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectResume;