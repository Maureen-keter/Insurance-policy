import React, { useState, useEffect } from "react";

const PolicyForm = ({ onAddPolicy, onUpdatePolicy, editingPolicy, setEditingPolicy }) => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    premium: "",
    status: "",
  });

  useEffect(() => {
    if (editingPolicy) {
      setFormData(editingPolicy);
    } else {
      setFormData({ name: "", type: "", premium: "", status: "" });
    }
  }, [editingPolicy]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingPolicy) {
      onUpdatePolicy(editingPolicy.id, formData);
      setEditingPolicy(null);
    } else {
      onAddPolicy(formData);
    }
    setFormData({ name: "", type: "", premium: "", status: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="policy-form">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="type"
        placeholder="Type"
        value={formData.type}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="premium"
        placeholder="Premium"
        value={formData.premium}
        onChange={handleChange}
        required
      />
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
      <button type="submit">{editingPolicy ? "Update" : "Add"} Policy</button>
    </form>
  );
};

export default PolicyForm;
