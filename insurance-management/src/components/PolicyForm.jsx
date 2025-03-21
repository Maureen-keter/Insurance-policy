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

 
};

export default PolicyForm;
