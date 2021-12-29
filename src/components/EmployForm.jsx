import React from "react";

const EmployForm = ({ handleOnChange, handleAddEmployee,input }) => {
  return (
    <>
      <form
        onSubmit={handleAddEmployee}
        class="bg-white p-10 rounded-lg shadow-lg min-w-full"
      >
        <h1 class="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
          Formregister
        </h1>
        <div>
          <label
            class="text-gray-800 font-semibold block my-3 text-md"
            for="username"
          >
            Username
          </label>
          <input
            onChange={handleOnChange}
            class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
            type="text"
            name="name"
            value={input.name}
            id="name"
            placeholder="name"
          />
        </div>
        <div>
          <label
            class="text-gray-800 font-semibold block my-3 text-md"
            for="email"
          >
            Email
          </label>
          <input
            onChange={handleOnChange}
            class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
            type="text"
            name="mail"
            value={input.mail}
            id="mail"
            placeholder="@mail"
          />
        </div>
        <div>
          <label
            class="text-gray-800 font-semibold block my-3 text-md"
            for="phone"
          >
            Phone
          </label>
          <input
            onChange={handleOnChange}
            class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
            name="phone"
            id="phone"
            value={input.phone}
            placeholder="@phone"
          />
        </div>
        <input
          type="submit"
          value="Add"
          className="mt-6 bg-cyan-500 shadow-lg shadow-cyan-500/50 p-4 text-white font-bold rounded"
        />
      </form>
    </>
  );
};

export default EmployForm;
