import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";

// AG Grid CSS
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { employees } from "../data/employees";

//  Only required modules (enterprise NOT needed)
import { ModuleRegistry, ClientSideRowModelModule } from "ag-grid-community";

// Register module
ModuleRegistry.registerModules([ClientSideRowModelModule]);

const EmployeeGrid = () => {
  const [rowData] = useState(employees);

  const columnDefs = [
    { field: "id", sortable: true, filter: true, width: 90 },
    {
      headerName: "Name",
      valueGetter: (p) => `${p.data.firstName} ${p.data.lastName}`,

      flex: 1,
      filter: true,
    },
    { field: "email", flex: 1.2 },
    { field: "department", sortable: true, filter: true },
    { field: "position", flex: 1 },
    { field: "salary", sortable: true },
    { field: "location", sortable: true, filter: true },
    { field: "performanceRating", headerName: "Rating" },
    {
      field: "skills",
      flex: 1,
      cellRenderer: (params) => params.value.join(", "),
    },
    { field: "projectsCompleted", headerName: "Projects", width: 120 },
    {
      field: "isActive",
      headerName: "Active",
      width: 120,
      cellRenderer: (p) => (p.value ? " Yes" : " No"),
    },
  ];

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <div className="ag-theme-alpine" style={{ height: "100%", width: "100%" }}>
        <AgGridReact
  rowData={rowData}
  columnDefs={columnDefs}
  pagination={true}
  paginationPageSize={5}
  enableFilter={true}
  floatingFilter={true}
/>

      </div>
    </div>
  );
};

export default EmployeeGrid;