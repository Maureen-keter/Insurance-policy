import React from "react";

const PolicyRow = ({ policy, onEdit, onDelete }) => {
  return (
    <tr>
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
  );
};

export default PolicyRow;
