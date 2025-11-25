import React from 'react';
import { Link } from 'react-router-dom';

const MaterialList = () => {
  return (
      <div className="h-screen flex flex-col gap-3 pt-10 justify-start items-center bg-gray-100">
    {/* Ttile */}
    <h1 className="text-2xl ">Material Page</h1>
    {/* Buttons */}
    <div className="flex gap-10">
      <Link to="/addmaterial">
        <button className="bg-[#3668B1] text-white py-3 px-6 rounded-md">
          Add material
        </button>
      </Link>
      <Link to="/">
        <button className="bg-[#EFEDED] text-black border hover:border-black duration-200 py-3 px-6 rounded-md">
          Back to Home
        </button>
      </Link>
    </div>

    {/* Search */}
    <div className="w-80">
      <input
        type="text"
        placeholder="Search"
        className="border border-black/20 rounded-2xl w-full p-3"
      />
    </div>
    {/* Buttons */}
    <div className="flex gap-10">
      <button className="bg-[#3668B1] text-white py-3 px-6 rounded-md">
        From Date
      </button>
      <button className="bg-[#EFEDED] text-black border hover:border-black duration-200 py-3 px-6 rounded-md">
        To Date
      </button>
    </div>
    {/* Table */}
    <p className="font-bold">Material List</p>
    {/* table */}
    <div className="overflow-x-auto">
      <table className="table-auto w-full rounded-xl ">
        <thead className="bg-[#3668B1] text-white">
          <tr>
            <th className="px-4 py-2">No</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">Material 1</td>
            <td className="border px-4 py-2">10</td>
            <td className="border px-4 py-2">Action</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default MaterialList;
