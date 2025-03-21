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

  
  
};

export default App;
