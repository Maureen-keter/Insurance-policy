import React, { useState, useEffect } from "react";

const PolicyForm = ({ policy = {}, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    id: policy.id || "",
    name: policy.name || "",
    type: policy.type || "",
    premium: policy.premium || "",
    status: policy.status || "",
  });

  
};

export default PolicyForm;
