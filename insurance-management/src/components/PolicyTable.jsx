import React from "react";
import PolicyRow from "./PolicyRow";

const PolicyTable = ({ policies, onEdit, onDelete }) => {
  return (
    <table>
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
          <PolicyRow
            key={policy.id}
            policy={policy}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default PolicyTable;
