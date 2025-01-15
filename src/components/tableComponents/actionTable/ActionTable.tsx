import React from "react";
import { Row } from "../../../pages/componentPages/TablesPage";

const ActionTable = ({
  data,
  columns,
  onEdit,
  onDelete,
}: {
  data: any[];
  columns: any[];
  onEdit: (row: Row) => void;
  onDelete: (row: Row) => void;
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-primary/10">
            {columns.map((col, index) => (
              <th
                key={index}
                className="px-4 py-2 text-left text-sm font-medium text-primary border-b border-gray-400/30"
              >
                {col}
              </th>
            ))}
            <th className="px-4 py-2 text-left text-sm font-medium text-primary border-b border-gray-400/30">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-transparent" : "bg-primary/5"
              } hover:bg-primary/10`}
            >
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className="px-4 py-2 text-sm text-primary border-b border-gray-400/30"
                >
                  {row[col.toLowerCase()]}
                </td>
              ))}
              <td className="px-4 py-2 text-sm text-primary border-b border-gray-400/30">
                <div className="flex gap-1 items-center max-md:flex-col">
                  {" "}
                  <button
                    onClick={() => onEdit(row)}
                    className="px-2 py-1 w-24 text-xs text-white bg-blue-500 rounded hover:bg-blue-500/50 transition-all ease-in-out duration-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(row)}
                    className="ml-2 px-2 py-1 w-24 text-xs text-white bg-red-500 rounded hover:bg-red-500/50 transition-all ease-in-out duration-500"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActionTable;
