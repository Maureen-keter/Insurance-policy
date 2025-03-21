import React, { useState, useEffect } from "react";

const PolicyForm = ({ policy = {}, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    id: policy.id || "",
    name: policy.name || "",
    type: policy.type || "",
    premium: policy.premium || "",
    status: policy.status || "",
  });

  // Update formData when editing a policy
  useEffect(() => {
    if (policy) {
      setFormData({
        id: policy.id || "",
        name: policy.name || "",
        type: policy.type || "",
        premium: policy.premium || "",
        status: policy.status || "",
      });
    }
  }, [policy]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID:</label>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Type:</label>
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Premium:</label>
        <input
          type="number"
          name="premium"
          value={formData.premium}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Status:</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <div>
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default PolicyForm;
