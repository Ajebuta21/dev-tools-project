import React from "react";
import { globalStyles } from "../../global/globalStyles";
import ComponentsContainer from "../../components/others/ComponentsContainer";
import BasicTable from "../../components/tableComponents/basicTable/BasicTable";
import { BasicTableCode } from "../../components/tableComponents/basicTable/BasicTableCode";
import { ActionTableCode } from "../../components/tableComponents/actionTable/ActionTableCode";
import ActionTable from "../../components/tableComponents/actionTable/ActionTable";

export type Row = {
  name: string;
  email: string;
  role: string;
};

const columns = ["Name", "Email", "Role"];
const data = [
  { name: "John Doe", email: "john@example.com", role: "Admin" },
  { name: "Jane Smith", email: "jane@example.com", role: "User" },
  { name: "Alice Brown", email: "alice@example.com", role: "Editor" },
];

const TablesPage = () => {
  const handleEdit = (row: Row) => {
    const foundRole = data.find(
      (item) => item.name === row.name && item.email === row.email
    );
    if (!foundRole) {
      return;
    }
    alert(`Editing ${foundRole.name}`);
  };

  const handleDelete = (row: Row) => {
    const foundRole = data.find(
      (item) => item.name === row.name && item.email === row.email
    );
    if (!foundRole) {
      return;
    }
    alert(`Deleting ${foundRole.name}`);
  };
  return (
    <div className={globalStyles.container2}>
      <h1 className={globalStyles.header}>Table components</h1>
      <div className="w-full flex flex-col gap-10">
        <ComponentsContainer
          title="basic table"
          code={BasicTableCode}
          component={<BasicTable columns={columns} data={data} />}
        />
        <ComponentsContainer
          title="table with action"
          code={ActionTableCode}
          component={
            <ActionTable
              columns={columns}
              data={data}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          }
        />
      </div>
    </div>
  );
};

export default TablesPage;
