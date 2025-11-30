import React from "react";
import EmployeeGrid from "./components/EmployeeGrid";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        FactWise Employee Dashboard
      </h1>

      <EmployeeGrid />
    </div>
  );
}

export default App;
