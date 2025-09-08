"use client";

import { useState } from "react";
import Bottom from "../components/common/Button";

export default function SubmitGrievance() {
  const [formData, setFormData] = useState({
    category: "",
    district: "",
    address: "",
    ward: "",
    date: "",
    description: "",
    image: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="pb-20 px-6 max-w-3xl mx-auto">
      <h1 className="text-xl font-semibold mb-6">Submit Grievance</h1>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Select Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Choose category</option>
            <option value="road">Road</option>
            <option value="water">Water</option>
            <option value="transport">Transport</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <input
            name="district"
            placeholder="District"
            value={formData.district}
            onChange={handleChange}
            className="rounded-md border-gray-300 shadow-sm"
          />
          <input
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="rounded-md border-gray-300 shadow-sm"
          />
          <input
            name="ward"
            placeholder="Ward No"
            value={formData.ward}
            onChange={handleChange}
            className="rounded-md border-gray-300 shadow-sm"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="rounded-md border-gray-300 shadow-sm"
          />
        </div>

        <textarea
          name="description"
          placeholder="Describe Issue"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="w-full rounded-md border-gray-300 shadow-sm"
        />

        <div>
          <label className="block text-sm font-medium">
            Add Images/Attachments (Optional)
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                image: e.target.files?.[0] || null,
              }))
            }
            className="mt-1 block w-full text-sm text-gray-600"
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md"
          >
            Submit
          </button>
          <button
            type="reset"
            className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md"
          >
            Reset
          </button>
        </div>
      </form>

      <Bottom />
    </main>
  );
}
