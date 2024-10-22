// Settings.jsx
import React from 'react';

const Settings = ({ itemsPerPage, onItemsPerPageChange }) => {
  return (
    <div className="pagination-settings">
      <label htmlFor="pagination">Display books per page:</label>
      <select id="pagination" value={itemsPerPage} onChange={onItemsPerPageChange}>
        <option value="20">20 per page</option>
        <option value="40">40 per page</option>
      </select>
    </div>
  );
};

export default Settings;