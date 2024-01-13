import React from "react";

interface TableProps {
  data: Array<object>;
  header: Array<string>;
}

const Table: React.FC<TableProps> = ({ data, header }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-red-700 uppercase dark:text-gray-400">
          <tr>
            {header.map((element, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
              >
                {element}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => (
            <tr key={index} className="border-gray-200 dark:border-gray-700">
              {header.map((header_element, header_index) => (
                <td key={header_index} className="px-6 py-4">
                  {(element as any)[header_element]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
