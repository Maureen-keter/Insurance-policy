import React, { useState, useEffect } from "react";
import axios from "axios";
import PolicyForm from "./components/PolicyForm";
import PolicyTable from "./components/PolicyTable";

const App = () => {
  const [policies, setPolicies] = useState([]);
  const [editingPolicy, setEditingPolicy] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/policies")
      .then((response) => setPolicies(response.data))
      .catch((error) => console.error("Error fetching policies:", error));
  }, []);

  const addPolicy = (policy) => {
    axios
      .post("http://localhost:5000/policies", policy)
      .then((response) => setPolicies([...policies, response.data]))
      .catch((error) => console.error("Error adding policy:", error));
  };

  const updatePolicy = (id, updatedPolicy) => {
    axios
      .patch(`http://localhost:5000/policies/${id}`, updatedPolicy)
      .then(() => {
        setPolicies(
          policies.map((policy) => (policy.id === id ? updatedPolicy : policy))
        );
        setEditingPolicy(null);
      })
      .catch((error) => console.error("Error updating policy:", error));
  };

  const deletePolicy = (id) => {
    axios
      .delete(`http://localhost:5000/policies/${id}`)
      .then(() =>
        setPolicies(policies.filter((policy) => policy.id !== id))
      )
      .catch((error) => console.error("Error deleting policy:", error));
  };

};

export default App;
