import React from "react";

const PolicyTable = ({ policies, onEdit, onDelete }) => {
  return (
    <table className="policy-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Type</th>
          <th>Premium</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {policies.map((policy) => (
          <tr key={policy.id}>
            <td>{policy.id}</td>
            <td>{policy.name}</td>
            <td>{policy.type}</td>
            <td>{policy.premium}</td>
            <td>{policy.status}</td>
            <td>
              <button onClick={() => onEdit(policy)}>Edit</button>
              <button onClick={() => onDelete(policy.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PolicyTable;
