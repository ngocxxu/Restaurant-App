import React, { useState } from "react";
import EmployForm from "./EmployForm";
import EmployTable from "./EmployTable";

const EmployList = () => {
  const [employee, setEmployee] = useState([
    {
      id: "1",
      name: "ngoc",
      mail: "ngoc@gmail.com",
      phone: "123456",
    },
  ]);
  const [input, setInput] = useState({});

  const handleOnChange = (e) => {
    setInput({
      ...input,
      id: `${employee.length + 1}`,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddEmployee = (e) => {
    e.preventDefault();
    setEmployee([...employee, input]);
  };

  const handleDeleteEmployee = (idItem) => {
    setEmployee(employee.filter((item) => item.id !== idItem));
  };

  const handleEditEmployee = (item) => {
    setInput({
      ...input,
      [item.target.name]: item.target.value,
    });
  };

  return (
    <div>
      <h1 className="font-bold text-2xl my-2">Employees List</h1>
      <div className="w-1/3">
        <EmployForm
          handleAddEmployee={handleAddEmployee}
          employee={employee}
          handleOnChange={handleOnChange}
          input={input}
        />
      </div>
      <EmployTable
        handleEditEmployee={handleEditEmployee}
        handleDeleteEmployee={handleDeleteEmployee}
        employee={employee}
      />
    </div>
  );
};

export default EmployList;
