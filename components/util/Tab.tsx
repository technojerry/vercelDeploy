import React from "react";

interface TabProps {
  data: Array<string>;
}

const Table: React.FC<TabProps> = ({ data }) => {
  return (
    <div className="text-sm font-medium text-center text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        {data.map((element, index) => (
          <li key={index} className="me-2">
            <a
              href="#"
              className="inline-block p-4 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >
              {element}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Table;
