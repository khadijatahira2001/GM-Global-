import React from "react";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ml-6 mt-20">
      <a
        href="#"
        className=" max-w-sm h-96 p-10 dark:bg-orange-500 dark:hover:bg-orange-400 flex items-center"
      >
        <h5 className="mb-2 text-4xl font-bold tracking-tight text-center text-black transition-transform transform hover:text-shadow hover:-translate-y-1">
          Condominium projects
        </h5>
      </a>

      <a
        href="#"
        className="flex items-center max-w-sm p-6  dark:bg-orange-500 dark:hover:bg-orange-400"
      >
        <h5 className="mb-2 text-4xl font-bold tracking-tight top-96 text-black px-16 text-center transition-transform transform hover:text-shadow hover:-translate-y-1">
          Field Testing
        </h5>
      </a>

      <a
        href="#"
        className="flex items-center max-w-sm p-6  dark:bg-orange-500 dark:hover:bg-orange-400">
        <h5 className="mb-2 text-4xl font-bold tracking-tight top-96 text-center px-16 text-black transition-transform transform hover:text-shadow hover:-translate-y-1">
          Investigation
        </h5>
      </a>
    </div>
  );
};

export default Cards;
