import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddJob = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    phone: "",
    jobDate: "",
    jobName: "",
    jobCardNo: "",
    customerName: "",
    originalSize: "",
    material: "",
    printingDateSize: "",
    acrossWPS: "",
    acrossGap: "",
    around: "",
    aroundGap: "",
    teethSize: "",
    blocks: "",
    windingDirection: "",
    labelType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Material added successfully!");
    console.log(formData);

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="py-10 flex flex-col gap-3 justify-center items-center bg-gray-100">
      <h1 className="text-2xl">Add New Job</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-md">
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone No:"
          className="border border-black/20 rounded-2xl w-full p-3"
        />
        <input
          type="date"
          name="jobDate"
          value={formData.jobDate}
          onChange={handleChange}
          className="border border-black/20 rounded-2xl w-full p-3"
        />
        <input
          type="text"
          name="jobName"
          value={formData.jobName}
          onChange={handleChange}
          placeholder="Job Name:"
          className="border border-black/20 rounded-2xl w-full p-3"
        />
        <input
          type="text"
          name="jobCardNo"
          value={formData.jobCardNo}
          onChange={handleChange}
          placeholder="Job Card No:"
          className="border border-black/20 rounded-2xl w-full p-3"
        />
        <input
          type="text"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
          placeholder="Customer Name:"
          className="border border-black/20 rounded-2xl w-full p-3"
        />
        <input
          type="text"
          name="originalSize"
          value={formData.originalSize}
          onChange={handleChange}
          placeholder="Job Original Size:"
          className="border border-black/20 rounded-2xl w-full p-3"
        />

        <select
          name="material"
          value={formData.material}
          onChange={handleChange}
          className="border border-black/20 rounded-2xl w-full p-3"
        >
          <option value="" disabled>
            Job Paper / File Material
          </option>
          <option value="Copri">Test</option>
        </select>

        <select
          name="printingDateSize"
          value={formData.printingDateSize}
          onChange={handleChange}
          className="border border-black/20 rounded-2xl w-full p-3"
        >
          <option value="" disabled>
            Printing Date Size
          </option>
          <option value="Copri">Test</option>
        </select>

        <select
          name="acrossWPS"
          value={formData.acrossWPS}
          onChange={handleChange}
          className="border border-black/20 rounded-2xl w-full p-3"
        >
          <option value="" disabled>
            Across WPS:
          </option>
          <option value="Copri">Test</option>
        </select>

        <input
          type="text"
          name="acrossGap"
          value={formData.acrossGap}
          onChange={handleChange}
          placeholder="Across gap"
          className="border border-black/20 rounded-2xl w-full p-3"
        />

        <select
          name="around"
          value={formData.around}
          onChange={handleChange}
          className="border border-black/20 rounded-2xl w-full p-3"
        >
          <option value="" disabled>
            Around
          </option>
          <option value="Copri">Test</option>
        </select>

        <input
          type="text"
          name="aroundGap"
          value={formData.aroundGap}
          onChange={handleChange}
          placeholder="Around gap"
          className="border border-black/20 rounded-2xl w-full p-3"
        />

        <select
          name="teethSize"
          value={formData.teethSize}
          onChange={handleChange}
          className="border border-black/20 rounded-2xl w-full p-3"
        >
          <option value="" disabled>
            Teeth Size
          </option>
          <option value="Copri">Test</option>
        </select>

        <select
          name="blocks"
          value={formData.blocks}
          onChange={handleChange}
          className="border border-black/20 rounded-2xl w-full p-3"
        >
          <option value="" disabled>
            Blocks
          </option>
          <option value="Copri">Test</option>
        </select>

        <select
          name="windingDirection"
          value={formData.windingDirection}
          onChange={handleChange}
          className="border border-black/20 rounded-2xl w-full p-3"
        >
          <option value="" disabled>
            Winding Direction
          </option>
          <option value="Copri">Test</option>
        </select>

        <select
          name="labelType"
          value={formData.labelType}
          onChange={handleChange}
          className="border border-black/20 rounded-2xl w-full p-3"
        >
          <option value="" disabled>
            Label Type
          </option>
          <option value="Copri">Test</option>
        </select>

        <button
          type="submit"
          className="bg-[#3668B1] text-white py-3 px-6 rounded-md font-bold"
        >
          Submit
        </button>

        <Link
          to="/jobcard"
          className="bg-[#EFEDED] text-black border hover:border-black duration-200 py-3 px-6 rounded-md text-center"
        >
          Back
        </Link>
      </form>

      {message && (
        <div className="mt-4 text-green-600 font-bold text-lg">{message}</div>
      )}
    </div>
  );
};

export default AddJob;
