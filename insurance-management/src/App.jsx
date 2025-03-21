import React, { useState, useEffect } from "react";
import axios from "axios";
import PolicyForm from "./components/PolicyForm";
import PolicyTable from "./components/PolicyTable";
import "./App.css";

const App = () => {
  const [policies, setPolicies] = useState([]);
  const [editingPolicy, setEditingPolicy] = useState(null);

  useEffect(() => {
    fetchPolicies();
  }, []);

  const fetchPolicies = () => {
    axios.get("http://localhost:5000/policies")
      .then(response => setPolicies(response.data))
      .catch(error => console.error("Error fetching policies:", error));
  };

  const addPolicy = (policy) => {
    axios.post("http://localhost:5000/policies", policy)
      .then(() => fetchPolicies())
      .catch(error => console.error("Error adding policy:", error));
  };

  const updatePolicy = (id, updatedPolicy) => {
    axios.patch(`http://localhost:5000/policies/${id}`, updatedPolicy)
      .then(() => fetchPolicies())
      .catch(error => console.error("Error updating policy:", error));
  };

  const deletePolicy = (id) => {
    axios.delete(`http://localhost:5000/policies/${id}`)
      .then(() => fetchPolicies())
      .catch(error => console.error("Error deleting policy:", error));
  };

  return (
    <div className="app">
      <h1>Insurance Policy Management System</h1>
      <PolicyForm
        onAddPolicy={addPolicy}
        onUpdatePolicy={updatePolicy}
        editingPolicy={editingPolicy}
        setEditingPolicy={setEditingPolicy}
      />
      <PolicyTable
        policies={policies}
        onEdit={setEditingPolicy}
        onDelete={deletePolicy}
      />
    </div>
  );
};

export default App;
