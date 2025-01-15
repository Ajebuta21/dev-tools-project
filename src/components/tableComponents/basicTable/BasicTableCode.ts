export const BasicTableCode = `
import React from "react";

const BasicTable = ({ data, columns }) => {
  //Default data
  // const columns = ["Name", "Email", "Role"];
  // const data = [
  //   { name: "John Doe", email: "john@example.com", role: "Admin" },
  //   { name: "Jane Smith", email: "jane@example.com", role: "User" },
  //   { name: "Alice Brown", email: "alice@example.com", role: "Editor" },
  // ];

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
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={\`\${
                index % 2 === 0 ? "bg-transparent" : "bg-primary/5"
              } hover:bg-primary/10\`}
            >
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className="px-4 py-2 text-sm text-primary border-b border-gray-400/30"
                >
                  {row[col.toLowerCase()]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BasicTable;
`