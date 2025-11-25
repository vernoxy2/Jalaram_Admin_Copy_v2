import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddMateriall = () => {
  const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const [rows, setRows] = useState([{ material: "", quantity: "", price: "" }]);
    const addRow = () => {
      setRows([...rows, { material: "", quantity: "", price: "" }]);
    };

    const handleRowChange = (index, field, value) => {
      const updatedRows = [...rows];
      updatedRows[index][field] = value;
      setRows(updatedRows);
    };

    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent default form submission
      setMessage("Material added successfully!");

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate("/");
      }, 2000);
    };
  return (
    <div className="h-screen flex flex-col gap-3 justify-center items-center bg-gray-100">
        <h1 className="text-2xl">Add Material</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-1/5">
          <input
            type="date"
            placeholder="Date"
            className="border border-black/20 rounded-2xl w-full p-3"
          />
          <select className="border border-black/20 rounded-2xl w-full p-3">
            <option value="" disabled selected>
              Company Name
            </option>
            <option value="Copri">Capri</option>
            <option value="Krutika">Krutika</option>
            <option value="Stiqa">Stiqa</option>
            <option value="Sunpaper">Sunpaper</option>
          </select>
          <input
            type="text"
            placeholder="Material Type"
            className="border border-black/20 rounded-2xl w-full p-3"
          />
          <input
            type="text"
            placeholder="Paper Size"
            className="border border-black/20 rounded-2xl w-full p-3"
          />
          <hr className="h-[2px] mx-3 bg-black" />
          <h1 className="text-2xl">Material Details</h1>
          {rows.map((row, index) => (
            <div key={index} className="grid grid-cols-3 gap-2 ">
              <input
                type="text"
                placeholder="Material Name"
                className="border border-black/20 rounded-2xl w-full p-3"
                value={row.material}
                onChange={(e) =>
                  handleRowChange(index, "material", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Quantity"
                className="border border-black/20 rounded-2xl w-full p-3"
                value={row.quantity}
                onChange={(e) =>
                  handleRowChange(index, "quantity", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Price"
                className="border border-black/20 rounded-2xl w-full p-3"
                value={row.price}
                onChange={(e) => handleRowChange(index, "price", e.target.value)}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addRow}
            className="text-blue-600 font-bold underline self-start"
          >
            Add Row
          </button>

          <button
            type="submit"
            className="bg-[#3668B1] text-white py-3 px-6 rounded-md font-bold"
          >
            Submit
          </button>
          <Link to="/material">
            <button className="bg-[#EFEDED] text-black border hover:border-black duration-200 py-3 px-6 rounded-md">
              Back 
            </button>
          </Link>
        </form>

        {message && (
          <div className="mt-4 text-green-600 font-bold text-lg">{message}</div>
        )}
      </div>
  );
}

export default AddMateriall;
