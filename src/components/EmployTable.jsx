import React from "react";

const EmployTable = ({ employee, handleDeleteEmployee,handleEditEmployee }) => {
  return (
    <>
      <table class="table text-gray-400 border-separate space-y-6 text-sm">
        <thead class="bg-blue-500 text-white">
          <tr>
            <th class="p-3">ID</th>
            <th class="p-3">Name</th>
            <th class="p-3 text-left">Mail</th>
            <th class="p-3 text-left">Phone</th>
            <th class="p-3 text-left">Role</th>
            <th class="p-3 text-left">Status</th>
            <th class="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((employ, index) => (
            <tr class="bg-blue-200 lg:text-black" key={index}>
              <td class="p-3">{employ.id}</td>
              <td class="p-3 font-medium capitalize">{employ.name}</td>
              <td class="p-3">{employ.mail}</td>
              <td class="p-3">{employ.phone}</td>
              <td class="p-3 uppercase">admin</td>
              <td class="p-3">
                <span class="bg-green-400 text-gray-50 rounded-md px-2">
                  ACTIVE
                </span>
              </td>
              <td class="p-3">
                <button className="bg-purple-500 shadow-lg shadow-cyan-500/50 text-white font-bold rounded">
                  Update
                </button>
                <button onClick={()=> handleEditEmployee(employ)} className="bg-yellow-500 mx-2 shadow-lg shadow-cyan-500/50 text-white font-bold rounded">
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteEmployee(employ.id)}
                  className="bg-red-500 shadow-lg shadow-cyan-500/50 text-white font-bold rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default EmployTable;
