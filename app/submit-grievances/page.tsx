"use client";


import {
  Button,
  TextArea,
  TextInput,
  Select,
  SelectItem,
  DatePicker,
  DatePickerInput,
  FileUploader,
} from "@carbon/react";
import { useState } from "react";

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, category: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, image: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Later send to API route
  };

  const handleReset = () => {
    setFormData({
      category: "",
      district: "",
      address: "",
      ward: "",
      date: "",
      description: "",
      image: null,
    });
  };

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Submit Grievance</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Category */}
        <Select
          id="category"
          labelText="Category"
          onChange={handleCategoryChange}
          defaultValue=""
          required
        >
          <SelectItem value="" text="Choose category" />
          <SelectItem value="road" text="Road" />
          <SelectItem value="transport" text="Transportation" />
          <SelectItem value="water" text="Water" />
          <SelectItem value="electricity" text="Electricity" />
          <SelectItem value="health" text="Health" />
        </Select>

        {/* Horizontal Row */}
        <div className="grid grid-cols-2 gap-4">
          <TextInput
            id="district"
            name="district"
            labelText="District"
            placeholder="Enter district"
            value={formData.district}
            onChange={handleChange}
            required
          />
          <TextInput
            id="address"
            name="address"
            labelText="Address"
            placeholder="Enter address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <TextInput
            id="ward"
            name="ward"
            labelText="Ward Number"
            type="number"
            placeholder="Ward"
            value={formData.ward}
            onChange={handleChange}
            required
          />
          <DatePicker
            dateFormat="d/m/Y"
            onChange={(dates) => {
              setFormData((prev) => ({
                ...prev,
                date: dates[0]?.toISOString() || "",
              }));
            }}
          >
            <DatePickerInput
              id="date"
              placeholder="dd/mm/yyyy"
              labelText="Date"
              type="text"
            />
          </DatePicker>
        </div>

        {/* Description */}
        <TextArea
          id="description"
          name="description"
          labelText="Describe the issue"
          placeholder="Enter details here"
          value={formData.description}
          onChange={handleChange}
          required
        />

        {/* File Upload */}
        <FileUploader
          buttonLabel="Add Image"
          labelTitle="Upload Supporting Image (optional)"
          labelDescription="Max file size 2MB, JPG/PNG only"
          onChange={handleFileChange}
          accept={[".jpg", ".jpeg", ".png"]}
        />

        {/* Buttons */}
        <div className="flex gap-4">
          <Button type="submit" kind="primary">
            Submit
          </Button>
          <Button type="button" kind="secondary" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </form>
    </main>
  );
}
