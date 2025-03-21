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

  
};

export default PolicyForm;
